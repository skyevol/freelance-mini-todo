import { Task } from "../task/task";

export class TaskBoard
{

  _tasks:Task[] = []

  constructor()
  {
    if(this._tasks.length == 0)
    {
      this._tasks.push(new Task("Nouvelle carte", "cliquer sur l'illustration pour l'éditer"))
      let t:Task = new Task("Vous recherchez un Dev Angular", "Dans le cadre de mes missions freelance, vous pouvez jetez un coup au code de cette mini-app sur github")
      t.set_link("code source", "https://github.com/skyevol/freelance-mini-todo")
      this._tasks.push(t)
    }
  }

  add()
  {
    this._tasks.splice(0, 0, new Task("Nouvelle carte", "cliquer sur l'illustration pour l'éditer"))
  }

  remove(index:number)
  {
    this.tasks.splice(index, 1)
  }

  get tasks():Task[]
  {
    return this._tasks
  }

}
