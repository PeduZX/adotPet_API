import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
    id:number;
    nome:string;
    especie:EnumEspecie;
    adotado:boolean;
    dataDeNacimento:Date;
}

export default TipoPet