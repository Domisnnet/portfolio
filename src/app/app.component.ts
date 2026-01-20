import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading$;

  constructor(private loader: LoaderService) {
    this.loading$ = this.loader.loading$;
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 1200);
  }
}