import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  public form: FormGroup;
  constructor(private fbuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}
  createForm(): void {
    this.form = this.fbuilder.group({
      name: new FormControl('nikname'),
      email: new FormControl('email', [Validators.required, Validators.email]),
      avatar: new FormControl(''),
      din: new FormControl('1234567890'),
      pnombre: new FormControl('estarlin', Validators.required),
      snombre: new FormControl('enrique'),
      apellidop: new FormControl('lopez'),
      apellidom: new FormControl('valero'),
      genero: new FormControl('Masculino'),
      celular: new FormControl('3204454846'),
      telefonos: new FormControl('3204454846'),
      pais: new FormControl('Venezuela'),
      departamento: new FormControl('Trujillo'),
      ciudad: new FormControl('Chejende'),
      barrio: new FormControl('El turiamo'),
      direccion: new FormControl(' casa 1'),
      fechanacimiento: new FormControl('1977-12-08'),
      role_id: new FormControl(0),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get pnombre() {
    return this.form.get('pnombre');
  }
  save(): void {
    let value = this.form.value;
    console.log(value);
  }
}
