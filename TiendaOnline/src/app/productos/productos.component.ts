import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  listaProductos = armarListaProductos();

  pagina = paginacion();

  constructor() { }

  ngOnInit(): void {
  }

}

function armarListaProductos() {
  let productos: producto[] = [];

  for (let i = 1; i <= 13; i++) {
    let producto: producto = {
      id: i,
      nombre: "Producto",
      precio: parseFloat('399999.99'),
      descripcion: "Calidad y frescura asegurada, mantené tus productos siempre frescos gracias a su control de temperatura, y aprovechá al máximo su rendimiento con un 45% de ahorro de consumo."
    };
    productos.push(producto);
  }

  return productos;
}

export interface producto{
  id:number;
  nombre:string;
  precio:number;
  descripcion:string;
}

function paginacion(){
  const urlParams = new URLSearchParams(window.location.search);
  let pagina: any = urlParams.get('pagina');
  if(pagina == null){
    pagina = "1";
  }
  return(pagina);
}




