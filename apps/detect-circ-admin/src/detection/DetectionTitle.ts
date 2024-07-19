import { Detection as TDetection } from "../api/detection/Detection";

export const DETECTION_TITLE_FIELD = "id";

export const DetectionTitle = (record: TDetection): string => {
  return record.id?.toString() || String(record.id);
};
