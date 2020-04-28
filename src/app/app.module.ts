import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskComponent } from './components/task/task.component';
import { TaskBoardComponent } from './components/task-board/task-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskComponent,
    TaskBoardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
