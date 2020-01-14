import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

@Component({
  selector: 'app-linker',
  templateUrl: './linker.component.html',
  styleUrls: ['./linker.component.css']
})
export class LinkerComponent implements OnInit {

  employees: Employee[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response => {this.employees = response; }
    );
  }

}
