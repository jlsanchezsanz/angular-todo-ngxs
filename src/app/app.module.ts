import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from "./app.component";
import { TodoService } from "./todo.service";
import { TodosState } from "./state/todo.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TodosState]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
