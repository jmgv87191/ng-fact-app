import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Items } from '../../interfaces/items';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() items:Items[] = []
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  remove( id:number ){
    this.removeEventEmitter.emit( id )
  }

}
