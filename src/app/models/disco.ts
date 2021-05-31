export class Disco {
    public id? : string;
    public titulo?: string;
    public interprete?: string;
    public anyoPublicacion?: string;

    constructor(id: string, titulo: string, interprete: string, anyoPublicacion: string) {
        this.id = id;
        this.titulo = titulo;
        this.interprete = interprete;
        this.anyoPublicacion = anyoPublicacion;
    }
}
