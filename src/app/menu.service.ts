import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'about', path: './about', children: [] },
      { 
        name: 'store', 
        path: './store', 
        children: [
          {
            name: 'items',
            path: './items',
            children: [
              { 
                name: 'THE FELLOWSHIP OF THE RING Details',
                path: './clothing'
              },
              { 
                name: 'THE RETURN OF THE KING',
                path: './fooditems'
              },
                     
            ]
          }
        ] 
      },
    ];

    return menu;
  }

}