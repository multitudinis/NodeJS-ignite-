import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/respositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/respositories/ISpecficationsRepository";
import { CategoriesRepository } from "../../modules/cars/respositories/implementations/categories.repository";
import { SpecificationsRepository } from "../../modules/cars/respositories/implementations/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)