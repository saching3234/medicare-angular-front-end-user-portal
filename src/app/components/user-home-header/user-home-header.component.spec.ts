import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeHeaderComponent } from './user-home-header.component';

describe('UserHomeHeaderComponent', () => {
  let component: UserHomeHeaderComponent;
  let fixture: ComponentFixture<UserHomeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
