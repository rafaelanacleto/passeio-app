import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  camposFormulario: FormGroup;

  constructor() {
    this.camposFormulario = new FormGroup({
      // Define your form controls here
      nome : new FormControl('', Validators.required),
      descricao : new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Initialize your form controls or fetch data here
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
    console.log(this.camposFormulario.value);
    console.log('Esta valido:', this.camposFormulario.valid);
  }

  isCampoValid(nomeCampo: string) : boolean {
    const campo = this.camposFormulario.get(nomeCampo);
    return (campo?.invalid && campo?.touched) || false;
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
