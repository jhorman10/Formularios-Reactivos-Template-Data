import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.forma = this.formBuilder.group({
      nombre: ['', [ Validators.required, Validators.minLength(3) ]],
      apellido: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.email ]]
    });

   }

   get f() { return this.forma.controls; }

   guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
   }

}
