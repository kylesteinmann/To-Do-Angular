import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})




export class TodoFormComponent implements OnInit {
    todoForm: FormGroup
  constructor() { }

  ngOnInit(): void {

  }


private initForm() {
  let task = '';
  let priority = '';
  let deadline = '';


 taskSubmit(){
  this.task=
 }


  this.todoForm = new FormGroup({
    'task': new FormControl(null),
    'priority': new FormControl(null),
    'deadline': new FormControl(null)
  });

}


}




