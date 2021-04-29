import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../../models/api-response';
import { Card } from '../../models/tarjeta-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  obtenerTarjetas(): Observable<ApiResponse<Card[]>> {
    console.log('called service');
    return this.httpClient.get<ApiResponse<Card[]>>(`${this.url}/cardinfo.php`);
  }

  obtenerDetalles(id: number): Observable<ApiResponse<Card[]>> {
    return this.httpClient.get<ApiResponse<Card[]>>(
      `${this.url}/cardinfo.php`,
      {
        params: { id: id.toString() },
      }
    );
  }
}
