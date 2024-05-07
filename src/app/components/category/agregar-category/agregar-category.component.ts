import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-category.component.html'  
})
export class AgregarCategoryComponent {
  categoria : Category = new Category();

  constructor(private categoriaServicio: CategoryService, private enrutador: Router){

  };

  onSubmit(){
    this.guardarCategoria();
  }
  guardarCategoria(){
    this.categoriaServicio.agregarCategoria(this.categoria).subscribe({
      next:(datos)=>{
        this.irListaCategorias();
      },error:(error:any)=>{console.log(error)}      
    }
    );
  }

  irListaCategorias(){
    this.enrutador.navigate(['/categorys'])
  }
}
