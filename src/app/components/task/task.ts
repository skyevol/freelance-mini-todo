export class Link
{

  constructor(public label:string, public url:string)
  {
    this.url = this.url.replace(/https?:\/\//gi, "")
  }

}

export class Task
{
  title: string = ""
  content: string = "";
  is_done: boolean = false;
  picture_url: string = ""
  link: Link = null

  constructor(title?:string, content?:string)
  {
    if(title)
      this.title = title;
    if(content)
      this.content = content;
    this.picture_url = `./assets/pictures/${ Math.floor(Math.random() * 34) }.jpg`
  }

  set_link(label:string, url:string)
  {
    this.link = new Link(label, url)
  }

  clear_link()
  {
    this.link = null;
  }

  click(index:number)
  {

  }

}
