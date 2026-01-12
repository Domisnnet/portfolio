import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPillComponent } from '../../components/stack-pill/stack-pill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StackPillComponent], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  stack = signal({
    frontend: [
      'HTML5',
      'CSS3',
      'Sass',
      'Bootstrap',
      'JavaScript',
      'Angular',
      'React',
      'Vue.js',
    ],
    backend: ['Node.js', 'Express', 'Python'],
    databases: ['MongoDB', 'MySQL'],
    devops: ['GitHub', 'VSCode', 'Vercel', 'NPM'],
    cms: [
      'WordPress',
      'SPA moderna',
      'API serverless (Node.js + Firebase Functions)',
    ],
  });

  getIcon(tech: string): string {
    const map: Record<string, string> = {
      'HTML5': 'assets/icons/html5.svg',
      'CSS3': 'assets/icons/css3.svg',
      'Sass': 'assets/icons/sass.svg',
      'Bootstrap': 'assets/icons/bootstrap.svg',
      'JavaScript': 'assets/icons/javascript.svg',
      'Angular': 'assets/icons/angular.svg',
      'React': 'assets/icons/react.svg',
      'Vue.js': 'assets/icons/vue-js.svg',
      'Node.js': 'assets/icons/node-js.svg',
      'Express': 'assets/icons/express.svg',
      'Python': 'assets/icons/python.svg',
      'MongoDB': 'assets/icons/mongodb.svg',
      'MySQL': 'assets/icons/mysql.svg',
      'GitHub': 'assets/icons/github.svg',
      'VSCode': 'assets/icons/vscode.svg',
      'Vercel': 'assets/icons/vercel.svg',
      'NPM': 'assets/icons/npm.svg',
      'WordPress': 'assets/icons/wordpress.svg',
      'SPA moderna': 'assets/icons/spa.svg',
      'API serverless (Node.js + Firebase Functions)': 'assets/icons/firebase.svg',
    };
    return map[tech] || '';
  }
}