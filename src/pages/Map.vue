<script setup>
import {computed, ref} from 'vue'
// import map from '../images/map.png'
// import traffic from '../images/traffic.png'

import target from '../images/target.png'

// 机场
const airport = [{
  position: '南京禄口国际机场',
  description:'乘坐地铁S1号线，经过7站，到达南京南站',
  //
}, {
  position: '南京南站',
  description:'站内换乘步行390米，乘坐地铁1号线（中国药科大学方向），经过4站，到达百家湖'
},{
  position: '百家湖',
  description:'百家湖站（2口出）下车，步行约600米，到达终点'
}];

const p1 = ref(0)

//火车站
const train = [{
  position: '南京南站',
  description:'乘坐地铁1号线（中国药科大学方向），经过4站，到达百家湖',
}, {
  position: '百家湖',
  description:'百家湖站（2口出）下车，步行约600米，到达终点'
}];
const p2 = ref(0)

//火车站
const train2 = [{
  position: '南京站',
  description:'乘坐地铁1号线（中国药科大学方向），经过17站，到达百家湖',
},{
  position: '百家湖',
  description:'百家湖站（2口出）下车，步行约600米，到达终点'
}];
const p3 = ref(0)

// const is_small_screen = computed(() => document.body.clientWidth <= 500)

</script>

<template>


    <el-row  type="flex" justify="center" style="margin-top: 4rem;">

      <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
        <div class="flex_column" style="font-weight: bold;font-size: 1.5rem;">
<!--          <div>会议地点</div>-->
<!--          <div style="color: #cf1322;margin-top: 1rem;font-size: 1.3rem"  :class="{'flex_column':is_small_screen, 'flex_center':!is_small_screen}">-->
<!--            <div>南京航空航天大学将军路校区东区体育馆</div>-->
<!--            <el-link type="danger" href="https://j.map.baidu.com/a9/qIac" style="font-size: 1rem">（导航）</el-link>-->
<!--          </div>-->

          <div>会议地点</div>
          <div style="color: #cf1322;margin-top: 1rem;font-size: 1.3rem"  class="flex_column">
            <div style="margin-top: 10px" class="flex_center">
              南京景枫万豪酒店
              <el-link type="primary" href="https://j.map.baidu.com/40/CGAc" style="margin-left: 5px;margin-top: 0.5rem">
                <svg t="1638857954435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" width="25" height="25"><path d="M512 597.333333c94.122667 0 170.666667-76.544 170.666667-170.666666s-76.544-170.666667-170.666667-170.666667-170.666667 76.544-170.666667 170.666667 76.544 170.666667 170.666667 170.666666z m0-256c47.061333 0 85.333333 38.272 85.333333 85.333334s-38.272 85.333333-85.333333 85.333333-85.333333-38.272-85.333333-85.333333 38.272-85.333333 85.333333-85.333334z" fill="#1296db" p-id="3457"></path><path d="M487.253333 930.730667a42.581333 42.581333 0 0 0 49.493334 0C549.717333 921.557333 854.570667 701.44 853.333333 426.666667c0-188.202667-153.130667-341.333333-341.333333-341.333334S170.666667 238.464 170.666667 426.453333c-1.237333 274.986667 303.616 495.104 316.586666 504.277334zM512 170.666667c141.184 0 256 114.816 256 256.213333 0.896 189.354667-187.221333 359.381333-256 415.146667-68.736-55.808-256.896-225.877333-256-415.36 0-141.184 114.816-256 256-256z" fill="#1296db" p-id="3458"></path></svg>
              </el-link>
            </div>
            <el-row type="flex" justify="center" style="margin-top: 2rem">
              <el-col :span="20">
                <img :src="target" style="width: 100%">
              </el-col>
            </el-row>

          </div>

        </div>
        <el-divider />

<!--        <p style="line-height: 2.3rem"> <span style="color: #0053a1;font-weight: bold;">如何到达体育馆: </span> 从南京航空航天大学将军路校区东北门的专用通道进入校园（东北门位于静淮街和允泰街交叉路口处，经管学院楼旁），沿西方向行走约150米，往西南侧即可到达体育馆。图中红色箭头为从东北门到达体育馆的路线。 </p>-->
<!--        <el-row type="flex" justify="center">-->
<!--          <el-col :span="22">-->
<!--              <img :src="map" style="width: 100%">-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        <el-divider />-->

        <p style="line-height: 2.3rem;color: #0053a1;font-weight: bold;">  如何到达南京景枫万豪酒店？</p>
        <div style="padding: 1rem">
          <ul>
            <li>
              <span style="color: red;font-weight: bold"> 机场 </span> (出租车行程约30分钟，费用约100元)
              <a-steps v-model:current="p1" style="margin-top: 0.8rem" direction="vertical">
                <a-step v-for="item in airport" :title="item.position" :description="item.description"/>
              </a-steps>
              <div style="margin-top: 1rem">
                <span style="color: #1296db;font-weight: bold">线路详情：</span>
                <el-link type="primary" href="https://j.map.baidu.com/50/MPAc" style="margin-top: 0.1rem">
                  <svg t="1638857954435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" width="25" height="25"><path d="M512 597.333333c94.122667 0 170.666667-76.544 170.666667-170.666666s-76.544-170.666667-170.666667-170.666667-170.666667 76.544-170.666667 170.666667 76.544 170.666667 170.666667 170.666666z m0-256c47.061333 0 85.333333 38.272 85.333333 85.333334s-38.272 85.333333-85.333333 85.333333-85.333333-38.272-85.333333-85.333333 38.272-85.333333 85.333333-85.333334z" fill="#1296db" p-id="3457"></path><path d="M487.253333 930.730667a42.581333 42.581333 0 0 0 49.493334 0C549.717333 921.557333 854.570667 701.44 853.333333 426.666667c0-188.202667-153.130667-341.333333-341.333333-341.333334S170.666667 238.464 170.666667 426.453333c-1.237333 274.986667 303.616 495.104 316.586666 504.277334zM512 170.666667c141.184 0 256 114.816 256 256.213333 0.896 189.354667-187.221333 359.381333-256 415.146667-68.736-55.808-256.896-225.877333-256-415.36 0-141.184 114.816-256 256-256z" fill="#1296db" p-id="3458"></path></svg>
                </el-link>
              </div>

            </li>
            <li style="margin-top: 3rem">
              <div style="color: red;font-weight: bold"> 火车站 </div>
              <ul type="circle">
                <li  style="margin-top: 1rem">
                  <span> 南京南站出发 </span> (出租车行程约10分钟，车费约20元)
                  <a-steps v-model:current="p2" style="margin-top: 0.5rem" direction="vertical">
                    <a-step v-for="item in train" :title="item.position" :description="item.description"/>
                  </a-steps>

                  <div style="margin-top: 1rem">
                    <span style="color: #1296db;font-weight: bold">线路详情：</span>
                    <el-link type="primary" href="https://j.map.baidu.com/ae/SBrc" style="margin-top: 0.1rem">
                      <svg t="1638857954435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" width="25" height="25"><path d="M512 597.333333c94.122667 0 170.666667-76.544 170.666667-170.666666s-76.544-170.666667-170.666667-170.666667-170.666667 76.544-170.666667 170.666667 76.544 170.666667 170.666667 170.666666z m0-256c47.061333 0 85.333333 38.272 85.333333 85.333334s-38.272 85.333333-85.333333 85.333333-85.333333-38.272-85.333333-85.333333 38.272-85.333333 85.333333-85.333334z" fill="#1296db" p-id="3457"></path><path d="M487.253333 930.730667a42.581333 42.581333 0 0 0 49.493334 0C549.717333 921.557333 854.570667 701.44 853.333333 426.666667c0-188.202667-153.130667-341.333333-341.333333-341.333334S170.666667 238.464 170.666667 426.453333c-1.237333 274.986667 303.616 495.104 316.586666 504.277334zM512 170.666667c141.184 0 256 114.816 256 256.213333 0.896 189.354667-187.221333 359.381333-256 415.146667-68.736-55.808-256.896-225.877333-256-415.36 0-141.184 114.816-256 256-256z" fill="#1296db" p-id="3458"></path></svg>
                    </el-link>
                  </div>
                </li>
                <li  style="margin-top: 2rem">
                  <span> 南京站出发 </span> (出租车行程约30分钟，车费约65元)
                  <a-steps v-model:current="p3" style="margin-top: 0.5rem" direction="vertical">
                    <a-step v-for="item in train2" :title="item.position" :description="item.description"/>
                  </a-steps>

                  <div style="margin-top: 1rem">
                    <span style="color: #1296db;font-weight: bold">线路详情：</span>
                    <el-link type="primary" href="https://j.map.baidu.com/80/7xrc" style="margin-top: 0.1rem">
                      <svg t="1638857954435" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" width="25" height="25"><path d="M512 597.333333c94.122667 0 170.666667-76.544 170.666667-170.666666s-76.544-170.666667-170.666667-170.666667-170.666667 76.544-170.666667 170.666667 76.544 170.666667 170.666667 170.666666z m0-256c47.061333 0 85.333333 38.272 85.333333 85.333334s-38.272 85.333333-85.333333 85.333333-85.333333-38.272-85.333333-85.333333 38.272-85.333333 85.333333-85.333334z" fill="#1296db" p-id="3457"></path><path d="M487.253333 930.730667a42.581333 42.581333 0 0 0 49.493334 0C549.717333 921.557333 854.570667 701.44 853.333333 426.666667c0-188.202667-153.130667-341.333333-341.333333-341.333334S170.666667 238.464 170.666667 426.453333c-1.237333 274.986667 303.616 495.104 316.586666 504.277334zM512 170.666667c141.184 0 256 114.816 256 256.213333 0.896 189.354667-187.221333 359.381333-256 415.146667-68.736-55.808-256.896-225.877333-256-415.36 0-141.184 114.816-256 256-256z" fill="#1296db" p-id="3458"></path></svg>
                    </el-link>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
<!--        <el-row type="flex" justify="center">-->
<!--          <el-col :span="22">-->
<!--            <img :src="traffic" style="width: 100%">-->
<!--          </el-col>-->
<!--        </el-row>-->

      </el-col>
    </el-row>

</template>



<style scoped>

</style>