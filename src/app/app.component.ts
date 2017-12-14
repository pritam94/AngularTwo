import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> {{title}} </h1>
  <table>
  <tr>
  <td> name </td>
  <td><input name = 'name' #nameRef [(ngModel)] = 'Task.name'></td> 
  </tr>
  <tr>
  <td> desription </td>
  <td><input name  = 'description' #desRef  [(ngModel)] = 'Task.description'></td> 
  </tr>
  </table>

  <button [disabled]= "nameRef.value.length<1 || desRef.value.length<1" (click) = 'saveRecord()'> Save  </button>
  
  <hr>
  <table>
  <tr>
  <th> Record Id </th><th> name </th><th> description </th><th> edit </th><th> del </th>
  </tr>
  <tr *ngFor = 'let task of TaskList; let i = index'>
  <td> {{i}} </td><td> {{task.name | slice :'0':'1' | uppercase}}{{task.name | slice: '1'}} </td><td> {{task.description}} </td> <td><button (click) = 'EditRecord(i)'> Edit </button></td><td><button (click) = 'DeleteRecord(i)'> Delete </button></td></tr>
  </table>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String;
  Task : TaskRecord;
TaskList : TaskRecord[] = [];
   index : any;

    constructor()
    {
        this.Init();
    }

    Init()
    {
        this.title = 'CRUD operations';
        this.index = 0;
        this.Task = {
            name : '',
            description :''
        }
        
    }
    saveRecord()
    {
        if(this.index == 0)
        {
            this.TaskList.push(this.Task);
        } else{
         this.index = 0;
        }
        this.Init();
    }
    
    EditRecord(i:any)
    {
        this.index = 1;
        this.Task = this.TaskList[i];
    }
    
    DeleteRecord(i:any)
    {
        this.TaskList.splice(i, 1);
    }
    
    

}


 interface TaskRecord
 {
  
   name:String;
   description : String; 
 }
