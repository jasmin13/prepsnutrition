import { initUser } from "./user";
import { initContact } from "./contact";

export function initApi(app) {
  initUser(app);
  initContact(app);
}
