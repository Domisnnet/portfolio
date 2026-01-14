import { Component, ChangeDetectionStrategy, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { TAG_CONFIG, PillCategory } from '../../constants/project-tags.config';

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
    tags: string[];
    link?: string;
  }>();

  /* =========================
    FLIP STATE
  ========================= */
  private flipped = signal(false);
  isFlipped = this.flipped.asReadonly();

  toggleFlip(): void {
    this.flipped.update(v => !v);
  }

 /* =========================
    STACK PILLS
  ========================= */
  visibleTags = computed(() => {
    const order: Record<PillCategory, number> = {
      frontend: 1,
      backend: 2,
      databases: 3,
      devops: 4,
      cms: 5,
    };

    return this.project()
      .tags.filter(tag => tag in TAG_CONFIG) 
      .sort((a, b) => {
        const pillA = TAG_CONFIG[a];
        const pillB = TAG_CONFIG[b];
        return order[pillA.category] - order[pillB.category];
      });
  });

  /* =========================
    CATEGORIES (GLOW ENGINE)
  ========================= */
  categories = computed<PillCategory[]>(() => {
    const set = new Set<PillCategory>();
    for (const tag of this.visibleTags()) {
      const pill = TAG_CONFIG[tag];
      if (pill) set.add(pill.category);
    }
    return Array.from(set);
  });
}