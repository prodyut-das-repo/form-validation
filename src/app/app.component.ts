import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('radio', { read: ElementRef, static: true }) value: ElementRef;
  allDetails: {
    firstName: string,
    lastName: string,
    email: string,
    children: string
  };
  clickRadio() {
    this.valueRadio = this.value.nativeElement.checked;
  }
  valueRadio: any;
  flightDetails: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  /**
   * on init
   */
  ngOnInit() {
    this.flightDetails = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  /**
   * Determines whether submit on
   * @returns  
   */
  onSubmit() {
    this.submitted = true;
    console.log(this.valueRadio);

    if (this.flightDetails.invalid && this.valueRadio === undefined) {
      return;
    }
    if (this.flightDetails.valid && this.valueRadio !== undefined) {
      this.allDetails = {
        firstName: this.flightDetails.value.firstName,
        lastName: this.flightDetails.value.lastName,
        email: this.flightDetails.value.email,
        children: this.valueRadio ? 'Yes' : 'No'
      }
    }

  }

  //error handling
  get f() { return this.flightDetails.controls; }
}
