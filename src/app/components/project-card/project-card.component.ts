import { Component, ChangeDetectionStrategy, input, signal, computed, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { STACK_CONFIG, PillCategory, TagKey, } from '../../constants/project-tags.config';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  index = input<number>(0);

  project = input.required<{
    title: string;
    description: string;
    image: string;
    tags: TagKey[]; 
    link?: string;
  }>();

  /* =========================
     FLIP STATE
  ========================= */
  private readonly flipped = signal(false);
  readonly isFlipped = this.flipped.asReadonly();

  toggleFlip(): void {
    this.flipped.update(v => !v);
  }

  /* =========================
     STACK PILLS
  ========================= */
  readonly visibleTags = computed<TagKey[]>(() => {
    const order: Record<PillCategory, number> = {
      frontend: 1,
      backend: 2,
      databases: 3,
      devops: 4,
      cms: 5,
    };

    return this.project()
      .tags
      .filter((tag): tag is TagKey => tag in STACK_CONFIG)
      .sort((a, b) => {
        const pillA = STACK_CONFIG[a];
        const pillB = STACK_CONFIG[b];
        return order[pillA.category] - order[pillB.category];
      });
  });

  /* =========================
     CATEGORIES (GLOW ENGINE)
  ========================= */
  readonly categories = computed<PillCategory[]>(() => {
    const set = new Set<PillCategory>();

    for (const tag of this.visibleTags()) {
      set.add(STACK_CONFIG[tag].category);
    }

    return Array.from(set);
  });
}