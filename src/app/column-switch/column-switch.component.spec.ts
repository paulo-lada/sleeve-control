import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnSwitchComponent } from './column-switch.component';

describe('ColumnSwitchComponent', () => {
  let component: ColumnSwitchComponent;
  let fixture: ComponentFixture<ColumnSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnSwitchComponent]
    });
    fixture = TestBed.createComponent(ColumnSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
