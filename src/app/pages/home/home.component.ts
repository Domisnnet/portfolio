import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackService } from '../../services/stack.service';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';
import { PillCategory } from '../../constants/project-tags.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly stackService = inject(StackService);

  readonly categories: PillCategory[] = [
    'frontend',
    'backend',
    'databases',
    'devops',
    'cms',
  ];
}