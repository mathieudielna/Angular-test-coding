import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public form: FormGroup = new FormGroup(
      {nom: new FormControl(''),
       email: new FormControl(''),
       password: new FormControl(''),
       confirmation: new FormControl(''),
    });

  constructor(){}

  ngOnInit(): void {}

  //Default : setValue({Tous les champs}) - pacthValue({ un ou plusieurs champs})
  //Control : removeControl('nom') - addControl({'nom', new formControl('')) - setControl('', new FormControl(''))
  //GetControl : get('nom')
  //reset : this.form.reset('nom')

  public submit() {
    console.log(this.form.getRawValue())
    console.log(this.form.value);
  }
}
