const userController = {
    getUser: (req, res) => {
        res.status(200).json({message: "Working"})
    },
    loginUser: (req, res)=> {
        const {email, password} = req.body;

        // auth

    },
    signUpUser: (req, res)=> {

    }

}

export default userController