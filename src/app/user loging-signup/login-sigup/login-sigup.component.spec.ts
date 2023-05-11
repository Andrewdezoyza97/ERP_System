import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSigupComponent } from './login-sigup.component';

describe('LoginSigupComponent', () => {
  let component: LoginSigupComponent;
  let fixture: ComponentFixture<LoginSigupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSigupComponent]
    });
    fixture = TestBed.createComponent(LoginSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
