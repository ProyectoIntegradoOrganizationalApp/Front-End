/**
 *  Clase abstracta que nos declara el comportamiento que debe
 *  tener una clase para mapear sus atributos a otra.
 */
export abstract class Mapper<I, O> {

    /** Mapeado de un objeto a otro **/
    abstract mapFrom( param: I ): O;

    /** Mapeado a la inversa **/
    abstract mapTo( param: O ): I;

    /** Mapea un array de objetos de tipo I a O **/
    mapArrayFrom( params: I[] ): O[] {
        return params.map((param) => this.mapFrom(param));
    }

    /** Mapea un Array de objetos de tipo O a I **/
    mapArrayTo( params: O[] ): I[] {
        return params.map((param) => this.mapTo(param));
    }

}