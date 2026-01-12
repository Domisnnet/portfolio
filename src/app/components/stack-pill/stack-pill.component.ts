import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack-pill',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'category()', 
  }
})

export class StackPillComponent {
  name = input<string>('');
  iconPath = input<string>('');
  category = input<'frontend' | 'backend' | 'database' | 'devops' | 'cms'>('frontend');
}