import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TAG_CONFIG, StackPillData } from '../../constants/project-tags.config';

@Component({
  selector: 'app-stack-pill',
  standalone: true,
  templateUrl: './stack-pill.component.html',
  styleUrls: ['./stack-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-category]': 'data().category'
  }
})
export class StackPillComponent {
  tag = input.required<string>();

  data(): StackPillData {
    return TAG_CONFIG[this.tag] ?? {
      label: this.tag,
      iconPath: '',
      category: 'frontend',
    };
  }
}