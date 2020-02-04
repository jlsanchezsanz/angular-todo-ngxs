import { Component, ViewChild, ElementRef } from "@angular/core";
import { TodoService } from "./todo.service";
import { TodosState } from "./state/todo.state";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Todo } from "./todo.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("todoInput", { static: false }) todoInput: ElementRef;

  @Select(TodosState.uncompletedTodos) uncompletedTodos$: Observable<Todo[]>;

  @Select(TodosState.completedTodos) completedTodos$: Observable<Todo[]>;

  constructor(public todoService: TodoService) {}

  public onAddTodo(title: string): void {
    this.todoService
      .addTodo(title)
      .pipe(take(1))
      // clean form
      .subscribe();
  }

  public onCompleteTodo(id: string): void {
    this.todoService.setCompleted(id);
  }

  public onRemoveTodo(id: string): void {
    this.todoService.removeTodo(id);
  }
}
