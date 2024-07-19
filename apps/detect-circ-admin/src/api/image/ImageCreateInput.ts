import { InputJsonValue } from "../../types";
import { DetectionCreateNestedManyWithoutImagesInput } from "./DetectionCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  url?: string | null;
  detectionResult?: InputJsonValue;
  uploadedAt?: Date | null;
  detections?: DetectionCreateNestedManyWithoutImagesInput;
};
