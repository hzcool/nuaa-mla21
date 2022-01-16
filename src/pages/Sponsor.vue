
<script setup>
import SponsorAbout from "../components/SponsorAbout.vue";
const tableData = [
  {
    type: '钻石赞助商',
    services: [
      '开设业界交流环节，邀请作12分钟的会议报告（名额有限，先到先得）；',
      '在会议休息时段播放贵公司宣传视频（3分钟）；',
      '提供宣传展台及电源，供赞助商布置宣传、面对面交流互动；',
      '为贵公司在会场内放置宣传易拉宝；',
      '嵌入贵公司LOGO到会议程序册、会议网站及会议直播平台提供宣传。'
    ],
    money: '10万人民币'
  },
  {
    type: '白金赞助商',
    services: [
      '开设业界交流环节，邀请作10分钟的会议报告（名额有限，先到先得）；',
      '提供宣传展台及电源，供赞助商布置宣传、面对面交流互动；',
      '为贵公司在会场附近放置宣传易拉宝；',
      '嵌入贵公司LOGO到会议程序册、会议网站及会议直播平台提供宣传。',
    ],
    money: '5万人民币'
  },
  {
    type: '黄金赞助商',
    services: [
      '提供宣传展台及电源，供赞助商布置宣传、面对面交流互动；',
      '为贵公司在会场附近放置宣传易拉宝；',
      '嵌入贵公司LOGO到会议程序册、会议网站及会议直播平台提供宣传。',
    ],
    money: '3万人民币'
  },
  {
    type: '白银赞助商',
    services: [
      '为贵公司在会场附近放置宣传易拉宝；',
      '嵌入贵公司LOGO到会议程序册、会议网站及会议直播平台提供宣传。',
    ],
    money: '1万人民币'
  },
]


</script>
<template>

    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 1.5rem"> 赞助支持 </div>

          <p style="text-indent:2em;line-height: 2.6rem">中国机器学习及其应用研讨会（MLA）得到国内机器学习及其相关领域学者、学生的广泛关注，近年来参会人数超过2000人。</p>

          <p style="text-indent:2em;line-height: 2.6rem">会议赞助具体分档如下。欢迎企业机构赞助支持！</p>

          <el-table
              :data="tableData"
              style="font-size: 1rem"
          >
            <el-table-column
                min-width="30%"
                align="center"
                header-align="center"
                label="级别"
                prop="type"
            >
            </el-table-column>

            <el-table-column
                header-align="center"
                label="会议组委会将提供如下服务"
                min-width="80%"
            >
              <template #default="scope">
                <div class="flex_center">
                  <div>
                    <p v-for="(item,index) in scope.row.services" :key="index"> {{index+1}}. {{item}}</p>
                  </div>
                </div>

              </template>
            </el-table-column>
          </el-table>

          <p style="margin-top: 3rem">
            联系邮箱：	mla2021@lamda.nju.edu.cn
          </p>
          <p>
            联系人：	黄圣君 &ensp; 张利军
          </p>


          <div>
            <p style="line-height: 2.6rem">本次会议赞助机构：</p>
            <sponsor-about style="min-width: 100%"/>
          </div>
        </el-col>
    </el-row>

</template>


<style scoped>

</style>