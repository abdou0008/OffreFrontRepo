import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listDemande:any;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
      this.http.get("http://localhost:8085/listDemandeur").subscribe(data=>{
        this.listDemande=data;
        console.log(this.listDemande);
      },error=>{
        console.log(error);
      })
    
  }

}
