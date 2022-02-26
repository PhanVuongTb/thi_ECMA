import Navigo from "navigo";
import Home from "./home";
import List from "./index";
import Add from "./add";
import Edit from "./edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
  document.querySelector("#app").innerHTML = await component.render(id);
  if (component.afterRender) await component.afterRender(id);
};

router.on({
  "/": () => print(Home),
  "/product": () => print(List),
  "/product/add": () => print(Add),
  "/product/:id/edit": ({ data }) => print(Edit, data.id),
});
router.resolve();
