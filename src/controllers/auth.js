import User from "../models/user.js";

export const createUser = async (req, res) => {
    const { email } = req.body;
    // try {
        const findedUser = await User.findOne({email});
        if(!findedUser){
            try {
                const newUser = await User.create(req.body);
                res.status(200).json(newUser);
            } catch (error) {
                res.status(500).json({
                    "error": "User could not be created",
                    "success": "false"
                })
            }
        }else{
            res.status(409).json({
                "message": "User already exists!",
                "success": "false"
            })
        }
    // } catch (error) {
    //     res.status(500).json(error)
    // }

}