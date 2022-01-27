import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupCardComponent } from './makeup-card.component';

describe('MakeupCardComponent', () => {
  let component: MakeupCardComponent;
  let fixture: ComponentFixture<MakeupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
