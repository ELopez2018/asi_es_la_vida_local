import { Items } from './../interfaces/items.interface';
import { Sale } from './../interfaces/sale.interface';
export const saleMock: Sale = {
  client: null,
  items:[
    {
      qty: 2,
      description: 'Aceite Diana',
      presentacion: 'Litro',
      precio: 100,
      moneda: 'Dolares',
      trm: 4000,
      descuento: 0,
      sku:'5c61140b',
      taxes:0
    },
    {
      qty: 2,
      description: 'Aceite Diana',
      presentacion: 'Litro',
      precio: 120,
      moneda: 'Dolares',
      trm: 4000,
      descuento: 10,
      sku:'5c61140b',
      taxes:0
    },
    {
      qty: 2,
      description: 'Aceite Diana',
      presentacion: 'Litro',
      precio: 130,
      moneda: 'Dolares',
      trm: 4000,
      descuento: 0,
      sku:'5c61140b',
      taxes:0
    },
    {
      qty: 2,
      description: 'Aceite Diana',
      presentacion: 'Litro',
      precio: 150,
      moneda: 'Dolares',
      trm: 4000,
      descuento: 0,
      sku:'5c61140b',
      taxes:0
    },
    {
      qty: 2,
      description: 'Aceite Diana',
      presentacion: 'Litro',
      precio: 200,
      moneda: 'Dolares',
      trm: 4000,
      descuento: 0,
      sku:'5c61140b',
      taxes:0
    },
  ],
  date: new Date(),
  status:"Pendiente",
  address: null,
  pay: null,
}

