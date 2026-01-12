import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack-pill',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.scss']
})
export class StackPillComponent {
  @Input() name: string = '';
  @Input() iconPath: string = ''; 
  @Input() category: 'frontend' | 'backend' = 'frontend';
}