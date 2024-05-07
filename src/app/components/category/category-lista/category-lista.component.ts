import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './category-lista.component.html'  
})
export class CategoryListaComponent {
  category: Category[];

  constructor(private categoryServicio: CategoryService, private enrutador: Router){
    
  }

  ngOnInit(){
    //Cargamos las categorias
    this.obtenerCategorias();
  }
  private obtenerCategorias(){
    //Consumir los datos del observable (subscribirnos)
    this.categoryServicio.obtenerCategoriasLista().subscribe(
      (datos=>{
        this.category = datos;
      })
    );
  }
  public editarCategoria(id: number){
    this.enrutador.navigate(['editar-category',id])
  }
  public eliminarCategoria(id: number){
    this.categoryServicio.eliminarCategoria(id).subscribe(
      {next:(datos)=>this.obtenerCategorias(),
        error:(errores)=>console.log(errores)
      }
    )
  }
}
