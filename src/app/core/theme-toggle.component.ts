import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  protected themeService = inject(ThemeService);
  protected isDark = computed(() => this.themeService.theme() === 'dark');

  protected toggle(): void {
    this.themeService.toggleTheme();
  }
}