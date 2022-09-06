import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private api : string = 'https://63173eeccb0d40bc415008b8.mockapi.io';

  constructor(
    private http: HttpClient
  ) { }

  obtenerProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.api}/producto`);
  }

  nuevoProducto(producto : Producto) {
    return this.http.post<Producto>(`${this.api}/producto`, producto);
  }

  modificarProducto(producto : Producto){
    return this.http.put<Producto>(`${this.api}/producto/${producto.aplicacion}`, producto);
  }

  eliminarProducto(producto : Producto){
    return this.http.delete<Producto>(`${this.api}/producto/${producto.aplicacion}`);
  }

}
