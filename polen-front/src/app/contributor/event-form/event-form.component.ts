import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {

  @Input() formEvent: FormGroup;

  constructor(public activeModal: NgbActiveModal) {

  }

  close() {
    this.activeModal.close(this.formEvent.value);
  }

}
