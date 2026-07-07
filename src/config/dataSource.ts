import { DataSource } from "typeorm";
import PetEntity from "../models/PetEntity";

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "./src/config/database.sqlite",
    entities: [PetEntity],
    synchronize: true,
})