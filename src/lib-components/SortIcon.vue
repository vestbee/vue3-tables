<template>
  <span
    :class="
      classNames([
        defaultStyles['sort-icon'],
        props.isActive && defaultStyles['sort-icon-sortable'],
        props.rotate && 'rotate-180',
      ])
    "
  >
    <SortIcon width="20" height="20" />
  </span>
</template>

<script setup lang="ts">
import classNames from "classnames";
import tailwindStyles from "./tailwindStyles";
import SortIcon from "./SortIcon.svg";

const defaultStyles = tailwindStyles();

const props = defineProps({
  isActive: { type: Boolean },
  rotate: { type: Boolean },
});
</script>
