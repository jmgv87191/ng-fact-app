import { Component, Input } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  @Input() client:Client = { name:'', lastname:'', address:{ country:'', city:'', street:'', number:0 } }

}
