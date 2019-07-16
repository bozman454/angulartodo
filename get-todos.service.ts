import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {


  constructor(private httpClient : HttpClient) { }
  
  todoURL = "http://localhost:3000/api/v1/todos";
  
  get_todos(){
    return this.httpClient.get(this.todoURL);
  }
}
