import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysPedidosLayoutComponent } from './sys-pedidos-layout.component';

describe('SysPedidosLayoutComponent', () => {
  let component: SysPedidosLayoutComponent;
  let fixture: ComponentFixture<SysPedidosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysPedidosLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysPedidosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
