import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/implementations/UsersRepository"
import { IUsersRepository } from "../../modules/accounts/infra/typeorm/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/infra/typeorm/respositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/respositories/implementations/categories.repository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/respositories/implementations/SpecificationRepository";
import { ISpecificationsRepository } from "../../modules/cars/infra/typeorm/respositories/ISpecficationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)