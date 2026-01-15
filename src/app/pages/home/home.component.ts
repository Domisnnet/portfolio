import { Component } from '@angular/core';
import { StackService } from '../../services/stack.service';
import { PillCategory } from '../../constants/project-tags.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  readonly categories: readonly PillCategory[] = [
    'frontend',
    'backend',
    'databases',
    'devops',
    'cms',
  ];

  constructor(public readonly stackService: StackService) {}
}