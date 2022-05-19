export class Usuario {
    public readonly id: string;
    public codigo: string;
    public nome: string;
    public senha: string;
    public tipo: number;

    constructor(props: Omit<Usuario, 'id'>, id?: string){
        Object.assign(this, props);
    }
}