/*
import {v4 as uuidV4} from "uuid"
import {hash} from "bcrypt"
import createConnection from "../index"


async function create(){
    const connection = await createConnection("database")
    const id = uuidV4()
    const password = await hash("admin", 8)
    
    connection.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${id}','name', 'nameadmin@qq1.com.br', '${password}', 'true', 'now()', 'XXXXXXXXX')`
    )
}

create().then(()=> console.log("admin user has been implanted"))
*/ 
