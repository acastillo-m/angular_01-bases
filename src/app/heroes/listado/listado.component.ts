import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes :string[]=['Spiderman', 'IronMan', 'Deadpool', 'Capitan America']
  public heroeBorrado:string = ''
  constructor() { 
    console.log('constructor');
    
  }

  ngOnInit(): void {
    console.log('OnInit');
    
  }

  borrarHeroe(){
    
      this.heroeBorrado=this.heroes.shift() || '';
  }

}
