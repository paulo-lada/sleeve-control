import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  public person: any = {
    name: '',
    phone: '',
    address: '',
    observation: ''
  };
  
  constructor(private dialogRef: MatDialogRef<PersonComponent>) {}

  public submitForm(): void {
    // Aqui você pode enviar os dados da pessoa para o backend
    console.log(this.person);
  }

  public cancel(): void {
    // Fechar a modal quando o usuário cancelar o cadastro
    this.dialogRef.close();
  }
}
