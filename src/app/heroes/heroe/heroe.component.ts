import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'ironman';
    edad: number = 35


    obtenerNombre():string{

        return `${this.nombre} - ${this.edad}`
    }

    get NombreCapitalizado(){
        return this.nombre.toUpperCase()
    }

    cambiarNombre():void{
        this.nombre = 'spiderman';
    }

    cambiarEdad():void{
        this.edad = 20;
    }
}