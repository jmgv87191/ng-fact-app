import { Invoice } from "../interfaces/invoice";


export const invoiceData: Invoice = {
    id:1,
    name: "Componentes de PC",
    total: 0,
    client:{
        name: 'Juan Manuel',
        lastname: 'Gutierrez',
        address:{
            country:'Mexico',
            city: 'La Paz B.C.S.',
            street: 'Sinaloa',
            number: 4
        }
    },
    company:{
        name: 'Empresa Privada',
        fisicalNumber: 23060
    },
    items:[
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 600,
            quantity: 1
        },
        {
            id: 2,
            product: 'Cosair Teclado mecanico',
            price: 400,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 900,
            quantity: 3
        },
    ]
}