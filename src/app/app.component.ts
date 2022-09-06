import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from './core/services/producto.service';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table';

  productos$!: Observable<Producto[]>;

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.productos$ = this.productoService.obtenerProducto()
  }
}
