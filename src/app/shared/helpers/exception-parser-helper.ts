export class ExceptionParserHelper {
  static parse(error: any): string {
    return JSON.parse(error.response);
  }
}
