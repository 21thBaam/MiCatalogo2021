import { Component, OnInit } from '@angular/core';
import {AUTOMOVILES} from '../../../assets/data';
import {Automovil} from '../../interfaces/models'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[] = [];
  autoVacio: Automovil = {} as Automovil;
  page: number = {} as number;
  pageSize: number = {} as number;
  searchText: any;
  constructor() { }

  ngOnInit() {
    this.page = 1;
    this.pageSize = 10;
    this.autos = AUTOMOVILES;
  }

}
