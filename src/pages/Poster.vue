<script setup>
const tableData25 = [
  {
    poster: "李云帆",
    unit: '四川大学',
    title: 'Contrastive Clustering',
    conference: 'AAAI\'21'
  },
  {
    poster: "颜航",
    unit: '复旦大学',
    title: 'A Unified Generative Framework for Various NER Subtasks',
    conference: 'ACL\'21'
  },
  {
    poster: "赵欢",
    unit: '第四范式',
    title: 'Pooling architecture search for graph classification',
    conference: 'CIKM\'21'
  },
  {
    poster: "何环宇",
    unit: '上海交通大学',
    title: 'Variational Pedestrian Detection',
    conference: 'CVPR\'21'
  },
  {
    poster: "芮翔宇",
    unit: '西安交通大学',
    title: 'Learning An Explicit Weighting Scheme for Adapting Complex HSI Noise',
    conference: 'CVPR\'21'
  },
  {
    poster: "王豪",
    unit: '华中科技大学',
    title: 'Scene Text Retrieval via Joint Text Detection and Similarity Learning',
    conference: 'CVPR\'21'
  },
  {
    poster: "覃立波",
    unit: '哈尔滨工业大学',
    title: 'Don\'t be Contradicted with Anything! CI-ToD: Towards Benchmarking Consistency for Task-oriented Dialogue System',
    conference: 'EMNLP\'21'
  },
  {
    poster: "周大为",
    unit: '西安电子科技大学',
    title: 'Removing Adversarial Noise in Class Activation Feature Space',
    conference: 'ICCV\'21'
  },
  {
    poster: "陇盛",
    unit: '陆军炮兵防空兵学院',
    title: 'The Role of Momentum Parameters in the Optimal Convergence of Adaptive Polyak’s Heavy-ball Methods',
    conference: 'ICLR\'21'
  },
  {
    poster: "段志斌",
    unit: '西安电子科技大学',
    title: 'Sawtooth Factorial Topic Embeddings Guided Gamma Belief Network',
    conference: 'ICML\'21'
  },
  {
    poster: "黄若民",
    unit: '中国科学技术大学',
    title: 'A Novel Sequential Coreset Method for Gradient Descent Algorithms',
    conference: 'ICML\'21'
  },
  {
    poster: "树扬",
    unit: '清华大学',
    title: 'Zoo-Tuning: Adaptive Transfer from A Zoo of Models',
    conference: 'ICML\'21'
  },
  {
    poster: "颜番",
    unit: '南京大学',
    title: 'Towards Generating Summaries for Lexically Confusing Code through Code Erosion',
    conference: 'IJCAI\'21'
  },
  {
    poster: "张伟嘉",
    unit: '东南大学',
    title: 'Non-i.i.d. multi-instance learning for predicting bag and instance label with variational autoencoder',
    conference: 'IJCAI\'21'
  },
  {
    poster: "鲍伟轩",
    unit: '东南大学',
    title: 'Partial label dimensionality reduction via confidence-based dependence maximization',
    conference: 'KDD\'21'
  },
  {
    poster: "周宇强",
    unit: '中国科学技术大学',
    title: 'Modeling context-aware features for cognitive diagnosis in student learning',
    conference: 'KDD\'21'
  },
  {
    poster: "冯舒扬",
    unit: '同济大学',
    title: 'Scene Text Image Super-Resolution via Parallelly Contextual Attention Network',
    conference: 'MM\'21'
  },
  {
    poster: "王天佐",
    unit: '南京大学',
    title: 'Actively Identifying Causal Effects with Latent Variables Given Only Response Variable Observable',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "姜伟",
    unit: '南京大学',
    title: 'Revisiting Smoothed Online Learning',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "谢明昆",
    unit: '南京航空航天大学',
    title: 'Multi-Label Learning with Pairwise Relevance Ordering',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "鲍凡",
    unit: '清华大学',
    title: 'Stability and Generalization of Bilevel Programming in Hyperparameter Optimization',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "沈阳",
    unit: '南京理工大学',
    title: 'A2-Net: Learning Attribute-Aware Hash Codes for Large-Scale Fine-Grained Image Retrieval',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "孙江鑫",
    unit: '中山大学',
    title: 'Action-guided 3D Human Motion Prediction',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "王一飞",
    unit: '北京大学',
    title: 'Residual Relaxation for Multi-view Representation Learning',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "叶飞杨",
    unit: '南方科技大学',
    title: 'Multi-Objective Meta Learning',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "陈雷",
    unit: '合肥工业大学',
    title: 'Learning Fair Representations for Recommendation: A Graph-based Perspective',
    conference: 'WWW\'21'
  },
]

const tableData26 = [
  {
    poster: "周芃",
    unit: '安徽大学',
    title: 'Tri-level Robust Clustering Ensemble with Multiple Graph Learning',
    conference: 'AAAI\'21'
  },
  {
    poster: "程子恒",
    unit: '西安电子科技大学',
    title: 'Memory-Efficient Network for Large-scale Video Compressive Sensing',
    conference: 'CVPR\'21'
  },
  {
    poster: "李春光",
    unit: '北京邮电大学',
    title: 'Learning a Self-Expressive Network for Subspace Clustering',
    conference: 'CVPR\'21'
  },
  {
    poster: "王家祺",
    unit: '北京交通大学',
    title: 'Interpretable Image Recognition by Constructing Transparent Embedding Space',
    conference: 'ICCV\'21'
  },
  {
    poster: "廖振宇",
    unit: '华中科技大学',
    title: 'Sparse Quantized Spectral Clustering',
    conference: 'ICLR\'21'
  },
  {
    poster: "殷荣",
    unit: '中国科学院信息工程研究所',
    title: 'Distributed Nystrom Kernel Learning with Communications',
    conference: 'ICML\'21'
  },
  {
    poster: "游凯超",
    unit: '清华大学',
    title: 'LogME: Practical Assessment of Pre-trained Models for Transfer Learning',
    conference: 'ICML\'21'
  },
  {
    poster: "邵杰晶",
    unit: '南京大学',
    title: 'Towards Robust Model Reuse in the Presence of Latent Domains',
    conference: 'IJCAI\'21'
  },
  {
    poster: "朱勇椿",
    unit: '中国科学院计算所',
    title: 'Learning to Expand Audience via Meta Hybrid Experts and Critics for Recommendation and Advertising',
    conference: 'KDD\'21'
  },
  {
    poster: "陈雄辉",
    unit: '南京大学',
    title: 'Offline Model-based Adaptable Policy Learning',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "陶略",
    unit: '南京航空航天大学',
    title: 'Better Safe Than Sorry: Preventing Delusive Adversaries with Adversarial Training',
    conference: 'NeurIPS\'21'
  },
  {
    poster: "吴栋贤",
    unit: '东京大学',
    title: 'Adversarial Neuron Pruning Purifies Backdoored Deep Models',
    conference: 'NeurIPS\'21'
  },
]

</script>
<template>

    <el-row  type="flex" justify="center" style="margin-top: 4rem;">
        <el-col :xs="23" :sm="20" :md="18" :lg="16" :xl="10">
          <div class="flex_center" style="font-weight: bold;font-size: 1.5rem;margin-bottom: 1.5rem"> 论文交流 </div>
          <p style="text-indent:2em;line-height: 2.6rem">顶会论文交流环节拟邀请过去一年在ICML、NeurIPS、COLT、KDD、IJCAI、AAAI、CVPR、ICCV等顶级国际会议上发表论文的作者前来交流。交流形式为 “Spotlight”。作者就论文内容以短视频形式做报告，时间为2分钟（120秒）。值得一提的是，简短报告最好具有一定的吸引性，那样有助于吸引更多参会者了解您的研究工作。</p>

          <p style="margin-top: 1.5rem;text-indent:2em;line-height: 2.6rem">如果您希望得到成果展示的机会，请按照<a target="_blank" href="http://parnec.nuaa.edu.cn/_upload/tpl/02/db/731/template731/assets/MLA21_form.docx">此格式</a>提交申请表。该申请表将由专家进行评审，通过评审的申请人将获得 Spotlight展出的机会。</p>
          <p style="text-indent:2em;line-height: 2.6rem">1. 报告人可以是教师，也可以是学生；</p>
          <p style="text-indent:2em;line-height: 2.6rem">2. 研讨会只提供展示和交流的机会，不出版文集；</p>
          <p style="text-indent:2em;line-height: 2.6rem">3. 申请表需严格按照<a target="_blank" href="http://parnec.nuaa.edu.cn/_upload/tpl/02/db/731/template731/assets/MLA21_form.docx">此格式</a>返回；</p>
          <p style="text-indent:2em;line-height: 2.6rem">4. 由于报告时间有限，可能会有一些很好的Spotlight不能获得展示机会，请谅解；</p>
          <div style="margin-top: 10px;margin-bottom: 10px;text-indent:2em;line-height: 2.6rem">
            <div>5. 重要日期：</div>
            <div style="margin-left: 1rem"> 申请表提交截止时间：	<span style="color: red">10月15日23:59:59；</span> </div>
          </div>
          <p style="text-indent:2em;line-height: 2.6rem">6. 申请表请通过Email发送到：mla2021@lamda.nju.edu.cn，并以“MLA2021顶会论文交流+姓名+论文发表地”作为邮件标题。</p>
          <p style="text-indent:2em;line-height: 2.6rem">
            <a target="_blank" href="http://parnec.nuaa.edu.cn/_upload/tpl/02/db/731/template731/assets/MLA21_form.docx"> <u>申请表下载</u> </a>
          </p>
          <div style="margin-top: 3rem;">
            <h3 style="text-align: center;font-weight: bold"> Poster Spotlight Session (I) </h3>
            <el-scrollbar style="width: 100%">
              <div style="min-width: 550px">
                <el-table
                    :data="tableData25"
                    style="font-size: 0.9rem"
                >
                  <el-table-column
                      label="序号"
                      min-width="10%"
                      align="center"
                      header-align="center"
                  >
                    <template  #default="scope">
                      {{scope.$index + 1}}
                    </template>
                  </el-table-column>

                  <el-table-column
                      prop="poster"
                      label="报告人"
                      min-width="15%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>


                  <el-table-column
                      prop="unit"
                      label="报告人单位"
                      min-width="25%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>

                  <el-table-column
                      prop="title"
                      label="论文题目"
                      align="center"
                      min-width="32%"
                      header-align="center"
                  >
                    <template  #default="scope">
                      <div style="line-height: 1.5rem;word-break: break-word;"> {{scope.row.title}} </div>
                    </template>
                  </el-table-column>

                  <el-table-column
                      prop="conference"
                      label = "会议名称"
                      min-width="18%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-scrollbar>

          </div>

          <div style="margin-top: 3rem;">
            <h3 style="text-align: center;font-weight: bold"> Poster Spotlight Session (II) </h3>
            <el-scrollbar style="width: 100%">
              <div style="min-width: 550px">
                <el-table
                    :data="tableData26"
                    style="font-size: 0.9rem"
                >
                  <el-table-column
                      label="序号"
                      min-width="10%"
                      align="center"
                      header-align="center"
                  >
                    <template  #default="scope">
                      {{scope.$index + 1}}
                    </template>
                  </el-table-column>

                  <el-table-column
                      prop="poster"
                      label="报告人"
                      min-width="15%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>


                  <el-table-column
                      prop="unit"
                      label="报告人单位"
                      min-width="25%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>

                  <el-table-column
                      prop="title"
                      label="论文题目"
                      align="center"
                      min-width="32%"
                      header-align="center"
                  >
                    <template  #default="scope">
                      <div style="line-height: 1.5rem;word-break: break-word;"> {{scope.row.title}} </div>
                    </template>
                  </el-table-column>

                  <el-table-column
                      prop="conference"
                      label = "会议名称"
                      min-width="18%"
                      align="center"
                      header-align="center"
                  >
                  </el-table-column>
                </el-table>
              </div>
            </el-scrollbar>

          </div>
        </el-col>
    </el-row>


  <el-row justify="center">
    <el-col :xs="22" :sm="20" :md="18" :lg="14" :xl="8">

    </el-col>
  </el-row>


</template>



<style scoped>
@media screen and (min-width: 320px){
  table_font {
    font-size: 1rem;
  }
}
@media screen and (min-width: 768px){
  table_font {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 992px){
  table_font {
    font-size: 0.9rem;
  }
}

</style>