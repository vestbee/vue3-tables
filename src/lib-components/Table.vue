<script lang="tsx">
import { computed, defineComponent, PropType, reactive } from "vue-demi";
import { TTableChildren } from "./types";
import Col from "./Col.vue";
import _ from "lodash";

export default defineComponent({
  props: {
    data: {
      type: Array,
      default: [] as PropType<Record<"id" | string, any>[]>,
    },
  },
  setup(props, { slots }) {
    const internalData = computed(() => {
      const data = [...props.data];
      return _.orderBy(data, [sortedHeader.name], [sortedHeader.order]);
    });

    function getChildren(): TTableChildren[] {
      const children = slots.default?.() || [];
      return children as TTableChildren[];
    }
    const children = getChildren();

    type THeader = {
      id: string;
      name: string;
      order: boolean | "asc" | "desc";
    };

    const initialSortedHeader: THeader = {
      id: "",
      name: "",
      order: false,
    };

    let sortedHeader = reactive<THeader>({ ...initialSortedHeader });

    function onSortToggle({ id, name }: { id: string; name: string }): void {
      if (!sortedHeader.id) {
        sortedHeader.id = id;
        sortedHeader.name = name;
        sortedHeader.order = "asc";
      } else {
        if (sortedHeader.order === "asc") {
          sortedHeader.order = "desc";
        } else if (sortedHeader.order === "desc") {
          sortedHeader.id = "";
          sortedHeader.name = "";
          sortedHeader.order = false;
        }
      }
    }

    return () => (
      <table>
        <thead>
          <tr>
            {children.map((child: TTableChildren) => {
              return (
                <Col
                  child={child}
                  sortedHeader={sortedHeader}
                  sortable={child.props && child.props.sortable}
                  onSort={onSortToggle}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {internalData.value.map((item: any) => (
            <tr>
              {children.map((child: TTableChildren) => {
                if (child.children && child.children.default) {
                  return <td>{child.children.default({ item })}</td>;
                } else {
                  return <td></td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
});
</script>
