import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-category.component.html'  
})
export class EditarCategoryComponent {
  categoria: Category = new Category();
  id:number;

  constructor(private categoriaServicio: CategoryService, 
    private ruta:ActivatedRoute,
    private enrutador: Router ){}

    ngOnInit(){
      this.id = this.ruta.snapshot.params['id'];
      this.categoriaServicio.obtenerCategoria(this.id).subscribe({
        next: (datos) => this.categoria = datos,
        error:(erroes:any)=> console.log(erroes)
      });
    }

    onSubmit(){
      this.actualizarCategoria();
    }

    actualizarCategoria(){
      this.categoriaServicio.actualizarCategoria(this.id, this.categoria).subscribe({
        next:(datos) => {this.irListaCategorias()},
        error:(error:any)=>{console.log(error)}      
      }
      );
    }
    irListaCategorias(){
      this.enrutador.navigate(['/categorys'])
    }    
}
