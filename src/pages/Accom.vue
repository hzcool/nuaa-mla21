<script setup>
const tableData = [
  {
    name: '景枫万豪酒店',
    price: '750',
    phone: '(025)86106888',
    distance: '会场所在地'
  },
  {
    name: '维也纳酒店(南京南站百家湖金鹰店)',
    price: '239',
    phone: '(025)87179798',
    distance: '100米'
  },
  {
    name: '丽湖雅致酒店',
    price: '500',
    phone: '(025)52108111-6199',
    distance: '300米'
  },
  {
    name: '水晶蓝湾公寓酒店',
    price: '300',
    phone: '(025)86157788',
    distance: '350米'
  },
  {
    name: '蓝湾假日酒店(南京百家湖店)',
    price: '370',
    phone: '(025)86105771',
    distance: '350米'
  },
  {
    name: '南京金鹰尚美酒店',
    price: '780',
    phone: '(025)85678888',
    distance: '650米'
  },
  {
    name: '城市便捷酒店(胜太路地铁店)',
    price: '200',
    phone: '(025)52100606',
    distance: '800米'
  },
  {
    name: '南京湖滨金陵饭店',
    price: '590',
    phone: '(025)52107666',
    distance: '1公里'
  },
  {
    name: '南京南站百家湖亚朵酒店',
    price: '400',
    phone: '(025)52200888',
    distance: '1.5公里'
  },
  // {
  //   name: '清沐精选酒店（南京南航东门通淮街店）',
  //   price: '180',
  //   phone: '025-87738299',
  //   distance: '0.8公里'
  // },
  // {
  //   name: '南京南站胜太西路亚朵酒店',
  //   price: '400',
  //   phone: '025-84158499',
  //   distance: '1公里'
  // },
  // {
  //   name: '白玉兰酒店（胜太西路店）',
  //   price: '280',
  //   phone: '025-52765388',
  //   distance: '1公里'
  // },
  // {
  //   name: '汉庭优佳酒店（南京南航大学店）',
  //   price: '350',
  //   phone: '025-87173399',
  //   distance: '1公里'
  // },
  // {
  //   name: '如家酒店（翠屏山地铁站店）',
  //   price: '250',
  //   phone: '025-52255888',
  //   distance: '1.2公里'
  // },
  // {
  //   name: '南京爱丁堡饭店',
  //   price: '300',
  //   phone: '025-68926666',
  //   distance: '1.5公里'
  // },
  // {
  //   name: '全季酒店（南京百家湖店）',
  //   price: '330',
  //   phone: '025-86180555',
  //   distance: '2公里'
  // },
  // {
  //   name: '宜必思酒店（南京将军大道南航店）',
  //   price: '270',
  //   phone: '025-86176800',
  //   distance: '2.5公里'
  // },
  // {
  //   name: '水秀苑',
  //   price: '600',
  //   phone: '025-52105588',
  //   distance: '3公里'
  // },
  // {
  //   name: '南京湖滨金陵饭店',
  //   price: '600',
  //   phone: '025-52107666',
  //   distance: '3公里'
  // },
  // {
  //   name: '世纪缘国际会议中心（南京百家湖店）',
  //   price: '480',
  //   phone: '025-84689986',
  //   distance: '3.5公里'
  // },
  //
  //
  //
  // {
  //   name: '锦朵酒店（南京翠屏山地铁站店）',
  //   price: '280',
  //   phone: '025-86166288',
  //   distance: '4公里'
  // },
]
</script>

<template>

    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 2rem"> 食宿安排 </div>
          <p style="margin-bottom: 2rem"> 以下列出的是会场附近的酒店信息，需要者请自行联系。以下信息不保证准确: </p>

          <el-table
              :data="tableData"
              style="font-size: 1rem"
          >
            <el-table-column
                prop="name"
                label="名称"
                min-width="40%"
                align="center"
                header-align="center"
            >
            </el-table-column>
            <el-table-column
                prop="price"
                label="标间大致价位"
                min-width="20%"
                align="center"
                header-align="center"
            >
            </el-table-column>
            <el-table-column
                prop="phone"
                label="订房电话"
                min-width="20%"
                align="center"
                header-align="center"
            >
            </el-table-column>
            <el-table-column
                prop="distance"
                label="距会场距离"
                min-width="20%"
                align="center"
                header-align="center"
            >
            </el-table-column>
          </el-table>
        </el-col>
    </el-row>


</template>



<style scoped>

</style>