import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task'
import  { TaskService} from '../../services/task.service'

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
   task : Task = {
      title: '',
      description: ''
  };
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
 
  onSubmit(){
    if(this.task.title != '' && this.task.description != ''){
      this.taskService.addTasks(this.task);
      this.task.title = '';
      this.task.description = '';
    }
  }
}
