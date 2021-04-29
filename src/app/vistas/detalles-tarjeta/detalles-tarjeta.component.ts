import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { Card } from '../../models/tarjeta-model';

@Component({
  selector: 'app-detalles-tarjeta',
  templateUrl: './detalles-tarjeta.component.html',
  styleUrls: ['./detalles-tarjeta.component.css'],
})
export class DetallesTarjetaComponent implements OnInit {
  idTarjeta!: number;
  tarjetaActual!: Card;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.has('id')) {
        this.idTarjeta = Number(params.get('id'));
        this.obtenerDetallesTarjeta();
      }
    });
  }

  obtenerDetallesTarjeta(): void {
    this.apiService.obtenerDetalles(this.idTarjeta).subscribe((response) => {
      this.tarjetaActual = response.data[0];
    });
  }
}
