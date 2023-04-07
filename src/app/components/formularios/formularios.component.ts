import { Directive, Input, Component } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn, Validators, FormBuilder, FormGroup, ValidationErrors, } from '@angular/forms';
import Swal from 'sweetalert2';



@Directive({
  selector: '[mustMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
})
export class MustMatchDirective implements Validators {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlName = this.mustMatch[0];
    const matchingControlName = this.mustMatch[1];

    const controlValue = control.get(controlName)?.value;
    const matchingControlValue = control.get(matchingControlName)?.value;

    if (controlValue === matchingControlValue) {
      return null;
    } else {
      return { mustMatch: true };
    }
  }
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  public formClient: FormGroup;
  public test = 'asdasdadasd'

  constructor(
    private fb: FormBuilder,
  ) {
    this.formClient = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      Apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      Email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      Telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      Usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Contraseña: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      PasswordRepeat: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    }, { validators: [this.checkPasswords] });
  };


  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get("Contraseña");
    const password_repeat = control.get("PasswordRepeat");
    return password &&
      password_repeat &&
      password.value !== password_repeat.value
      ? { passwordCoincide: false }
      : null;
  };

  createAccount() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Genial!' + this.formClient.value.nombre + ' ' + this.formClient.value.apellido,
      text: 'Tu usuario' + this.formClient.value.usuario + ' se creó exitosamente.',
      footer: '<a>DESAFIO03 / ANGULAR / CODERHOUSE</a>',
      showConfirmButton: false,
      timer: 9000,
      timerProgressBar: true,
    })

    this.formClient.reset();
  }

}

