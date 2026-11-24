from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from django.db import IntegrityError, transaction
from rest_framework import serializers
from rest_framework.serializers import HyperlinkedModelSerializer

from apps.courses.serializers import ClassGroupSyllabusSerializer
from apps.users.models import User, ClassGroup, Membership


class MembershipSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Membership
        fields = ['url', 'id', 'user', 'class_group', 'user_status']


class UserSerializer(HyperlinkedModelSerializer):
    class_groups = MembershipSerializer(source="class_group_links", many=True, read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'first_name', 'last_name', 'email', 'groups', 'class_groups']


class AccountRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, trim_whitespace=False, max_length=128)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'password']

    def validate_username(self, username):
        username = User.normalize_username(username)
        try:
            User._meta.get_field('username').run_validators(username)
        except DjangoValidationError as exc:
            raise serializers.ValidationError(exc.messages) from exc
        return username

    def validate(self, attrs):
        user = User(**{field: value for field, value in attrs.items() if field != 'password'})
        try:
            validate_password(attrs['password'], user=user)
        except DjangoValidationError as exc:
            raise serializers.ValidationError({'password': exc.messages}) from exc
        return attrs

    def create(self, validated_data):
        try:
            with transaction.atomic():
                return User.objects.create_user(**validated_data, role=User.Role.STUDENT)
        except IntegrityError as exc:
            # The database constraint also covers concurrent signups.
            if User.objects.filter(username=validated_data['username']).exists():
                raise serializers.ValidationError({
                    'username': User._meta.get_field('username').error_messages['unique'],
                }) from exc
            raise


class ClassGroupSerializer(HyperlinkedModelSerializer):
    syllabus = ClassGroupSyllabusSerializer(source="syllabus_links", many=True, read_only=True)
    users = MembershipSerializer(source="user_links", many=True, read_only=True)
    class Meta:
        model = ClassGroup
        fields = ['url', 'id', 'class_name', 'academic_year', 'users', 'syllabus', 'join_code']
