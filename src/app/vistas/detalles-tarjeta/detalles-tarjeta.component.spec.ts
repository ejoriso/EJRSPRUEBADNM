import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTarjetaComponent } from './detalles-tarjeta.component';

describe('DetallesTarjetaComponent', () => {
  let component: DetallesTarjetaComponent;
  let fixture: ComponentFixture<DetallesTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
