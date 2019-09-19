import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  
  public items: Array<{ title: string; note: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Vaga ' + i,
        note: 'Isso é uma vaga',
      });
    }
  }

  ngOnInit() {
  }

}
