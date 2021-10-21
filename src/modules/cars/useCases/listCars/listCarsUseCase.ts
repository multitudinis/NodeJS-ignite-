import { Car } from "../../infra/typeorm/entities/car";
import { ICarsRepository } from "../../infra/typeorm/respositories/ICarsRepository";

interface IRequest{
    category_id?: string,
    brand?: string,
    name?: string
}

class listCarsUseCase{
    constructor(private CarsRepository:ICarsRepository){}
    async execute({category_id, brand, name}: IRequest):Promise<Car[]>{
        const cars = await this.CarsRepository.findAvailable(category_id, brand, name)
        return cars
    }
}

export { listCarsUseCase }