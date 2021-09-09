import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  lists=[
    {id:1 , value:"option1"},
    {id:2 , value:"option2"},
    {id:3, value:"option3"}
  ]

  log(x: any){console.log(x);}
  onsubmit(form){
    console.log(form);
  }
}
