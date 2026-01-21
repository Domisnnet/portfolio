import { ProjectLabCardComponent } from '../components/project-lab-card/project-lab-card.component';

@Component({
  selector: 'app-projects-lab-page',
  standalone: true,
  imports: [ProjectLabCardComponent],
  templateUrl: './projects-lab.page.html',
  styleUrls: ['./projects-lab.page.scss']
})
export class ProjectsLabPage {
  projects = [
    {
      title: 'Projeto LAB 01',
      image: 'https://picsum.photos/400/300?random=1'
    },
    {
      title: 'Projeto LAB 02',
      image: 'https://picsum.photos/400/300?random=2'
    }
  ];
}