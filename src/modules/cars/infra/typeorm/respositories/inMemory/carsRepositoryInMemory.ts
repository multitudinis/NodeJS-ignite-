import { ICreateCarsDTO } from "../../../../dtos/ICreateCarsDTO";
import { Car } from "../../entities/car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[] = []
    
    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id
    }:ICreateCarsDTO): Promise<Car>{
        const car = new Car()
        
        Object.assign(car, {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        })
        this.cars.push(car)
        return car
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find((car)=> car.license_plate === license_plate)
    }
    async findAvailable(
        category_id?: string,
        brand?: string,
        name?: string
    ): Promise<Car[]> {
        const all = this.cars
        .filter((car)=> car.available === true)
        .filter((car)=>
        (category_id && car.category_id === category_id)||
        (brand && car.brand === brand)||
        (name && car.name === name)
        )
        return all
    }
}

export { CarsRepositoryInMemory }