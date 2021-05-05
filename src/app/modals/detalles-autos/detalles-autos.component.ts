import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-detalles-autos',
  templateUrl: './detalles-autos.component.html',
  styleUrls: ['./detalles-autos.component.css']
})
export class DetallesAutosComponent{
  accion: string = "";
  auto: any;

  constructor(public activeModal: NgbActiveModal) { }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
