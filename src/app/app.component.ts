import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceService } from './services/invoice.service';
import { Invoice } from './interfaces/invoice';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { CompanyViewComponent } from './components/company-view/company-view.component';
import { ListComponent } from './components/list/list.component';
import { TotalComponent } from './components/total/total.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { Items } from './interfaces/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvoiceComponent, 
    ClientViewComponent, CompanyViewComponent, ListComponent, TotalComponent, FormItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = '2-fact-app-repaso';
  invoice: Invoice;
  total:number = 0;


  constructor( private _service: InvoiceService ){
    this.invoice = _service.getInvoice()
    console.log(this.invoice)
  }
  
  ngOnInit(): void {
    this.invoice = this._service.getInvoice();
  }

  removeItem( id:number ){

    this.invoice = this._service.deleteItem(id)
  }

  addItem( item:Items ){
    this.invoice = this._service.save(item)

  }
  

}
