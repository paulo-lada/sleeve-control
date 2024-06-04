import { Component, Input } from '@angular/core';
import { ColumnTypeEnum } from '../utils/columnTypeEnum.utils';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() column: any = {};
  
  constructor(){}

  public addTask(){
    const task : any = {
      Title: 'Nova tarefa',
      Description: ''
    }

    if(this.column.Type == ColumnTypeEnum.RESERVA || this.column.Type == ColumnTypeEnum.SEPARAR){
      
    }

    this.column.Tasks.unshift(task);
  }

  public deleteTask(task : any){
    this.column.Tasks = this.column.Tasks.filter((t : any) => t != task);    
  }

  public switchView(view : any){
    console.log(view);
  }
}
