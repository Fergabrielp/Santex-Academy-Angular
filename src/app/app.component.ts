import { Component } from '@angular/core';

type Producto = {
  nombre: string
  costo: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'xacademy-angular';

  mostrarProductos: boolean = false;

  productos: Producto[] = [
    {nombre: "Gabinete", costo: "25000"},
    {nombre: "Mouse", costo: "5000"},
    {nombre: "Auriculares", costo: "8000"},
    {nombre: "Teclado", costo: "15000"},
    {nombre: "Monitor", costo: "20000"},
  ]

  toggleProductos() {
    this.mostrarProductos = !this.mostrarProductos
  }

}
