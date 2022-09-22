export enum ExcpetionStatusType {
    Error = 500,
    RegistroExistenteException = 400,
    ParamObrigatorioException = 400,
    AxiosError = 502,
    ParamObrigatorioAulaException = 400,
    ParamNaoEhJsonException = 400,
    AuthenticationTokenException = 400,
    AlunoNaoPertenceAulaException = 400,
    ServicoIndisponivelException = 503
}