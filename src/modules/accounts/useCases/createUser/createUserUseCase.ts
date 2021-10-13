import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/appError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, password, email, driver_license }:
        ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)
        if (userAlreadyExists) {
            throw new AppError("User already exists")
        }
        const PasswordHash = await hash(password, 8)

        await this.usersRepository.create({
            name, password: PasswordHash, email, driver_license
        })
    }
}

export { CreateUserUseCase }