import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ThemeToggleComponent } from './core/theme-toggle.component'; // Re-adding the component

@Component({
  selector: 'app-root',
  // Re-importing ThemeToggleComponent
  imports: [CommonModule, RouterOutlet, RouterModule, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}