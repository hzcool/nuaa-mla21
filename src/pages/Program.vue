
<script setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import ProgramPoster from '../components/ProgramPoster.vue'

const poster = {
  zhahongyuan: {
    time: '8:45–9:30',
    title: 'Optimal Transport and Applications',
    abstract : 'Optimal transport is concerned with moving one probability distribution to another in certain optimal way. It has a long history with rich mathematical theory. Recently it has seen broad applications in machine learning. In this talk, I will first give a brief overview of optimal transport and then focus on the following recent applications:\n' +
        '1.The computation of optimal transport plan using push-forward;\n' +
        '2.Regression problems without correspondence;\n' +
        '3.Learning stochastic dynamics from aggregate data;\n' +
        '4.Solving Fokker-Planck equation using push-forward.',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/ab/24/c2eeae844107b8c269947ee5772c/bbd68957-dda9-4497-8f0a-e976355a3584.pdf',
    author: '查宏远  教授，香港中文大学(深圳)',
    host: '陈松灿 教授，南京航空航天大学'
  },
  bodongbo: {
    time: '9:30–10:15',
    title: '蛋白质结构预测：从生物学观察到算法',
    abstract : '基因组、蛋白质组等生物学数据是典型的大数据；大数据时代的生物信息学研究范式似乎发生了显著的改变：从传统“Insight->理性建模->实验结果分析”范式到“Insight->NN->实验结果分析->理解NN”范式。这种转变在蛋白质结构预测领域表现得尤为显著：从传统的基于统计模型的残基间预测算法，到纯粹基于NN的残基间距离预测和结构预测。\n' +
        '\n' +
        '本次报告将以蛋白质结构预测为例，介绍生物物理学、统计学、计算机科学等不同领域研究者对同一问题的不同研究思路，并介绍报告人做的一些工作。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/ce/ae/04c3c0af4063849ce8e0603fbbe0/102714d1-af48-4da2-960d-92d9db290f7f.pdf',
    author: '卜东波 研究员，中科院计算所',
    host: '于剑 教授，北京交通大学'
  },
  baixiang: {
    time: '10:30–11:15',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/66/6f/a58d8b244cc4ba7e69f6147e0fc5/32754e47-52f2-45ab-9bc6-f43887df98c8.pdf',
    title: '基于多模态融合的三维目标检测',
    abstract : '三维目标检测是自动驾驶等应用中的核心技术之一。虽然基于点云的三维目标检测已取得了显著的进展，仍不能满足众多实际需求。近年来，研究者们开始关注基于多模态融合的三维目标检测方法，其不但能提升三维目标检测的精准性，且能减少对激光雷达成像质量的依赖。在本次报告中，我将首先介绍三维目标检测的基础知识和基本方法；接着，重点介绍多模态融合的三维目标检测研究现状；最后，我将分享基于多模态融合三维目标检测的实际应用情况。',
    author: '白 翔 教授，华中科技大学',
    host: '陶卿 教授，解放军陆军军官学院'
  },

  yejieping: {
    time:'14:00–14:45',
    title: '人工智能在居住领域的挑战及应用',
    abstract : '人工智能技术已逐渐渗透衣、食、住、行等日常生活领域，AI在金融、安防、制造业等领域的应用已实现较高的行业渗透率。而居住行业数字化升维面临着比其他领域更多的难题，房产交易流程长、环节复杂、产品非标，人工智能的发展极为受限。为此，作为科技驱动的新居住服务提供商，贝壳找房经过在房产交易行业长达20年的深耕，领悟到科学管理及数字化工具，是推动行业变革的最大因素。在本次报告中，叶杰平博士将分享贝壳如何利用大数据和人工智能技术来分析居住场景下特有的数据，为用户提供可持续、高效的居住服务。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/c1/fe/1741d7a7428f93aca04607bc7f3d/79c51ad9-6ba4-4527-8411-61be5eaa40f8.pdf',
    author: '叶杰平 博士，贝壳找房',
    host: '吴建鑫 教授，南京大学'
  },
  zhengshurong: {
    time:'14:45–15:30',
    title: '大维随机矩阵的谱性质',
    abstract : '样本协方差矩阵等是统计中常用的随机矩阵，尤其是在多元统计分析，脑成像数据、计量经济等研究中起到重要的作用。该报告将介绍大维样本协方差矩阵等几个常用随机矩阵的极限谱分布和中心极限定理，极值特征根的收敛性以及在高维数据中的应用。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/30/ed/9eab5a474aee9f6d9d3255e90edd/5985195a-f901-4d44-8726-09679dbac461.pdf',
    author: '郑术蓉 教授，东北师范大学',
    host: '陈恩红 教授，中国科学技术大学'
  },
  lujiwen: {
    time:'15:45–16:30',
    title: '无监督视觉表征学习',
    abstract : '视觉信息的高效精准表征是计算机视觉与模式识别的研究热点，在视频监控、自动驾驶、智能终端等领域均有着重要的应用前景。报告将介绍清华大学智能视觉实验室近年来在无监督视觉表征学习方面所开展的一些工作，主要包括紧致性视觉表征学习和自监督视觉表征学习，以及它们在人脸与物体识别、图像与视频检索、三维重建与识别等视觉任务中的应用。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/60/e6/d182b1a54ed39e2752e623e326a9/5182efed-ba39-4387-95a4-a8f2b6ff470b.pdf',
    author: '鲁继文 副教授，清华大学',
    host: '刘青山 教授，南京信息工程大学'
  },
  cairuichu: {
    time:'16:30–17:15',
    title: '因果关系发现进展及其应用',
    abstract : '探索和发现事物间的因果关系是数据科学的一个核心问题。在过去的数十年中，基于观察数据的因果关系发现方法在基础理论、算法设计及实际应用方面获得了很大的发展，引起了相关领域学者的关注。本报告拟从因果关系发现的基础理论和方法出发，对隐变量数据因果关系发现、非独立同分布数据因果关系发现等前沿进展进行介绍，并探讨因果关系发现在故障检测、解耦学习、迁移学习等场景中的应用。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/07/80/f3a77f6447e99cea1f98df9daf40/ccf9e5dc-d1d3-4a10-a5c4-04cc8f6d7049.pdf',
    author: '蔡瑞初 教授，广东工业大学',
    host: '朱军 教授，清华大学'
  },
  qianchao: {
    time:'17:15–18:00',
    title: 'Multi-objective Evolutionary Learning: Advances in Theories and Algorithms',
    abstract : 'Machine learning tasks often involve multiple objective functions, which may make conventional optimization algorithms fail. Evolutionary algorithms (EAs), inspired by natural evolution, have yielded encouraging outcomes for solving multi-objective optimization problems in machine learning. However, due to the heuristic nature of EAs, most outcomes to date have been empirical and lack theoretical support. In this talk, I will introduce our efforts towards building the theoretical foundation of multi-objective evolutionary learning. First, I will introduce a general theoretical tool for analyzing multi-objective EAs. Based on this tool, I will then present the influence of recombination operators on the performance of multi-objective EAs, and the theoretical findings on how to deal with constraints and noise. Finally, I will introduce multi-objective evolutionary learning algorithms with provable approximation guarantees, inspired by the theoretical results, for two representative learning tasks, selective ensemble and subset selection.',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/39/a8/a32f94a94c17a9b9b51e9d6f6eaa/01523e1c-f4d6-4585-a09c-e78416df4523.pdf',
    author: '钱超 副教授，南京大学',
    host: '徐增林 教授，哈尔滨工业大学（深圳）'
  },
  songle: {
    time: '8:30 – 9:15',
    title: '人工智能赋能医药研发',
    abstract : '报告将探讨AI如何在制药领域发挥作用，分享包括生物制药行业面临的现状和问题、产业解决方案、生物计算领域的研究进展、以及AI+生物制药的前沿探索等话题。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/c5/b8/31ba82cf414abe84b9c47347d4e8/38fc9428-14e8-4c8d-8b44-9abb8c759cb5.pdf',
    author: '宋乐 博士，百图生科',
    host: '高阳 教授，南京大学',
  },
  jiangyugang: {
    time: '9:15 – 10:00',
    title: 'Neural Human Reconstruction: From Rendering to Modeling and Beyond',
    abstract : 'Recent advances on deep learning, in particular, neural modeling and rendering, have renewed interests on developing effective 3D imaging solutions. Such techniques aim to overcome the limitations of traditional 3D reconstruction techniques such as structure-from-motion (SfM) and photometric stereo (PS) by reducing reconstruction noise, tackling texture-less regions, and synthesizing high quality free-view rendering. In this talk, I present recent efforts from my group at ShanghaiTech on neural human modeling techniques. Specifically, I demonstrate our latest neural human body reconstructor, deep 3D face synthesizer, anatomically correct 3D hand tracker, and ultra-realistic hair modeler. These solutions can produce dynamic virtual humans at an unprecedented visual quality as well as lead to profound changes to MetaVerse creation technologies. Finally I will discuss extensions of these techniques to Non-Line-of-Sight (NLOS) imaging systems for hidden object recovery. ',
    author: "虞晶怡 教授，上海科技大学",
    host: '张敏灵 教授，东南大学'
  },
  wenzaiwen: {
    time: '10:15 – 11:00',
    title: 'Second-Order Type Optimization Methods For Machine Learning',
    abstract : 'Optimization models are ubiquitous in machine learning. In this talk, we will review  semi-smooth Newton methods for composite convex programs and its application to large-scale semi-definite program problems, sub-sampled semismooth Newton for nonsmooth composite minimization problems.  We will also present efficient natural gradient methods for deep learning.',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/9f/eb/cdd1412b436ba12f0e22f8d7a463/33a479d1-41f7-4750-a550-3d088f2108b5.pdf',
    author: '文再文 教授，北京大学',
    host: '刘淇 教授，中国科学技术大学'
  },
  chewanxiang: {
    time: '11:00–11:45',
    title: '自然语言处理新范式：基于预训练的方法',
    abstract : ' 语言是人区别于动物的根本标志，具有无穷语义组合性、高度歧义性和持续进化性，准确处理自然语言是机器难以逾越的鸿沟，成为制约人工智能取得更大突破的主要瓶颈之一，也被誉为“人工智能皇冠上的明珠”。近年来以BERT、GPT为代表的、基于超大规模生语料库的预训练语言模型异军突起，充分利用大模型、大数据和大计算，使几乎所有自然语言处理任务性能都得到了显著提升，在若干公开数据集上宣称达到或超过了人类水平，成为了自然语言处理的新范式。本报告将首先介绍预训练模型的演化过程，接着介绍预训练模型的最新研究进展，最后对自然语言处理领域今后的发展趋势进行了展望。',
    slides: 'http://parnec.nuaa.edu.cn/_upload/article/files/87/fd/dd3e7eb94ef49004ffa35353b51e/29dff2da-9846-408b-a49d-ab63436f9700.pdf',
    author: '车万翔 教授，哈尔滨工业大学',
    host: '俞扬 教授，南京大学'
  },
}

const industries =  [{
  author: '陈玉荣 博士（英特尔）',
  title: '扩展边缘深度视觉智能',
  abstract: '深度学习虽然在图像语音识别及自然语言处理等方面取得了巨大突破，但它在模型训练和部署方面都存在一些挑战。本次演讲将介绍我们解决深度学习部署挑战，扩展边缘深度视觉智能的最新研究进展，包括用于压缩和加速二值化神经网络BNN的亚比特神经网络SNN (ICCV\'21)，支持运行时切换输入图像大小以实现计算资源自适应高效视觉识别的分辨率可切换网络RS-Nets (ECCV\'20)，以及用于增强深度视频表示学习的动态归一化与中继DNR (NeurIPS\'21)。',
}, {
  author: '王海（第四范式）',
  title: 'Towards AI for Everyone',
  abstract: '人工智能以数据驱动增长的方式在一些领域取得了成功，随着各行业数据的不断积累，越来越多的应用希望使用人工智能技术实现数据驱动增长的新模式。然而，在实际落地中面临着诸多的挑战，第四范式致力于人工智能技术赋能百业——AI for Everyone，本次报告将分享第四范式在通往AI for Everyone的道路上的经验和思考。'
}, {
  author: '秦熔均（南栖仙策）',
  title: 'Real-World Decision Making: Case Study',
  abstract: '南栖仙策科技有限公司致力于在广泛的业务中释放人工智能的决策力量，实现实际业务中智能决策的落地。本报告将围绕现实场景中的决策问题存在的挑战，介绍南栖仙策依托强化学习，在现实决策问题中求解的几个实际应用案例。',
}, {
  author: '冯霁 博士（倍漾资本）',
  title: '人工智能赋能金融工程',
  abstract: '待定'
}]

</script>
<template>

    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 1.5rem"> 会议日程 </div>


          <div class="banner"> 12月24日 </div>

            <div style="padding: 1rem">
              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 14:00–20:00 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 外地专家报到 </div>
            </div>


          <div class="banner"> 12月25日 </div>
          <div style="padding: 1rem">
              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 7:00–8:30 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 报到 </div>

              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 8:30–8:45 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 开幕式 </div>

              <el-card >
                <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 1&emsp;</span>
                </a-divider>
                <div style="height: 2rem"></div>
                <a-timeline color="green">
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.zhahongyuan.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.zhahongyuan" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                  <div style="height: 1rem"></div>
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.bodongbo.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.bodongbo" /> </el-col>
                    </el-row>
                  </a-timeline-item>

                </a-timeline>
              </el-card>

              <div style="height: 2rem"></div>
              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 10:15–10:30 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 休息 </div>

              <el-card>
                <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 2&emsp;</span>
                </a-divider>
                <div style="height: 2rem"></div>
                <a-timeline color="green">
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.baixiang.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.baixiang" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                </a-timeline>
              </el-card>

              <div style="height: 2rem"> </div>

              <el-card >
                <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Poster Spotlight Session (I)&emsp;</span>
                </a-divider>
                <div style="height: 2rem"></div>
                <a-timeline color="green">
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> 11:15–12:15 </el-col>
                      <el-col :xs="19" :sm="21">
                        <el-row type="flex" style="margin-bottom: 6px">
                          <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 主持人 </el-col>
                          <el-col  :xs="19" :sm="22" style="font-weight: bold"> 侯臣平 教授，国防科技大学 </el-col>
                        </el-row>
                        <el-row type="flex">
                          <el-col>
                            具体报告信息请见 <router-link to="/poster" style="color: #1890ff">顶会论文交流日程</router-link>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </a-timeline-item>
                </a-timeline>
              </el-card>

              <div style="height: 2rem"></div>
              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 12:15–14:00 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 午休 </div>

            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Poster Session (I)&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> 12:45 – 14:00 </el-col>
                    <el-col :xs="19" :sm="21">
                      <el-row type="flex">
                        <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 地&emsp;点 </el-col>
                        <el-col  :xs="19" :sm="22" style="font-weight: bold"> 景枫万豪酒店二楼走廊 </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </a-timeline-item>
              </a-timeline>
            </el-card>

            <div style="height: 2rem"></div>
            <el-card>
                <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 3&emsp;</span>
                </a-divider>
                <div style="height: 2rem"></div>
                <a-timeline color="green">
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.yejieping.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.yejieping" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                  <div style="height: 1rem"></div>
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.zhengshurong.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.zhengshurong" /> </el-col>
                    </el-row>
                  </a-timeline-item>

                </a-timeline>
              </el-card>

              <div style="height: 2rem"></div>
              <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 15:30–15:45 </span>
              <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 休息 </div>


              <el-card>
                <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 4&emsp;</span>
                </a-divider>
                <div style="height: 2rem"></div>
                <a-timeline color="green">
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.lujiwen.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.lujiwen" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                  <div style="height: 1rem"></div>
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.cairuichu.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.cairuichu" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                  <div style="height: 1rem"></div>
                  <a-timeline-item>
                    <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                    <el-row type="flex">
                      <el-col :xs="5" :sm="3"> {{poster.qianchao.time}} </el-col>
                      <el-col :xs="19" :sm="21"> <program-poster :poster="poster.qianchao" /> </el-col>
                    </el-row>
                  </a-timeline-item>
                </a-timeline>
              </el-card>

            </div>


          <div class="banner" style="margin-top: 1rem"> 12月26日 </div>
          <div style="padding: 1rem">
            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 5&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> {{poster.songle.time}} </el-col>
                    <el-col :xs="19" :sm="21"> <program-poster :poster="poster.songle" /> </el-col>
                  </el-row>
                </a-timeline-item>
                <div style="height: 1rem"></div>
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> {{poster.jiangyugang.time}} </el-col>
                    <el-col :xs="19" :sm="21"> <program-poster :poster="poster.jiangyugang" /> </el-col>
                  </el-row>
                </a-timeline-item>

              </a-timeline>
            </el-card>

            <div style="height: 2rem"></div>
            <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 10:00–10:15 </span>
            <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 休息 </div>


            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Regular Session 6&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> {{poster.wenzaiwen.time}} </el-col>
                    <el-col :xs="19" :sm="21"> <program-poster :poster="poster.wenzaiwen" /> </el-col>
                  </el-row>
                </a-timeline-item>
                <div style="height: 1rem"></div>
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> {{poster.chewanxiang.time}} </el-col>
                    <el-col :xs="19" :sm="21"> <program-poster :poster="poster.chewanxiang" /> </el-col>
                  </el-row>
                </a-timeline-item>

              </a-timeline>
            </el-card>

            <div style="height: 2rem"> </div>

            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                  <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Poster Spotlight Session (II)&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> 11:45–12:15 </el-col>
                    <el-col :xs="19" :sm="21">
                      <el-row type="flex" style="margin-bottom: 6px">
                        <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 主持人 </el-col>
                        <el-col  :xs="19" :sm="22" style="font-weight: bold"> 叶翰嘉 博士，南京大学</el-col>
                      </el-row>
                      <el-row type="flex">
                        <el-col>
                          具体报告信息请见 <router-link to="/poster" style="color: #1890ff">顶会论文交流日程</router-link>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </a-timeline-item>
              </a-timeline>
            </el-card>

            <div style="height: 2rem"></div>
            <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 12:15–14:00 </span>
            <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 午休 </div>

            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Poster Session (II)&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> 12:45 – 14:00 </el-col>
                    <el-col :xs="19" :sm="21">
                      <el-row type="flex">
                        <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 地&emsp;点 </el-col>
                        <el-col  :xs="19" :sm="22" style="font-weight: bold"> 景枫万豪酒店二楼走廊 </el-col>
                      </el-row>

                    </el-col>
                  </el-row>
                </a-timeline-item>
              </a-timeline>
            </el-card>

            <div style="height: 2rem"></div>
            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Industry Session&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> 14:00 – 14:40 </el-col>
                    <el-col :xs="19" :sm="21">
                      <el-row type="flex" style="margin-bottom: 6px">
                        <el-col  :xs="5" :sm="2"  style="color: rgba(0, 0, 0, 0.45);"> 主持人 </el-col>
                        <el-col  :xs="19" :sm="22" style="font-weight: bold"> 张利军 教授，南京大学 </el-col>
                      </el-row>

                      <el-divider  />
                      <div v-for="item in industries">

                        <program-poster :poster="item" />
                        <el-divider  />
                      </div>
                    </el-col>

                  </el-row>
                </a-timeline-item>
              </a-timeline>
            </el-card>

            <div style="height: 2rem"></div>
            <el-card >
              <a-divider  style="height: 2px; background-color: #409EFF;"  >
                <span style="position: relative; top: -15px;background: white;font-size: 1rem;color: #409EFF;font-weight: bold">&emsp;Top Conference Review Session&emsp;</span>
              </a-divider>
              <div style="height: 2rem"></div>
              <a-timeline color="green">
                <a-timeline-item>
                  <template #dot><ClockCircleOutlined style="font-size: 18px" /> </template>
                  <el-row type="flex">
                    <el-col :xs="5" :sm="3"> 14:40–17:55 </el-col>
                    <el-col :xs="19" :sm="21">
                      <el-row type="flex" style="margin-bottom: 6px">
                        <el-col  :xs="5" :sm="6"  style="color: rgba(0, 0, 0, 0.45);"> 会&emsp;议 </el-col>
                        <el-col  :xs="19" :sm="18" style="font-weight: bold"> Top Conference Review Session </el-col>
                      </el-row>
                      <el-row type="flex" style="margin-bottom: 6px">
                        <el-col  :xs="5" :sm="6"  style="color: rgba(0, 0, 0, 0.45);"> 主持人 </el-col>
                        <el-col  :xs="19" :sm="18" style="font-weight: bold"> 黄圣君 教授，南京航空航天大学 </el-col>
                      </el-row>
                      <el-row type="flex">
                        <el-col  :xs="24" :sm="6"  style="color: rgba(0, 0, 0, 0.45);"> 报告专家（姓氏拼音序）</el-col>
                        <el-col  :xs="19" :sm="18" style="font-weight: bold"> 高尉、景丽萍、黎铭、李宇峰、林巍峣、龙明盛、石川、宋乐、彭玺、邱锡鹏、童咏昕、张道强、郑伟诗、周志华、庄福振 </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </a-timeline-item>
              </a-timeline>
            </el-card>





            <div style="height: 2rem"></div>
            <span style="height: 2rem;line-height: 2rem;text-align: center;"> <ClockCircleOutlined style="font-size: 1rem;color: #409EFF" /> 17:55 – 18:00 </span>
            <div style=" text-align: center; line-height: 2rem;position: relative; bottom: 2rem;" class="header"> 闭幕式 </div>
          </div>


        </el-col>
    </el-row>



</template>


<style scoped>


.header {
  color: #409EFF;
  font-weight: 550;
  font-size: 1rem;
}

.banner {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #DF4B05;
  color: white;
  font-weight: bold;
  opacity: 0.8;
}


</style>