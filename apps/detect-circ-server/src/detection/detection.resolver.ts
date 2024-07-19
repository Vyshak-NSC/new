import * as graphql from "@nestjs/graphql";
import { DetectionResolverBase } from "./base/detection.resolver.base";
import { Detection } from "./base/Detection";
import { DetectionService } from "./detection.service";

@graphql.Resolver(() => Detection)
export class DetectionResolver extends DetectionResolverBase {
  constructor(protected readonly service: DetectionService) {
    super(service);
  }
}
