import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase{
    constructor(
        @inject("IUsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({name, password, email, driver_license}:
        ICreateUserDTO):Promise<void>{
        await this.usersRepository.create({
            name, password, email, driver_license
        })
    }
}

export {CreateUserUseCase}