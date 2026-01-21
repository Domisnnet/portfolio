import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-project-lab-card',
  templateUrl: './project-lab-card.component.html',
  styleUrls: ['./project-lab-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectLabCardComponent {
  image = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
