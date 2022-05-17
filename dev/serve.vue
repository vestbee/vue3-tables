<template>
  <div id="app">
    <div class="container mx-auto mt-10">
      <div
        class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
      >
        <Table :data="data">
          <Column header="#" sortable name="id">
            <template v-slot="{ item }"> {{ item.id }} </template>
          </Column>
          <Column sortable name="name">
            <template #header>Name</template>
            <template v-slot="{ item }">
              {{ item.name }}
            </template>
          </Column>
          <Column header="Address" name="address">
            <template v-slot="{ item }">
              {{ item.address }}
            </template>
          </Column>
        </Table>
      </div>

      <pre class="mt-10">{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Table from "../src/lib-components/Table.vue";
import Column from "../src/lib-components/Column.vue";

const data = [
  {
    id: "1",
    name: "Kate Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    id: "2",
    name: "Jane Doe",
    age: 34,
    address: "London No. 1 Lake Park",
    tags: ["engineer"],
  },
  {
    id: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
</script>

<style>
table {
  @apply min-w-full divide-y divide-gray-300;
}

thead {
  @apply bg-gray-50;
}

tr {
  @apply divide-x divide-gray-200;
}

th {
  @apply py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900;
}

th:first-child {
  @apply sm:pl-6;
}

th a {
  @apply flex;
}

tbody {
  @apply divide-y divide-gray-200 bg-white;
}

td {
  @apply whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900;
}

td:first-child {
  @apply sm:pl-6;
}
</style>
