import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest{
    user_id,
    avatar_file
}

@injectable()
class updateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ){}

    async execute({user_id, avatar_file}: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id)

        user.avatar = avatar_file

        await this.userRepository.create(user)
    }
}

export { updateUserAvatarUseCase }

/*
adicionar coluna de avatar na tabela user
refatorar usuario c a coluna de avatar
cofiguração upload multer
criar regra de negocio p upload
criar controller
*/