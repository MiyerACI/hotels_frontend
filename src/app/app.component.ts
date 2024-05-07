import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CategoryListaComponent } from './components/category/category-lista/category-lista.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink,CategoryListaComponent,HttpClientModule],
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'reto3g40-app';
}
