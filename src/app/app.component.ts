import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './core/services/loader.service';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  loading = this.loader.loading$;

  constructor(private loader: LoaderService) {}
}
