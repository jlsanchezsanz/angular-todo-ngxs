import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { Todo } from "./todo.model";
import { AddTodo, CompleteTodo, RemoveTodo } from "./state/todo.actions";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos: Todo[] = [
    {
      id: "123",
      title: "New task 1",
      isCompleted: false
    },
    {
      id: "124",
      title: "New task 2",
      isCompleted: false
    },
    {
      id: "125",
      title: "New task 3",
      isCompleted: false
    },
    {
      id: "126",
      title: "New task 4",
      isCompleted: false
    }
  ];

  constructor(private store$: Store) {}

  public set todos(_todos: Todo[]) {
    this._todos = _todos;
  }

  public get todos(): Todo[] {
    return this._todos;
  }

  public addTodo(title: string): Observable<any> {
    return this.store$.dispatch(new AddTodo(title));
  }

  public removeTodo(id: string): Observable<any> {
    return this.store$.dispatch(new RemoveTodo(id));
  }

  public setCompleted(id: string): Observable<any> {
    return this.store$.dispatch(new CompleteTodo(id));
  }
}
