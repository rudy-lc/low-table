<template>
  <!--表格渲染-->
  <el-table v-loading="loading" :data="dataScope" size="small">
    <template v-for="item in column">
      <el-table-column
        v-if="item.handles"
        :key="item.key"
        :label="item.title"
        v-bind="item.attributes"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            v-for="handle in item.handles"
            :key="handle.type"
            :type="handle.type"
            size="small"
            @click="handle.click(scope.row)"
            >{{ handle.text }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="item.slots"
        :key="item.key"
        :label="item.title"
        v-bind="item.attributes"
        align="center"
      >
        <template slot-scope="scope">
          <Render :render="item.slots.default" :data="scope.row"></Render>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="item.key"
        v-bind="item.attributes"
        :prop="item.dataIndex"
        :label="item.title"
        align="center"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
import Render from "./render";

export default {
  name: "Table",
  components: { Render },
  props: {
    dataScope: {
      required: true,
      type: Array,
    },
    column: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>
