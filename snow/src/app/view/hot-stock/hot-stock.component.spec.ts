import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotStockComponent } from './hot-stock.component';

describe('HotStockComponent', () => {
  let component: HotStockComponent;
  let fixture: ComponentFixture<HotStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
