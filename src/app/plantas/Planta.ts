export class Planta{
     id:number;
     nombre_comun:string;
     nombre_cientifico:string;
     tipo:string;
     altura_maxima:number;
     clima:string;
     sustrato_siembra:string;
     
     constructor(public _id:number,
        _nombre_comun:string,
        _nombre_cientifico:string,
        _tipo:string,
        _altura_maxima:number,
        _clima:string,
        _sustrato_siembra:string
        ){
         
        this.id=_id;
        this.nombre_comun = _nombre_comun
        this.nombre_cientifico =  _nombre_cientifico
        this.tipo = _tipo
        this. altura_maxima= _altura_maxima
        this.clima = _clima
        this.sustrato_siembra  = _sustrato_siembra
     }

    }