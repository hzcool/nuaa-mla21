<script setup>

import SponsorAbout from "../components/SponsorAbout.vue"

</script>

<template>

  <div>
    <div id="header" class="bg-hegiht">

      <el-row type="flex" justify="center">
        <el-col :span="24"></el-col>
          <el-col :xs="23" :sm="22" :md="18" :lg="16" :xl="14" class="bg_o" style="color: #ffffff;margin-top:3rem;">
            <div class="flex_column">
              <div class="mla-title"> MLA 2021 </div>
              <div class="mla-title2"> 第十九届中国机器学习及其应用研讨会 </div>
              <div class="mla-title3"> 12月24-26，南京航空航天大学，南京 </div>
            </div>
          </el-col>
      </el-row>

    </div>
  </div>

  <div style="font-size: 1.5rem;color: red;margin-top: 3rem;font-weight: bold" class="flex_center"> 通 知 </div>

  <el-row  type="flex" justify="center" style="margin-top: 1rem;">
    <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">

<!--      <p style="text-indent:2em;line-height: 2.2rem;margin-top: 1rem"> 很抱歉由于疫情原因，MLA 2021会议推迟举行，等疫情稳定后我们将确定召开时间并及时公布，请您关注MLA网站。给您带来不便非常抱歉，谢谢您的支持！ </p>-->
      <p style="text-indent:2em;line-height: 2.2rem;margin-top: 1rem"> MLA 2021改期在12月24-26日线上线下同步举行，所有报告将进行在线直播。由于疫情防控要求，除特邀人员外，江苏省外学生原则上线上参会。线下参会人员如行程码带*号，需提供48小时内核酸检测阴性报告，敬请谅解，谢谢配合！</p>
      <p style="text-indent:2em;line-height: 1.5rem;"> 线下参会地址：南京市景枫万豪酒店二楼龙蟠厅 </p>
      <p style="text-indent:2em;line-height: 1.5rem;"> 线上直播链接：【<a target="view_window" href="https://wx.vzan.com/live/tvchat-1460617280?shauid=hUoLbHLzUgrFPmqyh0URfQ**&vprid=0&sharetstamp=1639916762042&ver=aa0cf38bdb8d42c793022836695574da">微信直播</a>】 【<a target="view_window" href="https://live.bilibili.com/23994142">哔哩哔哩</a>】 </p>
      <p style="text-indent:2em;line-height: 1.5rem;"> 会议回放链接：【<a target="view_window" href="https://wx.vzan.com/live/tvchat-1460617280?shauid=hUoLbHLzUgrFPmqyh0URfQ**&vprid=0&sharetstamp=1639916762042&ver=aa0cf38bdb8d42c793022836695574da">微信直播</a>】 </p>

<!--      <a target="view_window" :href="delay">关于MLA21延期举办的通知.pdf</a>-->
      <!--      <p style="text-indent:2em;line-height: 2.2rem;margin-top: 1rem"> 本次线下参会注册已截止，已注册人员请您注意查收确认邮件，了解参会注意事项。 </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem;margin-top: 1rem"> 为保证参会人员的健康安全和会议的顺利进行，组委会提醒您： </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem"> 1. 中高风险地区所在县(县级市、区、旗)当地人员暂不允许参会。 </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem"> 2. 南京本地人员（已在南京市停留14天以上）参会，需持有绿色健康码和行程码才能入校。 </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem"> 3. 外地人员及在南京停留未满14天的人员参会，需持有绿色健康码、行程码和48小时以内核酸检测阴性证明（11月4日及以后检测）才能入校。 </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem"> 如果后续疫情防控要求有变，我们将及时通知您。谢谢您的配合！ </p>-->
<!--      <p style="text-indent:2em;line-height: 2.2rem"> 南京本地人员和外地人员请分别从以下两个通道注册报名： </p>-->
<!--      <p style="text-indent:2em;line-height: 1rem;margin-top: 0.5rem"> <a href="https://docs.qq.com/form/page/DTmRqV2NqTlBMWnNG" target="view_window">MLA 2021线下参会注册（南京本地）</a></p>-->
<!--      <p style="text-indent:2em;line-height: 1rem"> <a href="https://docs.qq.com/form/page/DTmRxcXRrUHB3dEZZ" target="view_window">MLA 2021线下参会注册（外地人员）</a> </p>-->

      <div class="flex_column" style="margin-top: 3rem">


        <div style="font-size: 1.5rem;font-weight: bold;margin-top: 5rem">会议详情</div>
        <div style="margin-top: 1rem">
          <p style="text-indent:2em;line-height: 2.6rem">“机器学习及其应用”（MLA）系列研讨会本着“学术至上、其余从简”的原则，不征文、不收费，迄今已举行18届，近年来参会人数超过2000人。MLA的更多信息请见 <a href="http://www.lamda.nju.edu.cn/conf/mla/" target="view_window">研讨会主页</a> 。</p>
          <p style="text-indent:2em;line-height: 2.6rem"> 第十九届研讨会将由<a href="http://cs.nuaa.edu.cn/" target="view_window">南京航空航天大学计算机科学与技术学院/人工智能学院</a>和<a href="https://pami.nuaa.edu.cn/#/" target="view_window">模式分析与机器智能工业和信息化部重点实验室</a>主办，由<a href="https://soft2011.nju.edu.cn/" target="view_window">江苏省软件新技术与产业化协同创新中心</a>协办。 </p>
          <p style="text-indent:2em;line-height: 2.6rem"> 拟邀请海内外从事机器学习及相关领域的10余位专家与会进行学术交流，包括特邀报告、顶会论文交流、以及Top Conference Review等部分。 </p>
          <p style="text-indent:2em;line-height: 2.6rem"> 欢迎机器学习及相关领域的学者、学生前来旁听特邀报告并参加讨论。研讨会不征文、不收费。<a @click="$router.push({name:'sponsor'})">欢迎赞助</a>。 </p>
          <p style="text-indent:2em;line-height: 2.6rem"> 参会通知：<a target="view_window" href="http://parnec.nuaa.edu.cn/_upload/article/files/9b/94/4d55a16e4200976189f2af91a22c/677683a4-02ae-4437-8c62-fd2dc532e2a1.pdf">点此下载</a>。</p>
        </div>
      </div>


      <div>
        <p  style="line-height: 2.6rem">本次会议得到如下公司大力支持：</p>
        <sponsor-about />
      </div>

    </el-col>
  </el-row>




</template>



<style scoped>

#header {
  background: url('http://parnec.nuaa.edu.cn/_upload/article/images/8f/a9/1389268340df9d6d18fc5daac5dc/d1f63953-7b3c-4a73-9702-c9cfda63e95d.jpg') no-repeat center center;
  background-size: cover;
  padding: 0px;
}
.bg_o {
  background:rgba(0,0,0,0.6)
}


@media screen and (min-width: 320px){
  .mla-title {
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
  }
  .mla-title2 {
    font-size: 19px;
    font-weight: bold;
    line-height: 40px;
  }
  .mla-title3 {
    font-weight: bold;
    line-height: 35px;
    font-size: 14px;
  }
  .bg-hegiht {
    height: 400px;
  }
}

@media screen and (min-width: 992px){
  .mla-title {
    font-size: 60px;
    font-weight: bold;
    line-height: 80px
  }
  .mla-title2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 60px;
  }
  .mla-title3 {
    font-size: 25px;
    font-weight: bold;
    line-height: 40px;
  }
  .bg-hegiht {
    height: 340px;
  }
}
@media screen and (min-width: 1200px){
  .mla-title {
    font-size: 65px;
    font-weight: bold;
    line-height: 100px
  }
  .mla-title2 {
    font-size: 45px;
    font-weight: bold;
    line-height: 70px;
  }
  .mla-title3 {
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
  }
  .bg-hegiht {
    height: 380px;
  }
}

@media screen and (min-width: 1500px){
  .mla-title {
    font-size: 70px;
    font-weight: bold;
    line-height: 105px
  }
  .mla-title2 {
    font-size: 45px;
    font-weight: bold;
    line-height: 75px;
  }
  .mla-title3 {
    font-size: 30px;
    font-weight: bold;
    line-height: 50px;
  }
  .bg-hegiht {
    height: 400px;
  }
}

@media screen and (min-width: 1920px){
  .mla-title {
    font-size: 80px;
    font-weight: bold;
    line-height: 120px
  }
  .mla-title2 {
    font-size: 56px;
    font-weight: bold;
    line-height: 90px;
  }
  .mla-title3 {
    font-size: 40px;
    font-weight: bold;
    line-height: 80px;
  }
  .bg-hegiht {
    height: 500px;
  }
}

</style>