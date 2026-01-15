import { Injectable } from '@angular/core';
import { STACK_CONFIG, PillCategory, TagKey, StackPillData, } from '../constants/project-tags.config';

export interface StackPillResolved extends StackPillData { key: TagKey; }

@Injectable({
  providedIn: 'root',
})
export class StackService {
  private readonly stackByCategory: Record<
    PillCategory,
    StackPillResolved[]
  >;

  constructor() {
    this.stackByCategory = {
      frontend: [],
      backend: [],
      databases: [],
      devops: [],
      cms: [],
    };

    for (const key of Object.keys(STACK_CONFIG) as TagKey[]) {
      const pill = STACK_CONFIG[key];
      this.stackByCategory[pill.category].push({
        key,
        ...pill,
      });
    }
  }

  getStack(category: PillCategory): StackPillResolved[] {
    return this.stackByCategory[category];
  }
}