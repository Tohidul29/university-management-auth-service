import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";



async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`successfully connected`)

        app.listen(config.port, ()=>{
            console.log(`Application listening to port ${config.port}`)
        });
    }catch(err){
        console.log(`failed to connect`, err);
    }
}

bootstrap();