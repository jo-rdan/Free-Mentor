class Responses {
  static onError (res, status, message) {
    return res.status(status).send({ status, error: message });   
  }

  static onSuccess(res, status, message, data) {    
    if (data && message) return res.status(status).send({ status, message, data });
    if ( data && !message) return res.status(status).send({ status, data });
    if (!data && message) return res.status(status).send({ status, message });
  }
}
export default Responses;