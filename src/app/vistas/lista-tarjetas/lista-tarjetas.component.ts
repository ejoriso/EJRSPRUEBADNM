import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/tarjeta-model';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css'],
})
export class ListaTarjetasComponent implements OnInit {
  listaTarjetas: Card[] = [];
  listaCompleta: Card[] = [];
  private offset = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerTarjetas().subscribe((response) => {
      this.listaCompleta = response.data;
      this.listaTarjetas = this.listaCompleta.slice(0, 20);
      this.offset = 20;
    });
  }

  onScroll(): void {
    this.listaTarjetas = [
      ...this.listaTarjetas,
      ...this.listaCompleta.slice(this.offset, this.offset + 20),
    ];

    this.offset += 20;
  }
}
