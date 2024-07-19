import { Module } from "@nestjs/common";
import { DetectionModuleBase } from "./base/detection.module.base";
import { DetectionService } from "./detection.service";
import { DetectionController } from "./detection.controller";
import { DetectionResolver } from "./detection.resolver";

@Module({
  imports: [DetectionModuleBase],
  controllers: [DetectionController],
  providers: [DetectionService, DetectionResolver],
  exports: [DetectionService],
})
export class DetectionModule {}
