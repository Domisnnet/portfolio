import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacidade-termos',
  imports: [RouterLink],
  templateUrl: './privacidade-termos.html',
  styleUrl: './privacidade-termos.scss', // CORRIGIDO DE styleUrls PARA styleUrl
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacidadeTermosComponent {}