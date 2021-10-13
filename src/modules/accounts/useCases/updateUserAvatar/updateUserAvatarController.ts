import { Request, Response } from "express";
import { container } from "tsyringe";
import { updateUserAvatarUseCase } from "./updateUserAvatarUseCase";


class updateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.user
        const avatar_file = request.file.fieldname
        const UpdateUserAvatarUseCase = container.resolve(updateUserAvatarUseCase)

        await UpdateUserAvatarUseCase.execute({user_id: id, avatar_file})
        return response.status(204).send()
    }
}

export {updateUserAvatarController}