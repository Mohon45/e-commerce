const httpResponse = (status, data, message) => {
  let respObj = {
    status: status,
    data: data,
    message: message,
  };
  return respObj;
};

module.exports = { httpResponse };
