import jwt from 'jsonwebtoken';


export const creteTokens = (user) => {
    const accessToken = jwt.sign({username:user.username,id:user._id},"mk");
    return accessToken;
}
// export const validateTokens = async (req, res, next) => {
//     const accessToken = await req.cookies["access-token"];
//     if(!accessToken){
//         return res.status(400).json({message:"ko co token"})
//     }
//     try {
//             const validToken = jwt.verify(accessToken,'mk')
//             if(validToken){
//                 return next();
//             }
//     } catch (error) {
//         return res.status(400).json({message:"ko co token2"});
//     }
// }