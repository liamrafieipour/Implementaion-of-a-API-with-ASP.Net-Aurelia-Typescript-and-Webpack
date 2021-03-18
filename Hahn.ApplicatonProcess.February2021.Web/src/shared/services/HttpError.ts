export class HttpError extends Error {
  msg: String;
  constructor(msg) {
    super();
    this.msg = msg;
  }
}
