<script lang="tsx">
import { computed, defineComponent, PropType } from "vue-demi";
import { getRandomString, PKG_PREFIX } from "./utils";
import { isFunction } from "lodash";
import SortIcon from "./SortIcon.vue";

export default defineComponent({
  props: {
    header: { type: String },
    sortable: { type: Boolean },
    child: { type: Object },
    sortedHeader: {
      type: Object as PropType<{
        id: string;
        name: string;
        order: boolean | "asc" | "desc";
      }>,
    },
  },
  emits: ["sort"],
  setup(props, { emit }) {
    const getColID = () => {
      return PKG_PREFIX + "col-" + getRandomString();
    };

    const colId = getColID();

    const header = computed(() => {
      return props.sortedHeader;
    });

    const isHeaderSorted = computed(() => header.value?.id === colId);

    const renderSortIcon = (sortIconSlot) => {
      if (sortIconSlot) {
        if (isFunction(sortIconSlot)) {
          return sortIconSlot();
        } else {
          return sortIconSlot;
        }
      }
    };

    const onClickHeader = (e): void => {
      e.preventDefault();
      emit("sort", { id: colId, name: props.child.props.name });
    };

    return () => (
      <th scope="col" id={colId}>
        {props.child.props.sortable !== undefined ? (
          <a href="#" class="group" onClick={onClickHeader}>
            {isFunction(props.child.children?.header)
              ? props.child.children?.header()
              : props.child.props?.header}
            {props.child.children?.sortIcon ? (
              renderSortIcon(props.child.children?.sortIcon)
            ) : (
              <SortIcon
                isActive={isHeaderSorted.value}
                rotate={header.value?.order === "desc"}
              />
            )}
          </a>
        ) : (
          <span>
            {isFunction(props.child.children?.header)
              ? props.child.children?.header()
              : props.child.props?.header}
          </span>
        )}
      </th>
    );
  },
});
</script>
