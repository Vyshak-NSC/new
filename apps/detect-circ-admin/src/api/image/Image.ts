import { JsonValue } from "type-fest";
import { Detection } from "../detection/Detection";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  detectionResult: JsonValue;
  uploadedAt: Date | null;
  detections?: Array<Detection>;
};
