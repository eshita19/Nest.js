import { Module, Controller, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class MyController{
    @Get()
    geAppName(){
        return "eshita mathur";
    }
}

@Module({controllers: [MyController]})
class AppModule{

}

async function bootstrap(){
    const app = await NestFactory.create(AppModule);
    await app.listen(4000);   
}

bootstrap();