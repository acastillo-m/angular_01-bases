import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()

export class DbzService{

    private _personajes: Personaje[]=[
        {
          nombre: 'goku',
          poder: 1500
        },
        {
          nombre: 'vegeta',
          poder: 5500
        }
      ];

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){
        console.log('Servicio inicializado');
    }
    
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}