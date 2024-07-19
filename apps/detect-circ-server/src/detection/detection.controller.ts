import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectionService } from "./detection.service";
import { DetectionControllerBase } from "./base/detection.controller.base";

@swagger.ApiTags("detections")
@common.Controller("detections")
export class DetectionController extends DetectionControllerBase {
  constructor(protected readonly service: DetectionService) {
    super(service);
  }
}
