import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalFilterComponent } from './optional-filter.component';

describe('OptionalFilterComponent', () => {
  let component: OptionalFilterComponent;
  let fixture: ComponentFixture<OptionalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionalFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
