import views from "./components";
import { VIEW_ONE_PATH, VIEW_TWO_PATH, VIEW_THREE_PATH } from "./paths";

export const VIEW_ONE = {
  component: views.ViewOne,
  path: VIEW_ONE_PATH,
  isPrivate: false,
};

export const VIEW_TWO = {
  component: views.ViewTwo,
  path: VIEW_TWO_PATH,
  isPrivate: false,
};

export const VIEW_THREE = {
  component: views.ViewThree,
  path: VIEW_THREE_PATH,
  isPrivate: false,
};

const routes = [VIEW_ONE, VIEW_TWO, VIEW_THREE];

export default routes;
