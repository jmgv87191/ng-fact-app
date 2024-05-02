import { Injectable } from '@angular/core';
import { Invoice } from '../interfaces/invoice';
import { invoiceData } from '../data/data';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoice:Invoice = invoiceData

  constructor() { }

  getInvoice():Invoice{

    const total = this.getTotal()

    return {...this.invoice,total}
  }

  getTotal(){

    let total =0;

    invoiceData.items.forEach(item => {
      total += ( item.price * item.quantity )
    });

    return total;

  }

  deleteItem(id:number){
    this.invoice.items = this.invoice.items.filter( item =>item.id != id )
    const total = this.getTotal()
    return {...this.invoice,total}
  }

  save(item: Items):Invoice{
    this.invoice.items = [...this.invoice.items, item];
    
    const total = this.getTotal()
    return {...this.invoice,total}

  
  }

}
