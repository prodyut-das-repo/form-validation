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
    children: string,
    numberOfChildren: number
  };
  clicked = false;
  childrenIf: string;
  clickRadio() {
    this.valueRadio = this.value.nativeElement.checked;
    this.clicked = true;
    this.childrenIf =  this.valueRadio ? 'Yes' : 'No'
  }
  childDetails: any[] = [];

  numberOfChild: number;
  valueRadio: any;
  public flightDetails: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.flightDetails = this.createForm();
  }
  /**
   * on init
   */
  ngOnInit() {

  }
  /**
   * Determines whether submit on
   * @returns  
   */
  onSubmit() {
    this.submitted = true;
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      personalData: this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.email]]
      })
    });
  }
  //error handling
  get f() { return this.flightDetails.controls; }

  childDetail() {
    this.childDetails.length = this.numberOfChild
  }

  passengerDetails(event) {
    this.allDetails = event;
  }
  childrenDetails(event) {
    this.childDetails = event;
  }
}
