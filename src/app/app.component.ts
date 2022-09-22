import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild("confirmation") 
  public el?: ElementRef<HTMLInputElement>;
  public form: FormGroup = new FormGroup(
      {nom: new FormControl('', [Validators.required, this.validatorsMat]),
       email: new FormControl('', Validators.minLength(2)),
       password: new FormControl('', this.passwordMatch(this.form)),
    });

    get password() {
      return this.form.get("password"); 
    }

    get confirmedPassword() {
      return this.form.get("confirmation"); 
    }

    validatorsMat(formControl : FormControl): {[x: string]: boolean} {
      if (formControl.value === 'mat') {
        return {notMat : true};
     }
      return {notMat : false};    
     }

     passwordMatch(formControl: FormControl): {[x:string] : boolean} {
      if (formControl.value !== this.el?.nativeElement.value) {
        return { notMatching: true};
      }
      return { notMatching: false};
     }
    
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
