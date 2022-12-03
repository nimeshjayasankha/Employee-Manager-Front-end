export interface ErrorResponse {
  status: number;
  data: any;
  message: string;
}

export interface OnError {
  response: ErrorResponse;
  message?: string;
}
