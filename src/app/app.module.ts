import { TaskService } from './task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,OnChanges } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
