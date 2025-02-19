

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Hola soy pacheco';
  usuario = {
  nombre: 'Manuel Enrique Acosta Pacheco',
  edad: 19,
  
  };
  saludar() {
  return `Hola, ${this.usuario.nombre}`;
  }
}