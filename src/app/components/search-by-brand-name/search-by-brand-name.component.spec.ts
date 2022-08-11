import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBrandNameComponent } from './search-by-brand-name.component';

describe('SearchByBrandNameComponent', () => {
  let component: SearchByBrandNameComponent;
  let fixture: ComponentFixture<SearchByBrandNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBrandNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByBrandNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
