
<script setup>
import baixiang from "../images/baixiang.png"
import bodongbo from "../images/bodongbo.png"
import cairuichu from "../images/cairuichu.png"
import chewanxiang from "../images/chewanxiang.png"
// import jiangyugang from "../images/jiangyugang.png"
// import linhuazhen from "../images/linhuazhen.png"
import lujiwen from "../images/lujiwen.png"
import qianchao from "../images/qianchao.png"
import songle from "../images/songle.png"
import wenzaiwen from "../images/wenzaiwen.png"
import yejieping from "../images/yejieping.png"
import zhahongyuan from "../images/zhahongyuan.png"
import zhengshurong from "../images/zhengshurong.png"
import yujingyi from "../images/yjy.jpg"

const data = [
  {
    img : baixiang,
    homepage: 'https://www.vlrlab.net/~xbai',
    title: '白 翔 教授',
    // ratio:  1.0,
    desc: "白翔，华中科技大学人工智能与自动化学院教授、国家防伪工程技术研究中心副主任。主要研究方向计算机视觉与模式识别、文档分析等。已在计算机视觉与模式识别领域一流国际期刊和会议如PAMI、CVPR等发表论文60余篇。由于在场景文字检测与识别取得的突出成就，2019年在国际模式识别协会主办的国际文档分析与识别会议上获得IAPR/ICDAR Young Investigator Award (青年学者奖)。现任期刊IEEE TPAMI， Pattern Recognition, Frontier of Computer Science, 中国科学-信息科学、自动化学报编委。曾担任CVPR、AAAI、ICPR等人工智能主流国际会议的领域主席/资深技术程序委员或竞赛主席十余次，并获得AAAI-2019 Outstanding SPC Award。中国人工智能学会理事，中国图象图形学学会理事，中国自动化学会模式识别与机器智能专委会副主任，中国计算机学会计算机视觉专委会常务委员，IEEE资深会员。2014-2020连续7年入选Elsevier中国高被引学者榜，2020年入选IAPR Fellow。"
  },
  {
    img: bodongbo,
    homepage: 'http://bioinfo.ict.ac.cn/~dbu/',
    title: '卜东波 研究员',
    // ratio:  0.916,
    desc: "2000年于中科院计算所获得博士学位，2006-2008年于加拿大滑铁卢大学访问；研究兴趣包括生物信息学（蛋白质结构预测、糖结构鉴定）、计算机算法，在Nature Communications, NAR, AC, GUT, JPR, Bioinformatics, ISMB, RECOMB等期刊和会议发表论文多篇。  研制了“用人工智能技术辅助算法设计”的AIA系统，在经典排课问题上实现了变“凭灵感设计算法”为“从数据学习出算法”；开发了“端到端”神经网络架构CopulaNet预测残基间距离，开发了蛋白质空间结构预测软件ProFOLD，性能超过AlphaFold，持续改进赶超AlphaFold2。"
  },
  {
    img: cairuichu,
    homepage: 'https://sites.google.com/site/cairuichu',
    title: '蔡瑞初 教授',
    // ratio:  0.812,
    desc: '蔡瑞初，教授、博士生导师、数据挖掘与信息检索实验室主任、国家优秀青年基金获得者。2010年于华南理工大学获得工学博士学位，并进入广东工业大学工作；2015年并被评为教授、博士生导师；曾先后到新加坡国立大学、UIUC高等数字科学研究中心访问学习。蔡教授专注于因果关系发现与因果性学习等领域的理论与应用研究。在上述领域先后主持包括国家优秀青年基金在内的国家自然科学基金4项，省杰出青年基金、省特支计划科技创新青年拔尖人才、珠江科技新星、市协同创新重大专项等项目。已发表论文50余篇，包括ICML、NIPS、AAAI、IJCAI、SIGMOD 、VLDB、SDM等领域重要会议和TNNLS、TKDE、NN、PR等国际著名期刊。上述成果在华为、网易、腾讯、唯品会、南方电网、南方通信建设等企业应用实施，取得了良好的经济和社会价值。先后获得省科学技术二等奖（第四完成人）、省科学技术一等奖（第三完成人）、国家发明专利奖优秀奖（第三完成人）。'
  },
  {
    img: chewanxiang,
    homepage: 'http://ir.hit.edu.cn/~car/',
    title: '车万翔 教授',
    // ratio:  1.0,
    desc: '车万翔博士，哈尔滨工业大学计算学部长聘教授、博士生导师，社会计算与信息检索研究中心副主任，人工智能研究院副院长。教育部青年长江学者，黑龙江省“龙江学者”青年学者，斯坦福大学访问学者，2019年入选黑龙江省首批“头雁计划”团队成员。现任中国中文信息学会计算语言学专业委员会副主任兼秘书长；国际计算语言学学会亚太分会（AACL）执委兼秘书长；中国计算机学会高级会员、曾任YOCSEF哈尔滨主席（2016-2017年度）。在ACL、EMNLP、AAAI、IJCAI等国内外高水平期刊和会议上发表学术论文50余篇，其中AAAI 2013年的文章获得了最佳论文提名奖，论文累计被引用近5,000次（Google Scholar数据），H-index值为37。出版教材 3 部，译著 2 部。目前承担2030“新一代人工智能”重大项目课题、国家自然科学基金等多项科研项目。负责研发的语言技术平台（LTP）已被600余家单位共享，提供的在线“语言云”服务已有用户1万余人，并授权给百度、腾讯、华为等公司使用。2018、2019连续两年获CoNLL国际评测第1名。2020年获黑龙江省青年科技奖；2015、2016连续两年获Google Focused Research Award（谷歌专注研究奖）；2016年，获黑龙江省科技进步一等奖（排名第2）；2012年，获黑龙江省技术发明奖二等奖（排名第2）；2010年获中国中文信息学会“钱伟长”中文信息处理科学技术奖一等奖（排名第2）、首届汉王青年创新奖（个人）等多项奖励。2017年，所主讲的MOOC课程《高级语言程序设计（Python）》获国家精品在线开放课程。'
  },
  // {
  //   img: jiangyugang,
  //   homepage: "http://yugangjiang.info/",
  //   title: "姜育刚 教授",
  //   // ratio:  0.758,
  //   desc: "姜育刚，复旦大学教授、博士生导师，教育部长江学者特聘教授，计算机科学技术学院院长、软件学院院长、上海视频技术与系统工程研究中心主任。研究领域为多媒体信息处理，计算机视觉，鲁棒可信人工智能，发表论文百余篇，被引万余次。应用成果多次成功部署在国家关键地点的重要任务中。首届ACM中国新星奖和ACM SIGMM Rising Star Award得主。荣获2019年度上海市青年科技杰出贡献奖、2018年度上海市科技进步一等奖（排名1）和2015年度教育部自然科学二等奖（排名1）。现任包括ACM TOMM在内的三份国际期刊编委。",
  // },

  // {
  //   img: linhuazhen,
  //   homepage: 'https://csr.swufe.edu.cn/info/1042/1671.htm',
  //   title: '林华珍 教授',
  //   ratio:  0.776,
  //   desc: '林华珍, 西南财经大学教授，统计研究中心主任。国际数理统计学会IMS-fellow，教育部长江学者特聘教授，国家杰出青年科学基金获得者，国家百千万人才工程获得者，享受国务院政府特殊津贴专家。主要研究方向为非参数方法、转换模型、生存数据分析、函数型数据分析、潜变量分析、时空数据分析。研究成果发表在包括国际统计学四大顶级期刊AoS、JASA、JRSSB、Biometrika和计量经济学顶级期刊JOE及JBES上。先后多次主持国家基金项目，包括国家杰出青年基金及自科重点项目。林华珍教授是国际IMS-China、IBS-CHINA及ICSA-China委员，中国现场统计研究会数据科学与人工智能分会理事长，第九届全国工业统计学教学研究会副会长，中国现场统计研究会多个分会的副理事长。先后是国际统计学权威期刊《Biometrics》、《Scandinavian Journal of Statistics》、《Journal of Business & Economic Statistics》、《Canadian Journal of Statistics》、 《Statistics and Its Interface》、《Statistical Theory and Related Fields》的Associate Editor， 国内权威或核心学术期刊《数学学报》（英文）、《应用概率统计》、《系统科学与数学》、《数理统计与管理》编委会编委。'
  // },
  {
    img: lujiwen,
    homepage: "http://ivg.au.tsinghua.edu.cn/Jiwen_Lu/",
    title: '鲁继文 副教授',
    // ratio:  0.814,
    desc: '鲁继文，清华大学自动化系长聘副教授，博士生导师，国家杰出青年科学基金获得者，IAPR Fellow。主要研究方向为计算机视觉与模式识别，在PAMI/IJCV/CVPR/ICCV/ECCV上发表论文110余篇，主持承担国家自然科学基金联合重点项目、优秀青年科学基金、国家重点研发计划课题等项目10余项，第一完成人获中国电子学会自然科学一等奖。担任国际期刊Pattern Recognition Letters主编，T-IP/T-CSVT/T-BIOM编委，国际会议ICME 2022大会主席，FG 2023、VCIP 2022、AVSS 2021、ICME 2020程序委员会主席，中国计算机学会计算机视觉专委会和中国人工智能学会模式识别专委会常务委员。指导/联合指导的研究生获中国人工智能学会优秀博士学位论文奖（2人次）、中国图象图形学学会优秀博士学位论文奖和中国电子学会优秀硕士学位论文奖。'
  },
  {
    img: qianchao,
    homepage: 'http://www.lamda.nju.edu.cn/qianc/',
    title: '钱超 副教授',
    // ratio:  0.775,
    desc: "钱超，南京大学人工智能学院副教授、博导。分别于2009年和2015年获南京大学计算机系学士和博士学位，之后加入中科大计算机学院担任副研究员，2019年回到母校工作。目前主要研究演化计算理论与演化学习，出版专著《Evolutionary Learning》，并以第一作者在AIJ、TEvC、ECJ、Algorithmica、AAAI、IJCAI、NeurIPS等国际一流期刊和会议上发表二十余篇论文。担任IEEE计算智能学会Theoretical Foundations of Bio-inspired Computation工作组主席、IEEE演化计算技术委员会委员、Theoretical Computer Science客座编辑、JCST和FCS青年副编。获ACM GECCO’11最佳理论论文奖、IDEAL’16 最佳论文奖，博士论文获中国人工智能学会优博，并入选中国科协青年人才托举工程（2016），获国家优秀青年科学基金（2020）。"
  },
  {
    img: songle,
    homepage: "https://scholar.google.co.uk/citations?user=Xl4E0CsAAAAJ&hl=en",
    title: "宋乐 博士",
    // ratio:  1.0,
    desc: "宋乐博士是著名的机器学习和图深度学习专家，曾任美国佐治亚理工学院计算机学院终身教授、机器学习中心副主任，阿联酋 MBZUAI 机器学习系主任，蚂蚁金服深度学习团队负责人（P10）、阿里巴巴达摩院研究员，国际机器学习大会董事会成员，具有丰富的 AI 算法和工程经验。\n" +
        "自 2008 年起，宋乐博士在 CMU 从事生物计算相关的研究，利用机器学习技术对靶点挖掘、药物设计取得了一系列突破性成果，获得 NeurIPS、ICML、AISTATS 等主要机器学习会议的最佳论文奖。社区服务方面，他曾担任 NeurIPS、ICML、ICLR、AAAI、IJCAI 等 AI 顶会的领域主席，并将出任 ICML 2022 的大会主席，他还是同行评议期刊 JMLR、IEEE TPAMI 的副主编。"
  },
  {
    img: wenzaiwen,
    homepage: "https://bicmr.pku.edu.cn/~wenzw/",
    title: "文再文 教授",
    // ratio:  1.0,
    desc: "文再文，北京大学北京国际数学研究中心教授，主要研究最优化算法与理论及其在机器学习和人工智能的应用。 2013年获得基金委优秀青年科学基金。 2015年获得中组部青年拔尖人才计划。 2016年获中国青年科技奖。2020年获国家万人计划科技创新领军人才，现为中国运筹学会常务理事，中国运筹学会数学规划分会副理事长。"
  },
  {
    img: yejieping,
    homepage: "http://www.yelabs.net/",
    title: "叶杰平 博士",
    // ratio:  1.0,
    desc: "叶杰平，贝壳找房副总裁、首席科学家，密西根大学教授，IEEE Fellow、ACM杰出科学家。他主要从事机器学习、数据挖掘和大数据分析领域的研究，致力于推进人工智能技术在居住等领域的应用。他是多个国际顶级人工智能会议的资深委员会会员、区域主席和委员会副主席, 也是多个顶级人工智能期刊的副主编。曾获得KDD和ICML最佳论文奖，荣获2010年美国国家自然科学基金会生涯奖、2017年中国计算机学会“CCF科学技术奖科技进步卓越奖”、2019年度国际运筹学领域顶级实践奖--瓦格纳运筹学杰出实践奖（Daniel H. Wagner Prize）。"
  },
  {
    img: yujingyi,
    homepage: "http://www.yu-jingyi.com/",
    title: "虞晶怡 教授",
    desc: "虞晶怡教授于2000年获美国加州理工学院（Caltech）双学士学位，2005年获美国麻省理工学院（MIT）博士学位。现任上海科技大学副教务长、信息科学与技术学院教授、执行院长，是上海人工智能咨询委员会委员、叠境数字创始人。虞教授长期从事计算机视觉、计算成像、计算机图形学、生物信息学等领域的研究工作，已发表140多篇学术论文, 其中超90篇发表于国际会议CVPR/ICCV/ECCV和期刊TPAMI，已获得20多项PCT发明专利授权。虞教授是美国国家科学基金杰出青年奖（NSF CAREER Award）获得者。他曾组织多个计算机视觉大会，担任IEEE TPAMI、IEEE TIP等多个顶级期刊编委。虞教授担任ICCP 2016、ICPR 2020、WACV 2021以及人工智能顶会IEEE CVPR 2021和ICCV 2025的程序主席。由于他在计算机视觉领域的贡献，他入选IEEE Fellow。"
  },
  {
    img: zhahongyuan,
    homepage: "https://sds.cuhk.edu.cn/teacher/65",
    title: "查宏远 教授",
    // ratio:  0.77,
    desc: "Hongyuan Zha received his B.S degree in Mathematics from Fudan University in 1984 and His Ph.D. degree in Scientific Computing and Computational Mathematics from Stanford University in 1993. He was on the faculty of Department of Computer Science and Engineering at The Pennsylvania State University and College of Computing at The Georgia Institute of Technology before joining The School of Data Science at The Chinese University of Hong Kong, Shenzhen. His main research interest is machine learning."
  },
  {
    img: zhengshurong,
    homepage: "",
    title: "郑术蓉 教授",
    // ratio: 0.81125,
    desc: "郑术蓉，东北师范大学教授、博士生导师，主要从事大维随机矩阵理论及高维数据分析的研究。曾获国家自然科学基金委员会优秀青年科学基金资助，现任Journal of Multivariate Analysis 和《应用概率统计》学术期刊编委。"
  }
]

</script>

<template>

    <el-row  type="flex" justify="center" style="margin-top: 2rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="12">
          <div  style="text-align: center; font-weight: bold;font-size: 1.5rem;margin-top: 3rem">
            <span>特邀专家</span>
            <span style="font-size: 0.9rem"> （按姓氏拼音排序） </span>
          </div>
          <el-card  v-for="role in data" style="margin-top: 3rem;font-size: 1rem" shadow="hover">
              <el-row type="flex" align="top" justify="center" >
                <el-col :xs="7" :sm="6" :md="5" :lg="4">
                  <el-row type="flex" justify="center">
                    <img  :src="role.img" style="width: 85%">
                  </el-row>
                </el-col>
                <el-col :xs="17" :sm="18" :md="19" :lg="20">
                  <el-space>
                    <div  style="font-size: 1.2rem;font-weight: 550"> {{role.title}} </div>
                    <div style="font-weight: 550">	 [<a  :href="role.homepage" target="view_window"> Homepage </a>] </div>
                  </el-space>
                  <el-divider></el-divider>
                  <div style="line-height: 2rem;font-size: 0.9rem;">
                    {{role.desc}}
                  </div>
                </el-col>
              </el-row>
          </el-card>


        </el-col>
    </el-row>



</template>


<style scoped>

</style>