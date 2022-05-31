import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, translate: TranslateService) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm(): void {
    this.form = this.fb.group({
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
  get email() {return this.form.get('email');}
  get pnombre() {return this.form.get('pnombre');}
  save(): void {
    let value = this.form.value;
    console.log(value);
  }
}
