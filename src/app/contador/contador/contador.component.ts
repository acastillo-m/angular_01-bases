import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{title}}</h1>
        <h2>La base es: <strong>{{base}}</strong></h2>
        <div></div>
        <button (click)="suma(-base)">-1</button>
        <span>{{numero}}</span>
        <button (click)="suma(base)">+1</button>
    
    `
})

export class ContadorComponent{
    public title:string = 'Contador App';
    public numero:number = 0;
    public base:number = 5;
  
    suma(valor:number):number{
      return this.numero += valor
    }
}



