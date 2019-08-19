export const HTTPSuccessResponseBuilder = (responseJSON: any) => {
  if (responseJSON.error) {
    return {
      success: false,
      data: responseJSON.error
    };
  } else {
    return {
      success: true,
      data: responseJSON.result
    };
  }
};

export const HTTPResponseHandler = (response: any) => {
  if (response.status === 204) {
    return {data: 'deleted'};
  }
  return response.json();
};