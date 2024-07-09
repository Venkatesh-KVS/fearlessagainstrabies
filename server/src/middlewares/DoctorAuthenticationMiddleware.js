require('dotenv').config();
const jwt = require('jsonwebtoken');
const privateKey = process.env.TOKEN_SECRET_KEY;

const verifyDoctorToken = (req, res, next) => {
    const doctorToken = req.headers.authorization.split(' ')[1];
    
    if (!doctorToken) {
        return res.json({ TokenError: "not Authenticated, Login!" });
    } else {
        jwt.verify(doctorToken, privateKey, (err, decoded) => {
            if (err) { return res.json({ Error: "Bad Request!" });
        } else {
                req.doctorId = decoded.sub;
                next();
            }
        });
    }
  };

module.exports = { verifyDoctorToken };