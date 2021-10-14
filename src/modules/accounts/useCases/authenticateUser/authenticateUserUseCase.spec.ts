import { AppError } from "../../../../shared/errors/appError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../inMemory/usersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";


let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe("authenticate user", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

it("should be able to authenticate an user", async ()=>{
    const user: ICreateUserDTO = {
        name: "user test",
        email: "user@test.com",
        driver_license: "000123",
        password: "1234"
    }
    await createUserUseCase.execute(user)
    const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: user.password
    })
  console.log(result)
  expect(result).toHaveProperty("token")  
})

it("should not be able to authenticate an nonexistent user",()=>{
    expect(async ()=>{
        await authenticateUserUseCase.execute({
            email: "false@test.com",
            password: "1234"
        })
    }).rejects.toBeInstanceOf(AppError)
})
it("should not be able to authenticate with incorrect password", ()=>{
    expect(async ()=> {
        const user: ICreateUserDTO = {
            driver_license: "9999",
            email: "user@testing.com",
            password: "1234",
            name: "lucas test"
        }
        await createUserUseCase.execute(user)
        await authenticateUserUseCase.execute({
            email: user.email,
            password: "12345",
        })     
    }).rejects.toBeInstanceOf(AppError)
})
})