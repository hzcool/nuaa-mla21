<script setup>
import img9 from "../images/book9.png"
import img8 from '../images/book8.jpg'
import img7 from '../images/book7.jpg'
import img6 from '../images/book6.jpg'
import img5 from '../images/book5.jpg'
import img4 from '../images/book4.jpg'
import img3 from '../images/book3.jpg'
import img2 from '../images/book2.jpg'
import img1 from '../images/book1.jpg'
const books = [{
  type: "MLA'19-'20 文集",
  img: img9,
  editor: '张敏灵、胡清华、李宇峰 主编.',
  info: ['机器学习及其应用:2021,', '北京: 清华大学出版社, 2021.', '(ISBN 978-7-302-59095-8)'],
},{
  type: "MLA'17-'18 文集",
  img: img8,
  editor: '于剑、封举富、张敏灵、俞扬 主编.',
  info: ['机器学习及其应用:2019,', '北京: 清华大学出版社, 2019.', '(ISBN 978-7-302-54435-7)'],
},{
  type: "MLA'15-'16 文集",
  img: img7,
  editor: '高阳 陈松灿 主编.',
  info: ['机器学习及其应用:2017,', '北京: 清华大学出版社, 2017.', '(ISBN 978-7-302-48781-4)'],
},{
  type: "MLA'13-'14 文集",
  img: img6,
  editor: '张军平 高新波 主编.',
  info: ['机器学习及其应用:2015,', '北京: 清华大学出版社, 2015.', '(ISBN 978-7-302-40659-4)'],
},{
  type: "MLA'11-'12 文集",
  img: img5,
  editor: '张长水 杨强 主编.',
  info: ['机器学习及其应用:2013,', '北京: 清华大学出版社, 2013.', '(ISBN 978-7-302-33619-8)'],
},{
  type: "MLA'09-'10 文集",
  img: img4,
  editor: '周志华 杨强 主编.',
  info: ['机器学习及其应用:2011,', '北京: 清华大学出版社, 2011.', '(ISBN 978-7-302-26853-6)'],
}, {
  type: "MLA'07-'08 文集",
  img: img3,
  editor: '周志华, 王珏 主编.',
  info: ['机器学习及其应用:2009,', '北京: 清华大学出版社, 2009.', '(ISBN 978-7-302-20419-0)'],
}, {
  type:  "MLA'05-'06 文集",
  img: img2,
  editor: '周志华, 王珏 主编.',
  info: ["机器学习及其应用:2007,", "北京: 清华大学出版社, 2007.", "(ISBN 978-7-302-16076-2)"]
}, {
  type: "MLA'04文集",
  img: img1,
  editor: "王珏, 周志华, 周傲英 主编.",
  info: ["机器学习及其应用,", "北京: 清华大学出版社, 2006.", "(ISBN 7-302-12038-2)"]
}]

</script>

<template>


    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 1.5rem"> 会议文集 </div>
          <div class="flex_center">
            <div>
              <p> 研讨会的部分特邀报告由清华大学出版社《机器学习及其应用》结集出版 </p>
              <p> （从MLA'05开始每两届会议出版一辑）： </p>
            </div>
          </div>
          <div class="flex_column">
            <el-card v-for="(item,idx) in books" :key="idx" style="margin-top: 3rem;width: 100%">

              <el-row type="flex" align="middle">
                <el-col :xs="8" :sm="8"  :md="10">
                    <div class="flex_column">
                      <img :src="item.img" style="width: 8.7rem;height: auto">
                      <div style="margin-top: 1.2rem">
                        {{item.type}}
                      </div>
                    </div>
                </el-col>

                <el-col  :xs="{span:12,offset:4}"   :sm="{span:12,offset:4}" :md="{offset:3, span:11}">
                  <h3 style="margin-bottom: 1rem"> {{item.editor}} </h3>
                  <p v-for="x in item.info"> {{x}} </p>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-col>
    </el-row>



</template>



<style scoped>

</style>