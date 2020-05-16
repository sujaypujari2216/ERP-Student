import { Component, OnInit } from '@angular/core';
import { DatatableService } from '../shared/datatable-service/datatable.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  constructor(private datatableservice:DatatableService) { }

  ngOnInit(): void {
    this.datatableservice.initTable("Fees");
  }

}
