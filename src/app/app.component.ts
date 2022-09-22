import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // declarations
  @ViewChild("confirmation", {static: true})
  public el!: ElementRef<HTMLInputElement>;
  public form: FormGroup = new FormGroup(
      {nom: new FormControl('', [Validators.required, this.validatorsMat]),
       email: new FormControl('', [Validators.required ,Validators.minLength(2)]),
       password: new FormControl('', [Validators.required]),
    });

  constructor(){}

    // get form fields
    get password() {
      return this.form.get("password");
    }

    get confirmedPassword() {
      return this.form.get("confirmation");
    }

    // function validator
    validatorsMat(formControl : FormControl): {[x: string]: boolean} {
      if (formControl.value === 'mat') {
        return {notMat : true};
     }
      return {notMat : false};
     }

     passwordMatch(formControl: FormControl): {[x:string] : boolean} {
      if (formControl.value !== this.el!.nativeElement.value) {
        // this.el = `<p> les champs : mots de passe  et confirmations doivent correspondre !</p>`;
        return { notMatching: true};
      }
      // if ( ) {
      //   return { notMatching: false};
      // }
      return { notMatching: false};

     }



  //onInit
  ngOnInit(): void {}

  //Default : setValue({Tous les champs}) - pacthValue({ un ou plusieurs champs})
  //Control : removeControl('nom') - addControl({'nom', new formControl('')) - setControl('', new FormControl(''))
  //GetControl : get('nom')
  //reset : this.form.reset('nom')


  //formSubmit
  public submit() {
    console.log(this.form.getRawValue())
    console.log(this.form.value);
  }
}
