import { CarsRepositoryInMemory } from "../../infra/typeorm/respositories/inMemory/carsRepositoryInMemory";
import { listAvailableCarsUseCase } from "./listAvailableCarsUseCase";

let ListCars: listAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("should list cars", () => {
    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        ListCars = new listAvailableCarsUseCase(carsRepositoryInMemory)
    })
    it("should be able to list all available cars", async ()=> {
        const car = await carsRepositoryInMemory.create({
            "name": "gtx",
            "description": "4 rodas",
            "daily_rate": 999,
            "license_plate": "qq1-321",
            "fine_amount": 2000,
            "brand": "honda",
            "category_id": "aeb67dd2-9af4-40c1-a395-0698c4b9f2b3"
        })
        const cars = await ListCars.execute({})
        console.log(cars)
        expect(cars).toEqual([car])
    })
    it("should be able to list all availables cars by brand", async()=>{
        const car = await carsRepositoryInMemory.create({
            "name": "gtx2",
            "description": "4 rodas",
            "daily_rate": 999,
            "license_plate": "qq1-321",
            "fine_amount": 2000,
            "brand": "honda2",
            "category_id": "5be71d1c-6e75-4b04-aecd-1272960f5bf0"
        })
        const cars = await ListCars.execute({brand: "honda2"})
        expect(cars).toEqual([car])
    })
    it("should be able to list all availables cars by name", async()=>{
        const car = await carsRepositoryInMemory.create({
            "name": "gtx3",
            "description": "4 rodas",
            "daily_rate": 999,
            "license_plate": "qq1-322",
            "fine_amount": 2000,
            "brand": "honda3",
            "category_id": "5be71d1c-6e75-4b04-aecd-1272960f5bf0"
        })
        const cars = await ListCars.execute({name: "gtx3"})
        expect(cars).toEqual([car])
    })
    it("should be able to list all availables cars by category", async()=>{
        const car = await carsRepositoryInMemory.create({
            "name": "gtx4",
            "description": "4 rodas",
            "daily_rate": 999,
            "license_plate": "qq1-121",
            "fine_amount": 2000,
            "brand": "honda4",
            "category_id": "123"
        })
        const cars = await ListCars.execute({category_id: "123"})
        expect(cars).toEqual([car])
    })
})