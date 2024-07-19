import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectionServiceBase } from "./base/detection.service.base";

@Injectable()
export class DetectionService extends DetectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
