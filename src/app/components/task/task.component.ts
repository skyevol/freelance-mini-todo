import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit
{

  @Output("remove") _remove: EventEmitter<any> = new EventEmitter();

  _task:Task = null
  closeResult = '';

  title:        string = ""
  content:      string = "";
  link_label:   string = ""
  link_url:     string = "";

  @Input() set task(value:Task)
  {
    this._task = value
  }

  constructor(private modalService: NgbModal)
  {

  }

  ngOnInit(): void
  {

  }

  get task():Task
  {
    return this._task
  }

  remove()
  {
    this._remove.emit()
  }

  openEditDialogBox(editdialogbox:any)
  {
    this.title = this._task.title
    this.content = this._task.content
    if(this._task.link)
    {
      this.link_url = this._task.link.url
      this.link_label = this._task.link.label
    }
    else
    {
      this.link_label = ""
      this.link_url = ""
    }

    this.modalService.open(editdialogbox, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) =>
      {
        this.task.title = this.title
        this.task.content = this.content
        if(this.link_label.length > 0 && this.link_url.length > 0)
        {
          this.task.set_link(this.link_label,  this.link_url)
        }
        else
         {
           this.task.clear_link()
         }
        this.title = ""
        this.content = ""
        this.link_label = ""
        this.link_url = ""
      },
      ()=>{}
    );
  }

}
