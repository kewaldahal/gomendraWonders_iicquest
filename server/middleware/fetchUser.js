import jwt from 'jsonwebtoken'

const fetchuser = (req, res, next) => {
    console.log(req.cookies)
	
	try {
		const user_token = req.cookies.user_token;
		
		if (!user_token) {
			return res.status(403).json({message: "Unauthorized user - No token provided."});
		}

		const data = jwt.verify(user_token, process.env.JWT_SECRET);
		const {username, id, email, type} = data;

		req.username = username;
		req.email = email;
        req.userId = id;
        req.type = type;

	} catch (error) {
		console.log(error)
		return res.status(403).json({message: "Unauthorized user - No token provided."});
	}
	next();
};

export default fetchuser;