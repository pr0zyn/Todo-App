export class Task {
         id: number;
         title: string;
         content: string;
         check: boolean;
         color: string; 
     constructor(id: number,title: string, content: string,  check: boolean, color: string){ 
         this.id = id;
         this.title = title;
         this.content = content;
         this.check = check;
         this.color = color;
    }
}
