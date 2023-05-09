import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignningComponent } from './user-signning.component';

describe('UserSignningComponent', () => {
  let component: UserSignningComponent;
  let fixture: ComponentFixture<UserSignningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSignningComponent]
    });
    fixture = TestBed.createComponent(UserSignningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
