import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  // private formsModule : FormsModule

  nuevo:Personaje ={
    nombre: 'Trunks',
    poder: 2000
  }

  constructor(){
  }


}
