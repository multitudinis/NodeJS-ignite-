import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/respositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/respositories/implementations/categories.repository";
import { SpecificationsRepository } from "../../modules/cars/respositories/implementations/SpecificationRepository";
import { ISpecificationsRepository } from "../../modules/cars/respositories/ISpecficationsRepository";

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