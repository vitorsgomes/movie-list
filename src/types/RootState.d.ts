import { DetailState } from "../store/details/types";
import { ListState } from "../store/list/types";

interface RootState {
  list: ListState;
  details: DetailState;
}
