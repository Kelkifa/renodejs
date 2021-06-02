const jwt = require('jsonwebtoken');
const secretKey = "asidsaudiuwe9qe#@&#*^#!iqoeuqpwo2132";
// Authorization: Bearer asadiasodiuwdklasjdaiwdad
const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1]; //nếu có authHeader thì trả về cái đằng sau &&

    if (!token)
        return res
            .status(401)
            .json({ success: false, message: "Access token not found" });
    try {
        console.log(`*********** TOKEN: ${token}  **********`);
        const decoded = jwt.verify(token, secretKey);

        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }


}

module.exports = verifyToken;