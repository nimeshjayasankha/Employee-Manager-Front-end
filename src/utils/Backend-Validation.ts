export const backendValidation = (
  setError: Function,
  field: string,
  message: string
) => {
  return setError(field, {
    message: message,
  });
};
