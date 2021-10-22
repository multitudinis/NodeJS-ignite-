import { Repository, getRepository } from "typeorm";
import { ICreateCarsDTO } from "../../../../dtos/ICreateCarsDTO";
import { Car } from "../../entities/car";
import { ICarsRepository } from "../ICarsRepository";

class carsRepository implements ICarsRepository {

    private repository: Repository<Car>
    constructor() {
        this.repository = getRepository(Car)
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id }: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        })
        await this.repository.save(car)
        return car
    }
    async findByLicensePlate(license_plate: any): Promise<Car> {
        const car = await this.repository.findOne({license_plate})
        return car
    }
    async findAvailable(
        category_id?: string,
        brand?: string,
        name?: string
    ): Promise <Car[]>{
        const carsQuery = await this.repository.createQueryBuilder("car")
        .where("available = :available", {available: true})
        if (brand){
            carsQuery.andWhere("car.brand = :brand", {brand})
        }
        if (name){
            carsQuery.andWhere("car.name = :name", {name})
        }
        if (category_id){
            carsQuery.andWhere("car.category_id = :category_id", {category_id})
        }
        const cars =  await carsQuery.getMany()
        return cars
    }
}

export { carsRepository }