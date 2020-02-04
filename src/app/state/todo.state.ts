import { Action, State, StateContext, Selector } from "@ngxs/store";
import { Todo } from "../todo.model";
import { AddTodo, RemoveTodo, CompleteTodo } from "./todo.actions";

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: "todosState",
  defaults: { todos: [] }
})
export class TodosState {
  @Selector()
  static uncompletedTodos(state: TodoStateModel) {
    return state.todos.filter(todo => !todo.isCompleted);
  }

  @Selector()
  static completedTodos(state: TodoStateModel) {
    return state.todos.filter(todo => todo.isCompleted);
  }

  @Action(AddTodo)
  addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
    const state = ctx.getState();
    // ctx.setState({
    //   ...state,
    //   todos: [...state.todos, action.todo]
    // });
    const { title } = action;
    const id = state.todos.length
      ? `${parseInt(state.todos[state.todos.length - 1].id, 10) + 1}`
      : "1";
    ctx.patchState({
      todos: [
        ...state.todos,
        {
          id,
          title,
          isCompleted: false
        }
      ]
    });
  }

  @Action(CompleteTodo)
  completeTodo(ctx: StateContext<TodoStateModel>, action: CompleteTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: state.todos.map(todo => ({
        ...todo,
        isCompleted: todo.id === action.id
      }))
    });
  }

  @Action(RemoveTodo)
  removeTodo(ctx: StateContext<TodoStateModel>, action: RemoveTodo) {
    const state = ctx.getState();
    ctx.patchState({
      todos: state.todos.filter(todo => todo.id !== action.id)
    });
  }
}
