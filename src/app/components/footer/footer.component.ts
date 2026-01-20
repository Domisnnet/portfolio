import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router'; // IMPORTAÇÃO ADICIONADA

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // RouterLink ADICIONADO AOS IMPORTS
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}