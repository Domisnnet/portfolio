import { Component, ChangeDetectionStrategy, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { StackPillData, TAG_CONFIG, PillCategory } from '../../constants/project-tags.config';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
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
  sortedPills(): StackPillData[] {
    return this.project().tags
      .map(tag => TAG_CONFIG[tag])
      .filter(Boolean)
      .sort(this.sortByCategory);
  }

  private sortByCategory(a: StackPillData, b: StackPillData): number {
    const order: Record<PillCategory, number> = {
      frontend: 1,
      backend: 2,
      databases: 3,
      devops: 4,
      cms: 5,
    };

    return order[a.category] - order[b.category];
  }

  /* =========================
    CATEGORIES (GLOW ENGINE)
  ========================= */
  categories = computed<PillCategory[]>(() => {
    const set = new Set<PillCategory>();

    for (const tag of this.project().tags) {
      const pill = TAG_CONFIG[tag];
      if (pill) set.add(pill.category);
    }

    return Array.from(set);
  });
}