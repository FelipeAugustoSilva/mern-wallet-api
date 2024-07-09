import authRepository from "../repositories/authRepository.js"
import bcrypt from "bcrypt"

async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10);


    const userExists = await authRepository.findByEmail(body.email);
    if(userExists) throw new Error("user already exists!");

    return await authRepository.create({...body, password: hasPassword});
    
}
export default {
    signup,
};