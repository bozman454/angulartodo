import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
 })
export class ItemsComponent implements OnInit {
  
  items: any[];
  private itemsObservable : Observable<Item[]>;
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems():void{
    this.itemService.getItems()
      .pipe(map((todos) => {
        return todos;
      }),
      map((todolist) => {
        console.log(todolist);
        return todolist;
      }))
      .subscribe(items => this.items = items);
  }
  removeitem(id){
    for(let item of this.items){
      if(item.id === id){
        console.log(item);
        item.progress = "";
    }
  }
  }
  restoreone(id){
    for(let item of this.items){
      if(item.id === id)
        item.progress = "not done"; 
    }
  }
  additem = s => {
    if(s !== ""){
    let newTodo = {id: this.items.length + 1, content: s, progress: 'not done'};
    this.items.push(newTodo);
    this.itemService.addItem(newTodo)
      .subscribe( response => console.log(response),
      err => console.log(err)
      );
    }
}

  
  
}
