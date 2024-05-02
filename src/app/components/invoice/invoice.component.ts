import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  @Input() id:number = 0
  @Input() name:string = ''

  constructor( ){}

  ngOnInit(): void {

  }




}
