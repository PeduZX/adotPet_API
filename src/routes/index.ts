//aqui nesse arquivo centraliza todas as rotas

import express from "express";
import petRouter from "../routes/petRouter"

// roteador que faz o direcionamento de cada rota
const router = (app: express.Router) => {
    app.use("/pets", petRouter)
    
}

export default router