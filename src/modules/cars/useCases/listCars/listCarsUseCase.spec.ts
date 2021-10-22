import { CarsRepositoryInMemory } from "../../infra/typeorm/respositories/inMemory/carsRepositoryInMemory";
import { listCarsUseCase } from "./listCarsUseCase";

let ListCars: listCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("should list cars", () => {
    beforeEach(()=>{
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        ListCars = new listCarsUseCase(carsRepositoryInMemory)
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
        expect(cars).toEqual([car])
    })
    it("should be able to list all availables cars by name", async()=>{
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
        console.log(car)
        expect(cars).toEqual([car])
    })
})