
<script setup>
import {RightOutlined, DownOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";

const props = defineProps({
  poster: {
    default: {
      time: '',
      title: '',
      author: '',
      host: '',
      abstract : '',
      slides: '',
      resume: '',
    }
  }
})
const p = props.poster;
const open = ref(false)
const changeOpen = () => open.value = !open.value


</script>

<template>

  <el-row type="flex" style="margin-bottom: 6px">
    <el-col  :xs="5" :sm="2" style="color: rgba(0, 0, 0, 0.45); "> 题&emsp;目 </el-col>
    <el-col  :xs="19" :sm="22" class="font"> {{p.title}} <span v-if="p.slides && p.slides !== ''"> [<a target="_blank" :href="p.slides">Slides</a>] </span> </el-col>
  </el-row>

  <el-row type="flex"  style="margin-bottom: 6px">
    <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45); "> 报告人 </el-col>
    <el-col  :xs="19" :sm="22" class="font"> {{p.author}} </el-col>
  </el-row>

  <el-row  v-if="p.host" type="flex" style="margin-bottom: 6px">
    <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 主持人 </el-col>
    <el-col  :xs="19" :sm="22" class="font"> {{p.host}} </el-col>
  </el-row>

  <el-row v-if="p.abstract" type="flex" style="margin-bottom: 6px">
    <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 摘&emsp;要 </el-col>
    <el-col  :xs="17" :sm="21">
      <div :class="{abstract:!open, 'hyphenate':true}" @click="changeOpen" style="cursor: pointer;" > {{p.abstract}}</div>
    </el-col>
    <el-col :xs="2" :sm="1">
      <RightOutlined v-if="!open" style="color: #0d84ff;cursor: pointer" @click="changeOpen"/>
      <DownOutlined v-if="open" style="color: #0d84ff;cursor: pointer" @click="changeOpen"/>
    </el-col>
  </el-row>


</template>



<style scoped>
.font {
  font-weight: bold;
}
.abstract {
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
  white-space: nowrap;/*强制不换行*/
}
.hyphenate {
  word-break: break-all;
}

</style>