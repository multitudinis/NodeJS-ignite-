import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/appError";
import { IUsersRepository } from "../../infra/typeorm/repositories/IUsersRepository";

interface IRequest{
    email: string
    password: string
}
interface IResponse{
    user: {
        name: string
        email: string
    }
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({email, password}: IRequest){
//user exists
        const user = await this.usersRepository.findByEmail(email)
        if(!user){
            throw new AppError("Email or password incorrect!")
        }
//password is correct
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new AppError("Email or password incorrect!")
        }
//generate JWT

        const token = sign({}, "bba4b91d2fe360c9c15f54e5815a66d5", {
            subject: user.id,
            expiresIn: "1d"
        })
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        /*
        return {
            return the entire users infos
            user,
            token
        }*/
        return tokenReturn
    }

}

export { AuthenticateUserUseCase }