import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product: any = {
    title: '',
    description: '',
    quantity: 64,
    type: 'Sleeve', // Valor padrão
    photo: null
  };
  
  constructor(private dialogRef: MatDialogRef<ProductComponent>) {}

  public onPhotoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  public submitForm(): void {
    // Aqui você pode enviar os dados do produto para o backend
    console.log(this.product);
    this.dialogRef.close();
  }
  
  public cancel(): void {
    // Fechar a modal quando o usuário cancelar o cadastro
    this.dialogRef.close();
  }

  public selectOnFocus(event : any){
    setTimeout(() => {
      event.target.select();      
    }, 100);
  }
}
