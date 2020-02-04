import { Todo } from "../todo.model";

export class AddTodo {
  static readonly type = "[Todos] Add";
  constructor(public title: string) {}
}

export class CompleteTodo {
  static readonly type = "[Todos] Complete";
  constructor(public id: string) {}
}

export class RemoveTodo {
  static readonly type = "[Todos] Remove";
  constructor(public id: string) {}
}
