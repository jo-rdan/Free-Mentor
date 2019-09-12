const query = [
  {
    create: `INSERT INTO users(firstname,lastname,email,password,address,bio,occupation,expertise) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
    isUser: `SELECT * FROM users WHERE id=$1`,
    isExist: `SELECT * FROM users WHERE email=$1`,
    isAdmin: `SELECT * FROM users WHERE isadmin=true AND ismentee=false`,
    changeToMentor: `UPDATE users SET ismentee=false WHERE id= $1 RETURNING *`,
    getOne: `SELECT firstname, lastname, email, address, bio, occupation, expertise FROM users WHERE ismentee=false AND isadmin=false AND id = $1`,
    getAllMentors: `SELECT firstname, lastname, email, address, bio, occupation, expertise FROM users WHERE ismentee=false AND isadmin=false`,
  },
  {
    createSession: `INSERT INTO session (mentorId, menteeId, questions, menteeEmail,status) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    isSessionExist: `SELECT * FROM session where questions=$1 AND menteeEmail=$2`,
    isSession: `SELECT * FROM session where sessionid=$1`,
    accept: `UPDATE session SET status='accepted' WHERE sessionid = $1 RETURNING *`,
    reject: `UPDATE session SET status='rejected' WHERE sessionId = $1 RETURNING *`,
    review: `INSERT INTO review (sessionId, mentorFullName, score, menteeFullName, remark) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    deleteReview: `DELETE FROM review WHERE sessionId = $1`,
  }
];

export default query; 