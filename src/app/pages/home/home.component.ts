import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredproperties:any = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getfeaturedproperties()
  }

  getfeaturedproperties(){
    this.http.get("  ").subscribe(
      (res:any) => {
        this.featuredproperties = res.property;
      },
      (err) => {
        
      }
    )
  }

}
