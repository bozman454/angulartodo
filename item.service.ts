import { Injectable } from '@angular/core';
import { Item }  from './item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class ItemService {
  private url = "http://localhost:3000/api/v1/todos";
  constructor(private HttpClient: HttpClient) { }


  getItems(){
    return this.HttpClient.get<Item[]>(this.url)
  }

  addItem(newTodo: Item){
    return this.HttpClient.post<Item>(this.url, newTodo)
  }
}
