import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "nestjs-config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import * as path from "path";

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, "config", "**/!(*.d).{ts,js}"))
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
