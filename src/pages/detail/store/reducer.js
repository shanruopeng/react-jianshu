import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
  title: '有哪些诗词让你觉得是人间绝句？',
  content: ` <img src='http://upload.jianshu.io/admin_banners/web_images/4687/0c0c3a40f4453bad58b24e3580f295eeeb453212.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <p>
            1、不如归去，孤城越绝三春暮。—— 朱熹《杜鹃》
          </p>
          <p>
            2、来如春梦几多时，去似朝云无觅处。—— 白居易《花非花》
          </p>
          <p>
            3、山回路转不见君，雪上空留马行处。—— 岑参《白雪歌送武判官归京》
            </p>
          <p>
            4、可怜无定河边骨，犹是春闺梦里人。—— 陈陶《陇西行》
          </p>
          <p>
            5、晚来天欲雪，能饮一杯无。 —— 白居易《问刘十九》
          </p>
          <p>
            6、坐酌泠泠水，看煎瑟瑟尘。—— 白居易《山泉煎茶有怀》
          </p>
          <p>
            7、试问闲愁都几许？一川烟草，满城风絮，梅子黄时雨。—— 贺铸《青玉案》
          </p>
          <p>
            8、江南无所有，聊赠一枝春。——《赠范晔》陆凯
          </p>
          <p>
            9、愁无比，和春赋予东流水。—— 朱服《渔家傲》
          </p>
          <p>
            10、蔼蔼堂前林，中夏贮清荫。 —— 陶渊明《和郭主簿》
          </p>
          <p>
            11、不如意事常八九，可与语人无二三。 —— 方岳《别子才司令》
          </p>
          <p>
            12、叶上初阳干宿雨，水面清圆。风荷举。小楫轻舟，梦入芙蓉浦。——周邦彦《苏幕遮》
          </p>
          <p>
            13、近乡情更怯，不敢问来人。 —— 宋之问《渡汉江》
          </p>
          <p>
            14、槲叶落山路，枳花明驿墙。—— 温庭筠《商山早行》
          </p>
          <p>
            15、别后悠悠君莫问，无限事，不言中。—— 秦观《江城子》
          </p>`
})


export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}