<script setup>
import intel  from '../images/intel.png'

import baiont from  '../images/baiont.jpg'
import _4paradigm from '../images/fouth.png'
import polixir  from '../images/polixir.png'
import hkws from '../images/hkws.png'
import optiver from '../images/optiver.jpg'
import {computed} from "vue";


const height = computed(() => {
  if (document.body.clientWidth < 500) return 6;
  if (document.body.clientWidth < 1200) return 5;
  return 4;
})

// 钻石赞助商
const diamond_sponsors = [
  {
    logo : intel,
    name: "英特尔",
    href: "https://www.intel.cn/content/www/cn/zh/analytics/artificial-intelligence/overview.html",
  },
]

// 白金赞助商
const platinum_sponsors = [
  {
    logo: baiont,
    name: "倍漾资本",
    href: "http://baiontcapital.com",
  },
  {
    logo: _4paradigm,
    name: '第四范式',
    href: 'http://www.4paradigm.com/',
  },
  {
    logo: polixir,
    name: "南栖仙策",
    href: "http://polixir.ai/",
  },
  {
    logo: hkws,
    name: "海康威视",
    href: "https://www.hikvision.com/cn/",
  },
  // {
  //   logo: optiver,
  //   name: 'optiver',
  //   href: "https://www.optiver.com/",
  // },


]

const gold_sponsors = []
const sliver_sponsors = []

</script>

<template>
  <div v-if="diamond_sponsors.length > 0">
    <div style="font-size: 1.2rem; font-weight: bold; color: #0053a1"> 钻石赞助商 </div>
    <el-row type="flex" align="middle" style="margin-top: 1rem">
      <el-col :xs="24" :sm="12" :lg="8" v-for="s in diamond_sponsors" style="margin-top: 2rem">
        <div class="flex_column">
            <img :src="s.logo" :style="{ width: '80%' }">
          <a target="view_window" :href="s.href" style="font-size: 22px;margin-top: 0.7rem"> {{s.name}} </a>
        </div>
      </el-col>
    </el-row>
  </div>


  <div v-if="platinum_sponsors.length > 0" style="margin-top: 3rem">
    <div style="font-size: 1.2rem; font-weight: bold; color: #0053a1"> 白金赞助商 </div>
    <el-row type="flex" align="bottom" style="margin-top: 1rem">
      <el-col :xs="24" :sm="12" :lg="8"  v-for="s in platinum_sponsors" style="margin-top: 2rem">
        <div class="flex_column">
          <img :src="s.logo" :style="{  width: '80%' }">
          <a  target="view_window" :href="s.href" style="font-size: 22px;margin-top: 0.7rem"> {{s.name}} </a>
        </div>
      </el-col>
    </el-row>


  </div>
</template>



<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.IMG {
  background: url("../images/intel.png") no-repeat center center;
  background-size: cover;

}
</style>