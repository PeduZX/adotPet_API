// classe para colocar metodos do controller
import { Request, Response } from "express";
import type TipoPet from "../types/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";


let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

// esse é o cria pet
let listaDePets: Array<TipoPet> = [];
export default class PetController {

    criaPet(req: Request, res: Response) {
        const { adotado, especie, dataDeNacimento, nome } = <TipoPet>req.body;
    
        
        if(!especie || !dataDeNacimento || !nome){
            return res.status(400).json({erro: "preencha todos os campos"})
        }

        if(!Object.values(EnumEspecie).includes(especie)){ // ou .includes(especie as EnumEspecie)
            return res.status(400).json({erro: "Especie inválida" })
        }

        const novoPet: TipoPet = { id: geraId(), adotado, especie, dataDeNacimento, nome };
        listaDePets.push(novoPet);
        return res.status(201).json(novoPet);
    }

     listarPets(req: Request, res: Response){
       return res.status(200).json(listaDePets);
    }

    atualizarPet(req: Request, res: Response){
        const { id } = req.params;
        const {adotado, especie, dataDeNacimento, nome} = <TipoPet>req.body
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if(!pet){
            return res.status(404).json({erro: "Pet não encontrado"});
        }

        pet.nome = nome;
        pet.dataDeNacimento = dataDeNacimento;
        pet.especie = especie;
        pet.adotado = adotado
        return res.status(200).json(pet)
    }

    deletaPet(req: Request, res: Response){
        const {id} = req.params;
        const pet = listaDePets.find((pet) => pet.id === Number(id));
        if(!pet){
            return res.status(404).json({erro: "Pet não encontrado"})
        }
        const index = listaDePets.indexOf(pet);
        listaDePets.splice(index,1)
        return res.status(200).json({mensagem: "Pet deletado com sucesso"})
    }
}


