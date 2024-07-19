import { InputJsonValue } from "../../types";
import { DetectionUpdateManyWithoutImagesInput } from "./DetectionUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  url?: string | null;
  detectionResult?: InputJsonValue;
  uploadedAt?: Date | null;
  detections?: DetectionUpdateManyWithoutImagesInput;
};
