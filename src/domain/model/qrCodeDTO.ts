export interface IGeraQrCodeRequestDTO {
    codAula: string;
    codProfessor: string;
}

export interface IRealizaChamadaQrCodeRequestDTO {
    codUsuario: string;
    chaveAula: string;
}

export interface IValidaAulaQrCodeRequestDTO {
    codAula: string;
    codUsuario: string;
}