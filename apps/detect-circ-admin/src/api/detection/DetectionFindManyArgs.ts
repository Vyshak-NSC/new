import { DetectionWhereInput } from "./DetectionWhereInput";
import { DetectionOrderByInput } from "./DetectionOrderByInput";

export type DetectionFindManyArgs = {
  where?: DetectionWhereInput;
  orderBy?: Array<DetectionOrderByInput>;
  skip?: number;
  take?: number;
};
