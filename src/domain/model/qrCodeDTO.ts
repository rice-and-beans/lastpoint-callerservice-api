export interface IGeraQrCodeRequestDTO {
    codAula: string;
    codProfessor: string;
    token: string;
}

export interface IRealizaChamadaQrCodeRequestDTO {
    codUsuario: string;
    chaveAula: string;
    token: string;
}

export interface IValidaAulaQrCodeRequestDTO {
    codAula: string;
    codUsuario: string;
    token: string;
}