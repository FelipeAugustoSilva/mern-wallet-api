import authService from "../services/authService.js";

async function signup(req, res) {
    try {
        const body = req.body;


        try{
            // Correção: Adicione o operador de atribuição (=)
            const resService = await authService.signup(body);
            return res.status(201).send(resService);
        } catch (err) {
            return res.status(409).send(err.message);
        }
        
        
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

async function signin(req, res) {
    const body = req.body;

    try{
        const token = await authService.signin(body);
        return res.send(token);
    } catch (err) {
        return res.status(401).send(err.message);
    }
}
export default { signup, signin };
