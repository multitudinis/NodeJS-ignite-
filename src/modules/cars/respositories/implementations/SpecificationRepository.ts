import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecficationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private Specifications: Specification []
    
    constructor(){
        this.Specifications = []
    }
    create({description, name}: ICreateSpecificationDTO): void{
        const specification = new Specification()
        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
    })
    this.Specifications.push(specification)
    //  throw new Error("Method not implemented.")
    }
    findByName(name:string): Specification{
        const specification = this.Specifications.find(
            (specification) => specification.name === name
        )
        return specification
    }
}

export {SpecificationsRepository}