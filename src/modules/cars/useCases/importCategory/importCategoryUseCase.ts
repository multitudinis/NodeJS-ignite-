import fs from "fs"
import CsvParse from "csv-parse"
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe"


interface IImportCategory {
    name: string
    description: string
}
@injectable()
class importCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: ICategoriesRepository) {}
        
    async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject)=>{
        const stream = fs.createReadStream(file.path)
        const categories: IImportCategory[] = []

        const parseFile = CsvParse()
        
        stream.pipe(parseFile)

        parseFile.on("data", async (line) => {
            const [name, description] = line
            categories.push({
                name,
                description
            })
        })
        .on("end", () => {
            fs.promises.unlink(file.path)
            resolve(categories)
        })
        .on("error", (err)=> {
            reject(err)
        }) 
        })
    }
    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file)
        categories.map(async(category)=> {
            const {name, description} = category
            const existCategory = await this.categoryRepository.findByName(name)

            if(!existCategory){
                await this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }

}

export{importCategoryUseCase}