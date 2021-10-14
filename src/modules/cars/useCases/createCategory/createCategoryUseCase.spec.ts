import { createCategoryUseCase } from "./createCategoryUseCase"
import { createCategoryRepositoryInMemory} from "../../infra/typeorm/respositories/inMemory/categoriesRepositoryInMemory"
import { AppError } from "../../../../shared/errors/appError"


let CreateCategoryUseCase: createCategoryUseCase
let CreateCategoryRepositoryInMemory: createCategoryRepositoryInMemory

describe("Create category", ()=> {
    beforeEach(() => {
        CreateCategoryRepositoryInMemory = new createCategoryRepositoryInMemory()
        CreateCategoryUseCase = new createCategoryUseCase(
            CreateCategoryRepositoryInMemory
        )
    })
    
    it("should be able to create a new category", async () => {
        const category = {
            name:"category test",
            description: "category description test"
        }
        await CreateCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })
        const categoryCreated = await CreateCategoryRepositoryInMemory.findByName(category.name)
        
        console.log(categoryCreated)
        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create a new category with existing name", async () => {
        expect(async () => {
        const category = {
            name:"category test",
            description: "category description test"
        }
        await CreateCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })
        await CreateCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })
        }).rejects.toBeInstanceOf(AppError)
    })
})