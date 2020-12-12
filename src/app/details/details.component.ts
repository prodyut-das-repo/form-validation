import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() formName: FormGroup;
  @Input() submitted:boolean;
  @Input() email:boolean;
  @Output() data = new EventEmitter();
  mymodel:any
  constructor(public controlContainer: ControlContainer) { }
  ngOnInit() {
    
  }
  onChange(){    
    this.data.emit(this.controlContainer.value);
  }
}
