import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnComponent } from './loginn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginnComponent', () => {
  let component: LoginnComponent;
  let fixture: ComponentFixture<LoginnComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ LoginnComponent ]
    })
    .compileComponents();
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should login with valid credentials', () => {
    // Arrange
    const validCredentials = {
      stringLogin: 'example@example.com',
      password: 'Admin_123'
    };
    
    // Act
    component.loginForm.setValue(validCredentials);
    component.login();
    
    // Assert
    expect(component.loginForm.valid).toBe(true);
    expect(component.errors).toBe('');

    // Add assertions for API call and redirection
  });
  it('should show error message for invalid credentials', () => {
    // Arrange
    const invalidCredentials = {
      stringLogin: '',
      password: ''
    };
    
    // Act
    component.loginForm.setValue(invalidCredentials);
    component.login();
    
    // Assert
    expect(component.loginForm.valid).toBe(false);
    expect(component.errors).toBe('Please Fill Your Email or Password');
    // Add assertions for API call and error message
  });
  it('should show error message for empty login form', () => {
    // spyOn(console, 'error');

    // Act
    component.loginForm.setValue({
      stringLogin: '',
      password: ''
    });
    component.login();
    
    // Assert
    expect(component.loginForm.get('stringLogin').value).toBe('');
    expect(component.loginForm.get('password').value).toBe('');
    expect(component.errors).toBe('Please Fill Your Email or Password');

  });
  it('should show error message for missing username', () => {
    // Act
    component.loginForm.setValue({
      stringLogin: '',
      password: 'password123'
    });
    component.login();
    
    // Assert
    expect(component.loginForm.get('stringLogin').value).toBe('');
    expect(component.errors).toBe('Please Fill Your Email or Password');
  });
  it('should show error message for missing password', () => {
    // Act
    component.loginForm.setValue({
      stringLogin: 'example@example.com',
      password: ''
    });
    component.login();
    
    // Assert
    expect(component.loginForm.get('password').value).toBe('');
    expect(component.errors).toBe('Please Fill Your Email or Password');
  });

});
