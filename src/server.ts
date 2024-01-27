

import app from "./app";
import { Config } from "./config";
import logger from './config/logger';


const startServer = ()=>{
    const PORT = Config.PORT
    try {
        
        app.listen(PORT,()=>logger.info(`App is running on ${PORT}`))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

}

startServer()