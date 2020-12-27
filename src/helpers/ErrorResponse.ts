export class ErrorResponse {
  private error = {};
  constructor(args?) {
    if (args) Object.assign(this.error, args);
  }
}
