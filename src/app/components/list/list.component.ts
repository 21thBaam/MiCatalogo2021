import { Component, OnInit } from '@angular/core';
import {Automovil} from '../../interfaces/models';
//import {AUTOMOVILES} from '../../../assets/data';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { KeyValue } from '@angular/common';
import {DetallesAutosComponent} from '../../modals/detalles-autos/detalles-autos.component';
import {AutosService} from '../../services/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[] = [];
  aSelected: any;
  closeResult: string = "";
  page = 1;
  pageSize = 10;
  constructor(private modalService: NgbModal, private autosService: AutosService) {}

  ngOnInit() {
    this.autosService.getAutos().subscribe((res) => {
      if(res){
        this.autos = res.data;
      }else{
        console.log("Respuesta ERROR");
      }
    });
  }

  open(auto: Automovil) {
    const modalRef = this.modalService.open(DetallesAutosComponent, {centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Detalles Automóvil';
  }
}
