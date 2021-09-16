<template>
  <div id="app">
    <lowTable
      :data-scope="dataScope"
      :loading="loading"
      :search="search"
      :column="column"
      :total="total"
      size="small"
      @sizeChange="sizeChange"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import LowTable from "./components/low-table";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      dataScope: [
        {
          happenTime: "2021-08-15 11:18:33",
          extEventCardNo: "30454112302255",
          username: "仇平",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-08-17 06:06:50",
          extEventCardNo: "4968926827944",
          username: "陈旭",
          userType: "1",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-08-31 22:41:25",
          extEventCardNo: "4347379759195",
          username: "朱彬",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-08-24 06:43:16",
          extEventCardNo: "374242504661360",
          username: "马艳",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-09-16 06:41:05",
          extEventCardNo: "3576757188161718",
          username: "贾云",
          userType: "1",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-08-01 20:24:43",
          extEventCardNo: "3570737424468248",
          username: "李浩",
          userType: "1",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-08-04 14:40:17",
          extEventCardNo: "6011445009223612",
          username: "郭军",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-09-17 22:26:24",
          extEventCardNo: "349737174019940",
          username: "吴波",
          userType: "1",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-09-03 01:31:34",
          extEventCardNo: "4562601533077831830",
          username: "朱晶",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
        {
          happenTime: "2021-09-20 21:43:34",
          extEventCardNo: "4129563175543099321",
          username: "杨林",
          userType: "2",
          installLocation: "电梯口闸机",
          srcName: "闸机1",
        },
      ],
      search: {
        form: {
          type: {
            lable: "告警类型",
            type: "select",
            defaultValue: 4,
            change: (form) => {
              console.log(form);
            },
            data: [
              {
                label: "人员过低",
                value: 1,
              },
              {
                label: "人员过高",
                value: 2,
              },
              {
                label: "访客人数过高",
                value: 3,
              },
              {
                label: "频繁进出",
                value: 4,
              },
            ],
          },
          userType: {
            lable: "全部类别",
            type: "select",
            clearable: true,
            data: [
              {
                label: "员工",
                value: 1,
              },
              {
                label: "访客",
                value: 2,
              },
            ],
          },
          daterange: {
            lable: "选择日期",
            type: "daterange",
          },
          extEventCardNo: {
            lable: "通行ID",
            type: "input",
            clearable: true,
          },
        },
        operate: [
          {
            type: "primary",
            text: "查询",
            action: (form) => {
              console.log(form);
            },
          },
          {
            type: "success",
            text: "导出",
            action: (form) => {
              console.log(form);
            },
          },
        ],
      },
      column: [
        {
          title: "日期",
          dataIndex: "happenTime",
          key: "happenTime",
        },
        {
          title: "告警类型",
          dataIndex: "userType",
          key: "userType",
          slots: {
            default: (h, data) => {
              return <el-button type="success">{data.userType}</el-button>;
            },
          },
        },
        {
          title: "通行证ID",
          dataIndex: "extEventCardNo",
          key: "extEventCardNo",
        },
        {
          title: "人员姓名",
          dataIndex: "username",
          key: "username",
        },
        {
          title: "人员类别",
          dataIndex: "userType",
          key: "userType",
          attributes: {
            formatter: (row, column, cellValue) => {
              if (cellValue === "1") {
                return "员工";
              } else {
                return "访客";
              }
            },
          },
        },
        {
          title: "位置",
          dataIndex: "userType",
          key: "userType2",
          attributes: {
            formatter: (row, column, cellValue) => {
              if (cellValue === "1") {
                return "员工";
              } else {
                return "访客";
              }
            },
          },
        },
        {
          title: "闸机",
          dataIndex: "userType",
          key: "userType1",
          attributes: {
            formatter: (row, column, cellValue) => {
              if (cellValue === "1") {
                return "员工";
              } else {
                return "访客";
              }
            },
          },
        },
        {
          title: "操作",
          key: "handle",
          handles: [
            {
              type: "text",
              text: "查看记录",
              click: (row) => {
                console.log(row);
              },
            },
          ],
        },
      ],
      total: 10,
    };
  },
  components: {
    LowTable,
  },
  methods: {
    sizeChange() {},
    pageChange() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
