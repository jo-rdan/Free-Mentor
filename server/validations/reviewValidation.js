const remark = /\S+[a-zA-Z_ .!?]*[.!?]/;
const validateReview = (req,res,next) => {
  try {
    if (!remark.test(req.body.remark)) throw new Error('Your remarks must be valid remarks');
    if (req.body.score < 1 || req.body.score > 5) throw new Error('The score must be on a scale of 1 to 5');
    next();
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.message });
  }
}

export default validateReview;