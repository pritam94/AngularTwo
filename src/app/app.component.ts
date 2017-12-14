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
  <tr *ngFor = 'let task of TaskList; let i = index'>
  <td [hidden] = 'true'> {{i}} </td>
  <td><button (click) = 'OpenRecord(i)'> {{task.name | slice :'0':'1' | uppercase}}{{task.name | slice: '1'}}</button> </td></tr>
  
  <div *ngIf='!check'>
  <hr>
  <tr>
  <th> Record Id </th><th> name </th><th> description </th><th> edit </th><th> del </th>
  </tr>
  <tr >
  <td> {{z}} </td><td> {{task.name | slice :'0':'1' | uppercase}}{{task.name | slice: '1'}} </td><td> {{task.description}} </td> <td><button (click) = 'EditRecord(z)'> Edit </button></td><td><button (click) = 'DeleteRecord(z)'> Delete </button></td></tr>
  
 
  </div>
   <hr>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : String;
  Task : TaskRecord;
TaskList : TaskRecord[] = [];
   index : any;
   task : TaskRecord;
   z : any;
   check : boolean;

    constructor()
    {
        this.Init();
    }

    Init()
    {
        this.title = 'Angular Second Assignment';
        this.index = 0;
        this.Task = {
            name : '',
            description :''
        }
        this.check=true;;
        
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
        this.check = true;
    }
    
    EditRecord(i:any)
    {
        this.index = 1;
        this.Task = this.TaskList[i];
        
        
    }
    
    DeleteRecord(i:any)
    {
        this.TaskList.splice(i, 1);
        this.Init();
        this.check = true;
    }
    OpenRecord(i)
    {
        this.z = i;
        this.task = this.TaskList[i];
        this.check = false;
    }
    
    

}


 interface TaskRecord
 {
  
   name:String;
   description : String; 
 }
