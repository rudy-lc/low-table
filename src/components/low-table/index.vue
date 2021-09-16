<template>
  <div v-loading="loading" class="app-container">
    <!--查询条件-->
    <Search v-bind="$attrs" v-on="$listeners" />
    <!--表格渲染-->
    <Table v-bind="$attrs" />
    <!--分页组件-->
    <el-pagination
      :total="total"
      :size="size"
      class="pagination"
      layout="total, prev, pager, next, sizes"
      @size-change="sizeChange"
      @current-change="pageChange"
    />
  </div>
</template>

<script>
import Table from "./Table";
import Search from "./Search";
export default {
  name: "LowTable",
  components: { Table, Search },
  props: {
    total: {
      required: true,
      type: Number,
    },
    loading: {
      required: true,
      type: Boolean,
    },
    size: {
      required: true,
      type: String,
      default: "small",
    },
  },
  methods: {
    sizeChange(val) {
      this.$emit("sizeChange", val);
    },
    pageChange(val) {
      this.$emit("pageChange", val);
    },
  },
};
</script>
