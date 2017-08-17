import { slideConfig } from '../config'

const coverTitle = '22K夠用嗎？基本工資 12 年凍漲的真相'

const slidesContent = [
  {
    key: 'intro-1',
    text: '## 基本工資是什麼?\n 為什麼我們要在乎基本工資能不能幫助勞工生活呢?',
    sideImg: null,
  },
  {
    key: 'intro-2',
    text: '## 誰讓基本工資養不了家？ \n' +
    '回顧台灣的基本工資變化史，1970到1995年有大幅度的成長，但到了1997到2007間卻出現長達十年的凍漲，' +
    '當時凍漲基本工資的原因包括亞洲金融風暴、企業外移等，許多人認為這是目前基本工資偏低的主因。\n' +
    '然而，並不是每個亞洲國家都選擇以凍漲基本工資來面對風暴。',
    sideImg: null,
  },
  {
    key: 'intro-3',
    text: '## 真的好想贏韓國！ \n' +
      '若以經濟發展歷程類似的南韓來比較，可以發現南韓的基本工資呈現穩定成長，與台灣的不自然波動大不同，' +
      '甚至在台灣凍漲的十年內一舉超越台灣。' +
      '難道，韓國沒受到亞洲金融風暴波及嗎?',
    sideImg: null,
  },
]

const slidesCnt = slidesContent.length + slideConfig.extraCnt

export { slidesContent, slidesCnt, coverTitle }