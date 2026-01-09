import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-pill',
  standalone: true,
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.css']
})
export class StackPillComponent {
  @Input() name!: string;
  @Input() icon?: string;
}