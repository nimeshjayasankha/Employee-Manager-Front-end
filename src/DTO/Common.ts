export interface ErrorResponse {
  status: number;
  data: any;
}

export interface OnError {
  response: ErrorResponse;
}
