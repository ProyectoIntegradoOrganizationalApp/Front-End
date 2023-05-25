/**
 *  Clase abstracta que nos declara el comportamiento que debe
 *  tener una clase para mapear sus atributos a otra.
 */
export abstract class Mapper<I, O> {

    /** Mapeado de entidad a DTO **/
    abstract mapFrom( param: I ): O;

    /** Mapeado de DTO a entidad **/
    abstract mapTo( param: O ): I;

    /** Mapea un array de entidades a DTO **/
    mapArrayFrom( params: I[] ): O[] {
        return params.map((param) => this.mapFrom(param));
    }

    /** Mapea un Array de DTO a entidades **/
    mapArrayTo( params: O[] ): I[] {
        return params.map((param) => this.mapTo(param));
    }

}