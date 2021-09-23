import fs from "fs"
import CsvParse from "csv-parse"
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository"
import { Category } from "../../model/category"

interface IImportCategory {
    name: string
    description: string
}

class importCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
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
            const existCategory = this.categoryRepository.findByName(name)

            if(!existCategory){
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }

}

export{importCategoryUseCase}