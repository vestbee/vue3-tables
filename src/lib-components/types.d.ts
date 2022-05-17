import { RendererElement, RendererNode, VNode } from "vue-demi";

export interface TTableChildren
  extends VNode<RendererNode, RendererElement, Record<any, any>> {
  children: {
    header?: {};
    sortIcon?: () => void | string;
    default?: (arg: any) => void;
  };
}
