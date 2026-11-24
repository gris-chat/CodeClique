import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { Register } from './register';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate empty form and validate filled form', () => {
    expect(component.registerForm.invalid).toBe(true);

    component.registerForm.setValue({
      first_name: 'Jean',
      last_name: 'Dupont',
      email: 'jean.dupont@example.com',
      password: 'password123',
    });

    expect(component.registerForm.valid).toBe(true);
  });
});
