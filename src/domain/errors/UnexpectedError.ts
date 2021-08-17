export class UnexpectedError extends Error {
  constructor() {
    super('Ocorreu um problema. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}