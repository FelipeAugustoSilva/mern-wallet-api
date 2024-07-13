import authRepository from "../repositories/authRepository.js"
import bcrypt from "bcrypt"

async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10);


    const userExists = await authRepository.findByEmail(body.email);
    if(userExists) throw new Error("user already exists!");

    return await authRepository.create({...body, password: hasPassword});
    
}

async function signin(body) {
    const userExists = await authRepository.findByEmail(body.email);
    if(!userExists) throw new Error("Email or password incorrect!");

    const passwordOk = bcrypt.compareSync(body.password, userExists.password);
    if(!passwordOk) throw new Error("Email or password incorrect!");

    return authRepository.generateToken(userExists._id);
}
export default {
    signup, signin,
};