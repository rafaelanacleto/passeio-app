import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {




  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
  }
  onReset() {
    // Handle form reset logic here
    console.log('Form reset');
  }
  onCancel() {
    // Handle cancel action here
    console.log('Action cancelled');
  }

}
