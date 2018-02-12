import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';


import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TaskService } from './services/task.service';
import { FormsModule} from '@angular/forms'; // permite importar form sin este modulo no es posible visualizarlo 

@NgModule({
  declarations: [ // Aqui van todos los componentes que hacen parte de la app web 
    AppComponent,
    TasksComponent,   // componente de tareas 
    AddTasksComponent  // componente para add tareas nuevas desde un form 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs') //inicio la conexion de la db por environement
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
