const query = [
  {
    create: `INSERT INTO mentees(firstname,lastname,email,password,address,bio,occupation,expertise) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
    isExist: `SELECT * FROM mentees WHERE email=$1`,
    isMentor: `SELECT * FROM mentees WHERE ismentee=false`,
    changeToMentor: `UPDATE mentees SET ismentee=true WHERE id= $1`,
    getAllMentors: `SELECT id,firstname,lastname,email,address,bio,occupation,expertise FROM mentees WHERE ismentee = false`,
    getAMentor: `SELECT id,firstname,lastname,email,address,bio,occupation,expertise FROM mentees WHERE ismentee = false AND id=$1`,
  },
  {
    createSession: `INSERT INTO session (sessionId, mentorId, menteeId, questions, menteeEmail,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    accept: `UPDATE session SET status=accepted WHERE sessionId = $1`,
    reject: `UPDATE session SET status=rejected WHERE sessionId = $1`,
    review: `INSERT INTO review (sessionId, mentorFullName, score, menteeFullName, remark) VALUES ($1,$2,$3,$4,$5) RETURNIN *`,
    deleteReview: `DELETE FROM review WHERE sessionId = $1`,
  }
];

export default query; 