import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Task } from '../../models/task'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks:Task[];
   
  constructor(public taskService: TaskService ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      //     console.log(tasks);
        this.tasks = tasks;
    });

  }

  }

