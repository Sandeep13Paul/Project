import { asyncHandler } from '../utils/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    console.log(username , " ", password);
    return res.status(200).json({
        message: "ok"
    });
});

export { registerUser };