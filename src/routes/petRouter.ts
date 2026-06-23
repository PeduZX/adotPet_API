import express from "express";
import PetController from "../controller/PetController";

const router = express.Router();

// cuida de cada req
const petController = new PetController() 

router.post("/", petController.criaPet)
router.get("/", petController.listarPets)
router.put("/:id", petController.atualizarPet)
router.delete("/:id", petController.deletaPet)

export default router;