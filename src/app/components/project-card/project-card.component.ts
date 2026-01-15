import { Component, ChangeDetectionStrategy, computed, input, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';
import { STACK_CONFIG, PillCategory, TagKey, StackPillData, } from '../../constants/project-tags.config';

/* =========================
  MODELO RESOLVIDO
========================= */
interface ResolvedPill extends StackPillData {
  key: TagKey;
}

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
  PILLS RESOLVIDAS 
  ========================= */
  readonly pills = computed<ResolvedPill[]>(() => {
    const order: Record<PillCategory, number> = {
      frontend: 1,
      backend: 2,
      databases: 3,
      devops: 4,
      cms: 5,
    };

    return this.project()
      .tags
      .map(key => ({
        key,
        ...STACK_CONFIG[key],
      }))
      .sort(
        (a, b) => order[a.category] - order[b.category]
      );
  });

  /* =========================
    CATEGORIES (GLOW ENGINE)
  ========================= */
  readonly categories = computed<PillCategory[]>(() => {
    return Array.from(
      new Set(this.pills().map(p => p.category))
    );
  });
}