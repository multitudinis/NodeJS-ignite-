import { ICreateCarsDTO } from "../../../dtos/ICreateCarsDTO";
import { Car } from "../entities/car";

interface ICarsRepository{
    create(date: ICreateCarsDTO): Promise<Car>
    findByLicensePlate(license_plate): Promise<Car>
    findAvailable(
        category_id?: string,
        brand?: string,
        name?: string): Promise<Car[]>
}

export {ICarsRepository}