import { Component, OnInit } from '@angular/core';
import { TaskBoard } from './task-board'

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit
{

  _taskboard:TaskBoard = null

  set taskboard(taskboard:TaskBoard)
  {
    this._taskboard = taskboard
  }

  get taskboard():TaskBoard
  {
    return this._taskboard
  }

  constructor()
  {
    this._taskboard = new TaskBoard()
  }

  ngOnInit(): void
  {

  }

}
