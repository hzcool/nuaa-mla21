<script setup>
const data = [{
  arr : ['MLA\'20'],
  info : '2020年11月，南京大学',
  href: ["http://www.lamda.nju.edu.cn/conf/mla20/"],
  disable: [false],

},{
  arr : ['MLA\'19'],
  info : '2019年11月，天津大学',
  href: ["http://datasci.tju.edu.cn/mla2019/"],
  disable: [false],
},{
  arr : ['MLA\'18'],
  info : '2018年11月，南京大学',
  href: ["http://www.lamda.nju.edu.cn/conf/mla18/"],
  disable: [false],
},{
  arr : ['MLA\'17'],
  info : '2017年11月，北京交通大学',
  href: ["https://www.bjtu.edu.cn/apachehtml/custom404.html"],
  disable: [false],
},{
  arr : ['MLA\'16'],
  info : '2016年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/mla16/"],
  disable: [false],
},{
  arr : ['MLA\'15'],
  info : '2015年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/mla15/"],
  disable: [false],
},{
  arr : ['MLA\'14'],
  info : '2014年11月，西安电子科技大学',
  href: ["https://see.xidian.edu.cn/vipsl/MLA2014/"],
  disable: [false],
},{
  arr : ['MLA\'13'],
  info : '2013年11月，复旦大学',
  href: ["http://www.iipl.fudan.edu.cn/MLA13/"],
  disable: [false],
},{
  arr : ['MLA\'12'],
  info : '2012年11月，清华大学',
  href: ["http://bigeye.au.tsinghua.edu.cn/MLA12/"],
  disable: [false],
},{
  arr : ['MLA\'11'],
  info : '2011年11月，清华大学',
  href: ["http://bigeye.au.tsinghua.edu.cn/MLA11/"],
  disable: [false],
},{
  arr : ['MLA\'10', 'SSMLA\'10'],
  info : '2010年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA10", "http://lamda.nju.edu.cn/conf/ssmla10/"],
  disable: [false, false],
},{
  arr : ['MLA\'09', 'SSMLA\'09'],
  info : '2009年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA09", "http://lamda.nju.edu.cn/conf/ssmla09"],
  disable: [false, false],
},{
  arr : ['MLA\'08', 'SSMLA\'08'],
  info : '2008年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA08", "http://lamda.nju.edu.cn/conf/ssmla08"],
  disable: [false, false],
},{
  arr : ['MLA\'07', 'SSMLA\'07'],
  info : '2007年11月，南京大学、南京师范大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA07", "http://lamda.nju.edu.cn/conf/ssmla07"],
  disable: [false, false],
},{
  arr : ['MLA\'06', 'SSMLA\'06'],
  info : '2006年11月，南京大学、南京航空航天大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA06", "http://lamda.nju.edu.cn/conf/ssmla06"],
  disable: [false, false],
},{
  arr : ['MLA\'05'],
  info : '2005年11月，南京大学',
  href: ["http://lamda.nju.edu.cn/conf/MLA05/"],
  disable: [false],
},{
  arr : ['MLA\'04'],
  info : '2004年11月，复旦大学',
  href: [""],
  disable: [true],
},{
  arr : ['MLA\'02'],
  info : '2002年12月，复旦大学',
  href: [""],
  disable: [true],
}]

</script>

<template>

    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 1.5rem"> 以往会议 </div>
          <p style="text-indent:2em;line-height: 2.6rem">
            为了促进智能信息处理领域同行间的交流，陆汝钤院士发起组织了“智能信息处理系列研讨会”。“机器学习及其应用”研讨会自2002年开始，先后在上海、南京、北京、西安、天津等地举行。该研讨会每年邀请海内外从事机器学习及相关领域研究的专家与会进行学术交流。研讨会不征文，不收取注册费，欢迎机器学习及相关领域的学者、同行、研究生前来旁听特邀报告并参加讨论。
          </p>
          <p style="margin-top: 1.5rem;text-indent:2em;line-height: 2.6rem">
            为了促进机器学习及相关领域的研究生之间以及研究生与资深学者之间的交流，2006-2010年在机器学习及其应用研讨会（MLA）期间，同时举行了机器学习及其应用学生研讨会（SSMLA），此后该研讨会融入MLA的Poster session.
          </p>

          <div style="font-weight: bold;margin-top: 3rem">以下是各年会议的信息：</div>
          <div class="flex_center">
            <div style="margin-top: 1.5rem;width: 100%">
              <el-row v-for="item in data">
                <el-col :span="5" :offset="2">
                  <a v-if="item.disable[0]" disabled> {{item.arr[0]}} </a>
                  <a v-else :href="item.href[0]" target="view_window"> {{item.arr[0]}} </a>
                </el-col>
                <el-col :span="5" :offset="1">
                  <div  v-if="item.arr.length>1">
                    <a v-if="item.disable[1]" disabled> {{item.arr[1]}} </a>
                    <a v-else :href="item.href[1]" target="view_window"> {{item.arr[1]}} </a>
                  </div>
                </el-col>
                <el-col :span="10" :offset="1"> {{item.info}} </el-col>
                <el-divider></el-divider>
              </el-row>
            </div>
          </div>
        </el-col>
    </el-row>
</template>



<style scoped>
.disable {
  text-decoration: line-through;
}
</style>