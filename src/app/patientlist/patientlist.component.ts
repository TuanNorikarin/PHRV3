import { Component, OnInit } from '@angular/core';
// import '../../assets/js/dataTables.bootstrap4.min.js';

declare function myMethod(): any;

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     myMethod();

  }

}
