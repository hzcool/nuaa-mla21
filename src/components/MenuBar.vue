
<script setup>

import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const selected = ref(0);
const handleSelect = (key, idx) => {
  if(key==="past") {
    window.location.href = "http://www.lamda.nju.edu.cn/conf/mla/"
  }else {
    router.push({name: key})
    selected.value = idx
  }
}
const menuArr = [
  {
    label:'首 页',
    name: 'home',
    span:2,
  },
  {
    label:'组织机构',
    name:'organization',
    span:2,
  },
  {
    label:'特邀专家',
    name:'experts',
    span:2,
  },
  {
    label: '会议日程',
    name: 'program',
    span:2,
  },

  {
    label: '食宿安排',
    name: 'accom',
    span:2,
  },
  {
    label: '赞助支持',
    name: 'sponsor',
    span:2,
  },
  {
    label: '会议地点',
    name: 'map',
    span:2,
  },
  {
    label: '会议文集',
    name: 'book',
    span:2,
  },
  {
    label: '以往会议',
    name: 'past',
    span: 2
  },
  {
    label: '顶会论文交流',
    name: 'poster',
    span:3,
  },
]

</script>



<template>
  <div class="hidden-sm-and-down">
    <el-row type="flex" justify="center" style="background-color: #4169E1; opacity: 0.8;width: 100vw">
      <el-col :md="24" :lg="24" :xl="19">
        <el-row type="flex" justify="center" align="middle" >
          <el-col v-for="(item,idx) in menuArr" :key="idx" :span="item.span" style="height: 3.5rem;cursor: pointer;font-weight: bold;font-size: 1.1rem" class="flex_center menu-item" @click="handleSelect(item.name,idx)" :class="selected==idx?'menu-item_seletced':''">
            <div> {{item.label}} </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

  <div class="hidden-md-and-up" style="background-color: #4169E1; opacity: 0.8;">
    <div style="border-bottom: #cccccc solid">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="20" class="flex_center" style="font-size: 1.8rem;font-weight: bold;color: #FFFFFF">
          MLA 2021 --- 南京
        </el-col>
        <el-col :span="4">
          <div  style="font-weight: bold;text-align: center;width: 70px;float: right" >
            <el-dropdown>
              <el-button type="text" size="mini">
                <svg t="1629910146123" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2084" width="32" height="32"><path d="M972.8 768v102.4H51.2v-102.4h921.6zM51.2 460.8h921.6v102.4H51.2V460.8z m921.6-307.2v102.4H51.2V153.6h921.6z" fill="#ffffff" p-id="2085"></path></svg>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="(item,idx) in menuArr" :key="idx" @click="handleSelect(item.name)">
                    {{item.label}}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>


</template>


<style scoped>

.menu-item {
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease;
}
.menu-item {
  color: white;
}
.menu-item_seletced {
  background: #DF4B05;
  color: white;
}
.menu-item:hover {
  background: #000000;
  color: yellow;
}

</style>