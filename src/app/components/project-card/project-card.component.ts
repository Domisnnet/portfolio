import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../stack-pill/stack-pill.component';

type PillCategory =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devops'
  | 'cms';

interface StackPillData {
  label: string;
  iconPath: string;
  category: PillCategory;
}

const TAG_CONFIG: Record<string, StackPillData> = {
  /* =========================
    FRONTEND
  ========================= */
  Angular: {
    label: 'Angular',
    iconPath: 'assets/icons/angular.svg',
    category: 'frontend',
  },
  CSS3: {
    label: 'CSS3',
    iconPath: 'assets/icons/css3.svg',
    category: 'frontend',
  },
  HTML5: {
    label: 'HTML5',
    iconPath: 'assets/icons/html5.svg',
    category: 'frontend',
  },
  React: {
    label: 'React',
    iconPath: 'assets/icons/react.svg',
    category: 'frontend',
  },
  JavaScript: {
    label: 'JavaScript',
    iconPath: 'assets/icons/javascript.svg',
    category: 'frontend',
  },
  'Tailwind.CSS': {
    label: 'Tailwind.CSS',
    iconPath: 'assets/icons/tailwind-css.svg',
    category: 'frontend',
  },
  'Vue.js': {
    label: 'Vue.js',
    iconPath: 'assets/icons/vue-js.svg',
    category: 'frontend',
  },

  /* =========================
    BACKEND / INFRA
  ========================= */
  Firebase: {
    label: 'Firebase',
    iconPath: 'assets/icons/firebase.svg',
    category: 'backend',
  },
  GitHub: {
    label: 'GitHub',
    iconPath: 'assets/icons/github.svg',
    category: 'devops',
  },

  /* =========================
    CONCEITUAIS / VISUAIS
  ========================= */
  API: {
    label: 'API',
    iconPath: 'assets/icons/api.svg',
    category: 'backend',
  }, 
  Architecture: {
    label: 'Architecture',
    iconPath: 'assets/icons/architecture.svg',
    category: 'backend',
  },
  Automation: {
    label: 'Automation',
    iconPath: 'assets/icons/automation.svg',
    category: 'devops',
  },
  'CSS Animations': {
    label: 'Css Animations',
    iconPath: 'assets/icons/css-animations.svg',
    category: 'frontend',
  },
  Design: {
    label: 'Design',
    iconPath: 'assets/icons/design.svg',
    category: 'frontend',
  },
  'Game Logic': {
    label: 'Game Logic',
    iconPath: 'assets/icons/game-logic.svg',
    category: 'backend',
  },
  'Motion': {
    label: 'Motion',
    iconPath: 'assets/icons/motion.svg',
    category: 'frontend',
  },
  Product: {
    label: 'Product',
    iconPath: 'assets/icons/product.svg',
    category: 'frontend',
  },
  SCSS: {
    label: 'SCSS',
    iconPath: 'assets/icons/scss.svg',
    category: 'frontend',
  },  
  SVG: {
    label: 'SVG',
    iconPath: 'assets/icons/svg.svg',
    category: 'frontend',
  },
  UI: {
    label: 'UI',
    iconPath: 'assets/icons/ui.svg',
    category: 'frontend',
  },
  UX: {
    label: 'UX',
    iconPath: 'assets/icons/ux.svg',
    category: 'frontend',
  },
};

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, StackPillComponent],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() index?: number;
  @Input() project!: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
  };

  isFlipped = false;

  toggleFlip(): void {
    this.isFlipped = !this.isFlipped;
  }

  resolvePill(tag: string): StackPillData {
    return (
      TAG_CONFIG[tag] ?? {
        label: tag,
        iconPath: 'assets/icons/default.svg',
        category: 'frontend',
      }
    );
  }
}