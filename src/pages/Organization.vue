<script setup>
const data = [
  {
    head: '主办单位',
    items: ['南京航空航天大学计算机科学与技术学院/人工智能学院', '模式分析与机器智能工业和信息化部重点实验室']
  },
  {
    head: '协办单位',
    items: ['江苏省软件新技术与产业化协同创新中心']
  },
]

const data2 = [
  {
    head: 'MLA指导委员会（按姓氏拼音排序）',
    roles: [{
      name: '杨　强', school: '香港科技大学'
    }, {
      name: '张长水', school: '清华大学'
    }, {
      name: '周志华', school: '南京大学，主席'
    }]
  },
  {
    head: '程序委员会主席',
    roles: [{
      name: '黄圣君', school: '南京航空航天大学'
    }, {
      name: '张利军', school: '南京大学'
    }]
  },
  {
    head: '组织委员会',
    roles: [{
      name: '叶海波', school: '南京航空航天大学'
    }, {
      name: '李绍园', school: '南京航空航天大学'
    }, {
      name: '李　野', school: '南京航空航天大学'
    }, {
      name: '梁　栋', school: '南京航空航天大学'
    }, {
      name: '耿传兴', school: '南京航空航天大学'
    }]
  },
]
</script>

<template>


    <el-row  type="flex" justify="center" style="margin-top: 2rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">

          <div v-for="item in data" class="flex_column">
            <div style="font-size: 1.3rem;font-weight: bold;margin-top: 3rem;color: #0053a1"> {{item.head}} </div>
            <div style="margin-top: 0.5rem;line-height: 2.6rem" class="flex_column">
              <div v-for="content in item.items" style="font-size: 1rem"> {{content}} </div>
            </div>
          </div>

          <div v-for="item in data2">
            <div style="font-size: 1.3rem;font-weight: bold;margin-top: 3rem;color: #0053a1;" class="flex_center"> {{item.head}} </div>
            <el-row type="flex"  justify="space-between" align="middle"  v-for="role in item.roles" style="margin-top: 0.5rem">
              <el-col :span="11"> <div style="float: right;line-height: 2.6rem;margin-right: 1rem"> {{role.name}} </div> </el-col>
              <el-col :span="13"> <div style="float: left;line-height: 2.6rem;margin-left: 1rem"> {{role.school}} </div> </el-col>
            </el-row>
          </div>
          <div style="margin-top: 5rem; font-size: 0.8rem"  class="flex_column">
            <div> 通信地址： 南京航空航天大学将军路校区，211106 </div>
            <div> 联系邮箱： mla2021@lamda.nju.edu.cn </div>
          </div>
        </el-col>
    </el-row>


</template>



<style scoped>
</style>
