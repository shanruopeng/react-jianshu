import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点'
  },
  {
    id: 2,
    title: '手绘'
  }],
  articleList: [{
    id: 1,
    title: '有哪些诗词让你觉得是人间绝句？',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    desc: '1、不如归去，孤城越绝三春暮。 —— 朱熹《杜鹃》 2、 我有所念人，隔在远远乡。 我有所感事，结在深深肠。 ——白居易《夜雨》 3、来如春梦几...'
  }, {
    id: 2,
    title: '【年度盘点】10个热门Python练习项目',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    desc: '这10个项目，约有270000人学习过。 今天给大家盘点一下实验楼最热门的10个Python练习项目。第二名是《200 行 Python 代码实...'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}