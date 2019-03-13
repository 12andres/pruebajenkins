import { Component, OnInit } from '@angular/core';
import {Calculator} from './calculator';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'PruebasUnitarias';
  


  }

  /*ngOnInit(){
    let calculador = new Calculator();
    let result = calculador.multiplicacion(3,3);
    console.log(result ==9);
    console.log(result !==12);
    let result1 = calculador.division(6,2);
    console.log(result1 ==3);
    console.log(result1 !==34);
    let result2 = calculador.division(6,0);
    console.log(result2===null);
    
*/

