import authService from "../services/authService.js";

async function signup(req, res) {
    try {
        const body = req.body;

        // Correção: Adicione o operador de atribuição (=)
        const resService = await authService.signup(body);

        res.send(resService);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export default { signup };
