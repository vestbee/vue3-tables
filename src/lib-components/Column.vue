<script lang="tsx">
import { h, defineComponent } from "vue-demi";

export default defineComponent({
  props: {
    header: {},
    sortable: { type: Boolean },
    name: { type: String, required: true },
  },
  setup() {
    return () => h("");
  },
});
</script>
