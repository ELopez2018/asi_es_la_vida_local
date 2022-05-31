import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder, translate: TranslateService) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl(null),
      sku: new FormControl(uuidv4(), [Validators.required, Validators.email]),
      image: new FormControl(null),
      color: new FormControl(null),
      type_packaging: new FormControl(null, Validators.required),
      type_presentation: new FormControl(null),
      short_description: new FormControl(null),
      description: new FormControl(null),
      regular_price: new FormControl(null),
      sale_price: new FormControl(null),
      discount: new FormControl(null),
      status: new FormControl(null),
      stock_status	: new FormControl(null),
      carousel	: new FormControl(null),
      taxes	: new FormControl(null),
      stock_min	: new FormControl(null),
      stock	: new FormControl(null),
    });
  }
  get email() {return this.form.get('email');}
  get pnombre() {return this.form.get('pnombre');}

  get status() {return this.form.get('status');}
  get stock_status() {return this.form.get('stock_status');}
  save(): void {
    let value = this.form.value;
    console.log(value);
  }
}
