const strings = /\S+[a-zA-Z_ .!?]*[.!?]/;
const emails = /^\S+@[\w\-]+\.[A-Za-z]{2,}$/;

const validateSession = (req,res,next) => {
  try {
    if (!strings.test(req.body.questions)) throw new Error('Your question must be a valid question');
    if (!emails.test(req.body.mentorEmail)) throw new Error('Your email must be valid (e.g: jordankayinamura@gmail.com');
    next();
  } catch (error) {
    return res.status(400).send({ status: 400, error: error.message });
  }
}

export default validateSession;