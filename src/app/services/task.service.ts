import { Injectable } from '@angular/core';

import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Task } from '../models/task';

 
@Injectable()
export class TaskService {
  tasksCollection: AngularFirestoreCollection<Task>; // mira la colecciones de tarea entrante
  tasks: Observable<Task[]>; // observa la tarea en la db 
  taskDoc: AngularFirestoreDocument<Task>; // trae los documentos en db 
 
   
  constructor(public afs:AngularFirestore) { // AngularFirestore trae la db con nombre propio afs
    this.tasksCollection = this.afs.collection('tasks');//en la db hay una coleccion llamada tasks "creada por el user"
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.tasks = this.tasksCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Task;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTasks() {
    return this.tasks; 
  }

}

