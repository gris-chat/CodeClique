import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Auth } from '@shared/services/auth/auth';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(Auth);

  showPassword = signal(false);
  isLoading = signal(false);
  errorMessage = signal('');

  registerForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.maxLength(150)]],
    last_name: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  constructor() {
    this.registerForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        if (this.errorMessage()) {
          this.errorMessage.set('');
        }
      });
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const { first_name, last_name, email, password } = this.registerForm.getRawValue();

    try {
      const user = await this.authService.register({
        first_name: first_name!.trim(),
        last_name: last_name!.trim(),
        email: email!.trim(),
        password: password!,
      });
      this.isLoading.set(false);
      if (user) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.router.navigate(['/login'], { queryParams: { registered: '1' } });
      }
    } catch (err: unknown) {
      this.isLoading.set(false);
      this.handleError(err);
    }
  }

  private handleError(err: unknown) {
    if (!(err instanceof HttpErrorResponse)) {
      this.errorMessage.set('Une erreur est survenue. Veuillez réessayer.');
      return;
    }

    if (err.status === 0) {
      this.errorMessage.set('Impossible de contacter le serveur. Vérifiez votre connexion.');
      return;
    }

    if (err.status === 400 && err.error && typeof err.error === 'object') {
      const errors = err.error as Record<string, unknown>;
      let hasFieldError = false;

      for (const field of ['first_name', 'last_name', 'email', 'password'] as const) {
        const val = errors[field];
        if (val) {
          const message = Array.isArray(val) ? val.join(' ') : String(val);
          const control = this.registerForm.get(field);
          if (control) {
            control.setErrors({ ...control.errors, serverError: message });
            control.markAsTouched();
            hasFieldError = true;
          }
        }
      }

      const globalErr = errors['non_field_errors'] ?? errors['detail'];
      if (globalErr) {
        this.errorMessage.set(Array.isArray(globalErr) ? globalErr.join(' ') : String(globalErr));
      } else if (!hasFieldError) {
        this.errorMessage.set('Veuillez vérifier les informations saisies.');
      }
      return;
    }

    this.errorMessage.set('Une erreur est survenue. Veuillez réessayer.');
  }
}
