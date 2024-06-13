import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/user.model.js"

const userController = {
    getUser: (req, res) => {
        res.status(200).json({ message: "Working" })
    },

    signUpUser: async (req, res) => {
        const { type, fullName, email, password, age, gender, description } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        console.log(req.body)

        const dbUser = await User.findOne({ email });
        if (dbUser) {
            return res.status(403).json({
                message: `User with ${dbUser.email} already exists`,
            });
        }

        try {
            const newUser = await User.create({
                fullName,
                email,
                type,
                age,
                gender,
                description,
                password: hashedPassword,
            });
            await newUser.save();

            const data = {
				id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
                type: newUser.type,
                description: newUser.description
			};

			const user_token = jwt.sign(data, process.env.JWT_SECRET, {
				expiresIn: "7d",
			});

			res.cookie("user_token", user_token, {
				path: "/",
				httpOnly: true,
				secure: true,
				sameSite: "None"
			});

            return res.status(200).json({
                message: `successfully created a user named ${fullName}`,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "couldn't SignUp!" });
        }
    },

    loginUser: async(req, res) => {
        const { email, password } = req.body;

        try {
			const dbUser = await User.findOne({email});
			if (!dbUser) {
				return res.status(403).json({message: "Invalid credentials provided"});
			}

			// Check password
			const isValidPassword = await bcrypt.compare(password, dbUser.password);
			if (!isValidPassword) {
				return res.status(403).json({message: "Invalid credentials provided"});
			}

            console.log(dbUser)

			const data = {
				id: dbUser._id,
				fullName: dbUser.fullName,
				email: dbUser.email,
                type: dbUser.type,
                description: dbUser.description
			};

			const user_token = jwt.sign(data, process.env.JWT_SECRET, {
				expiresIn: "7d",
			});

			res.cookie("user_token", user_token, {
				path: "/",
				httpOnly: true,
				secure: true,
				sameSite: "None"
			});

			return res.status(200).json({message: "Successfully logged in", data});
		} catch (err) {
			console.error("Error during login", err);
			return res.status(500).json({message: "Internal server error"});
		}
    },

    logOutUser: async(req, res)=> {
        try {
			res.clearCookie("user_token");
			return res.status(200).json({message: "successfully cleared user session"});
		} catch (error) {
			return res.status(400).json({message: "Error! Couldn't Logout"});
		}
    }
}

export default userController;