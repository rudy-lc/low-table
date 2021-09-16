<template>
  <el-form :inline="true" :model="form" :size="size" class="form-inline">
    <el-row class="row-warp">
      <template v-for="(value, key) in search.form">
        <el-col v-if="value.type === 'input'" :key="key" :span="4">
          <el-form-item :props="key" class="form-item">
            <el-input
              :placeholder="`请输入${value.lable}`"
              v-model="form[key]"
              class="input"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col v-if="value.type === 'select'" :key="key" :span="4">
          <el-form-item :props="key" class="form-item">
            <el-select
              v-if="value.change"
              :placeholder="`请选择${value.lable}`"
              v-model="form[key]"
              :clearable="value.clearable"
              class="input"
              @change="value.change(form)"
            >
              <el-option
                v-for="option in value.data"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
            <el-select
              v-else
              :placeholder="`请选择${value.lable}`"
              v-model="form[key]"
              :clearable="value.clearable"
              class="input"
            >
              <el-option
                v-for="option in value.data"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col v-if="value.type === 'datetimerange'" :key="key" :span="7">
          <el-form-item class="form-item">
            <el-date-picker
              v-model="form[key]"
              class="input"
              value-format="yyyy-MM-dd HH:mm:ss"
              clearable
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col v-if="value.type === 'daterange'" :key="key" :span="7">
          <el-form-item class="form-item">
            <el-date-picker
              v-model="form[key]"
              class="input"
              value-format="yyyy-MM-dd"
              clearable
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="4">
        <el-form-item class="form-item">
          <template v-for="item in search.operate">
            <el-popconfirm
              v-if="item.type === 'danger'"
              :key="item.text"
              style="margin-left: 10px"
              title="确定删除这条记录吗？"
            >
              <el-button
                slot="reference"
                :type="item.type"
                @click="item.action(form)"
                >{{ item.text }}</el-button
              >
            </el-popconfirm>
            <el-button
              v-else
              :key="item.text"
              :type="item.type"
              @click="item.action(form)"
              >{{ item.text }}</el-button
            >
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: "TableForm",
  props: {
    search: {
      type: Object,
      default: () => {},
    },
    size: {
      type: String,
      default: "small",
    },
  },
  data() {
    return {
      form: {},
    };
  },
  created() {
    Object.keys(this.search.form).forEach((item) => {
      if (this.search.form[item].defaultValue) {
        this.$set(this.form, item, this.search.form[item].defaultValue);
      }
    });
    console.log(this.form);
  },
  methods: {
    query() {
      this.$emit("formQuery", this.form);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-inline {
  margin: 10px 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  .row-warp {
    width: 100%;
  }
  .form-item {
    margin-bottom: 0;

    .input {
      width: 100%;
    }
  }
}
</style>
