import { Component } from '@angular/core';
import { ColumnTypeEnum } from '../utils/columnTypeEnum.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public columns : any = [];

  constructor(){}

  ngOnInit() {
    this.loadColumns();
  }

  private loadColumns(){
    if(this.columns.length == 0){
      this.makeDefaultColumns();
    }
  }

  private makeDefaultColumns() {
    this.columns.push(
      {
        Title : 'Reservas',
        Type  : ColumnTypeEnum.RESERVA,
        Tasks : [
          {
            Title: 'Pikachu aleatorio',
            Description : '1 brinde \n1 EU'
          }
        ]
      },
      {
        Title : 'Separar',
        Type  : ColumnTypeEnum.SEPARAR,
        Tasks : [
          {
            Title: 'Pikachu aleatorio',
            Description : '1 brinde \n1 EU'
          }
        ]
      },
      {
        Title : 'Receber',
        Type  : ColumnTypeEnum.RECEBER,
        Tasks : []
      },
      {
        Title : 'Rolos',
        Type  : ColumnTypeEnum.ROLO,
        Tasks : []
      },
      {
        Title : 'Envios',
        Type  : ColumnTypeEnum.ENVIO,
        Tasks : []
      }
    )
  }
}
