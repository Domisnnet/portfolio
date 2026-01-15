import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';
import { StackService } from '../../services/stack.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(public readonly stackService: StackService) {}
}