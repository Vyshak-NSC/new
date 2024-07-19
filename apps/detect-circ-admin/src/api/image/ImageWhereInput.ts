import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DetectionListRelationFilter } from "../detection/DetectionListRelationFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  detectionResult?: JsonFilter;
  uploadedAt?: DateTimeNullableFilter;
  detections?: DetectionListRelationFilter;
};
