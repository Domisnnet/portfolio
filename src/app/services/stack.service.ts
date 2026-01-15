import { Injectable } from '@angular/core';
import { STACK_CONFIG, PillCategory, TagKey } from '../constants/project-tags.config';

@Injectable({
  providedIn: 'root',
})
export class StackService {
  private readonly stackMap: Record<PillCategory, TagKey[]> = {
    frontend: [
      'html5',
      'css3',
      'sass',
      'javascript',
      'angular',
      'react',
      'vue',
      'bootstrap',
      'tailwind',
    ],
    backend: ['node', 'express', 'python'],
    databases: ['mongodb', 'mysql'],
    devops: ['github', 'vscode', 'vercel', 'npm'],
    cms: ['wordpress'],
  };

  getStack(category: PillCategory) {
    return this.stackMap[category].map(key => ({
      key,
      ...STACK_CONFIG[key],
    }));
  }

  getCategories(): PillCategory[] {
    return Object.keys(this.stackMap) as PillCategory[];
  }
}