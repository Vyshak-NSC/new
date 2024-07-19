import { SortOrder } from "../../util/SortOrder";

export type DetectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  details?: SortOrder;
  circleCount?: SortOrder;
  imageId?: SortOrder;
};
