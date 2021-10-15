import { AppError } from "../../../../shared/errors/appError"
import { CarsRepositoryInMemory } from "../../infra/typeorm/respositories/inMemory/carsRepositoryInMemory"
import { CreateCarUseCase } from "./createCarUseCase"

let createCarUseCase: CreateCarUseCase
let carsRepository: CarsRepositoryInMemory

describe("Create Car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepository)
    })

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "cars name",
            description: "cars description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "brand",
            category_id: "category"
        })
        expect(car).toHaveProperty("id")
    })

    it("should not be able to create a car with existing license plate", async () => {
        expect(async ()=>{
        await createCarUseCase.execute({
            name: "car1",
            description: "cars description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "brand",
            category_id: "category"
        })
        await createCarUseCase.execute({
            name: "car2",
            description: "cars description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "brand",
            category_id: "category"
    })  
}).rejects.toBeInstanceOf(AppError)
})
    it("should be able to create a car with available = true by default", async()=>{
        const car = await createCarUseCase.execute({
            name: "cars name",
            description: "cars description",
            daily_rate: 100,
            license_plate: "ABCD-1234",
            fine_amount: 60,
            brand: "brand",
            category_id: "category"
    })
    expect(car.available).toBe(true)
})
})