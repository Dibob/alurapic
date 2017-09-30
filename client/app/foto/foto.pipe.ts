
import {Pipe , PipeTransform} from '@angular/core';
import {FotoComponent} from './foto.component'
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

    // o correto é transform, eu errei aqui intencionalmente para mostrar algo a seguir!

    transform(fotos: FotoComponent[] , digitado: string) : FotoComponent []{
        console.log(fotos); // quem deve ser filtrado
        console.log(digitado); // o que deve ser usado como filtro

        digitado = digitado.toLowerCase();
        if(fotos.length == 0)
        return fotos;
        else
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}