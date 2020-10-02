import { Component, OnInit } from '@angular/core';
import { MenuService } from './../../menu.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  bookList: Array<any> = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.bookList = this.menuService
      .getMenu()[1].children[0].children;
  }

}
