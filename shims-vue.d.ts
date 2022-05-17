declare module "*.vue" {
  import { DefineComponent } from "vue-demi";

  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}
