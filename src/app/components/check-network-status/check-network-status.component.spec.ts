import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNetworkStatusComponent } from './check-network-status.component';

describe('CheckNetworkStatusComponent', () => {
  let component: CheckNetworkStatusComponent;
  let fixture: ComponentFixture<CheckNetworkStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckNetworkStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckNetworkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
