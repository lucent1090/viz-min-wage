import { slideConfig } from '../config'
import ImgAmei from '../static/salary-amei-d.svg'
import ImgShufun from '../static/salary-shufun-d.svg'

const coverTitle = '到了 2018 年才 22K！'
const coverSubTitle = '曾經凍漲十年的基本工資'
const publishedDate = '2017.8.21'

const slidesContent = [
  {
    key: 'case-amei',
    title: '## 慧美／台中／醫院清潔工',
    text: '「啊我都吃泡麵啦！很難生活啊！所以之前都有同事月底都一直在跟人家借錢啊！甚至有些人借到後來沒辦法還，就直接落跑了！」',
    sideImg: <ImgAmei />,
  },
  {
    key: 'case-shufun',
    title: '## 淑芬／桃園／零食業廠工',
    text: '「我工作24年了，但沒有用，20年都沒調薪，都是跟著基本工資，直到工會爭取才調五百…同事只能瘋狂加班，有的人加到身體都壞了。」',
    sideImg: <ImgShufun />,
  },
  {
    key: 'beginning-overview',
    title: '## 還有207萬勞工面對相似的情況',
    text: '<p>阿美和淑芬領的都是2017年的基本工資21,009，即便沒有家庭要負擔，仍生活得很吃力。</p>' +
    '<p>她們並非個案，根據勞動部說法，共有207萬人薪資受到基本工資影響。</p>' +
    '<p>儘管甫通過的審議會已將基本工資調到22K，但隨著狂飆的物價，勞工恐怕也得每月為生活煩惱⋯⋯。</p>',
    sideImg: null,
  },
  {
    key: 'beginning-ilo',
    title: '## 基本工資是什麼?',
    text: '<p>為什麼我們要在乎基本工資能不能幫助勞工生活呢?</p>' +
    '<p>國際勞工組織ILO 131號公約明訂最低工資需「維持勞工基本家庭生活需求」，也就是<u>最低工資不僅要能養活勞工本人，也應能養活其家人</u>' +
    '，因此調整時應參考「勞工生活成本」，勞團喊出的27K即是以此為根據。</p>',
    sideImg: null,
  },
  {
    key: 'beginning-economy',
    title: null,
    text: '<p>另一派看法則認為基本工資應該是「經濟成長果實的分享」，也就是一旦有經濟成長，' +
    '勞資雙方各有一半的功勞，因此基本工資的調整<u>應以「勞工造就多少經濟成長」為主要依據。</u></p>',
    sideImg: null,
  },
  {
    key: 'intro-1',
    title: '## 誰讓基本工資養不了家？ ',
    text: '<p>回顧台灣的基本工資變化史，1970到1995年有大幅度的成長，但到了1997到2007間卻出現長達十年的凍漲，' +
    '當時凍漲基本工資的原因包括亞洲金融風暴、企業外移等，許多人認為這是目前基本工資偏低的主因。</p>' +
    '<p>然而，並不是每個亞洲國家都選擇以凍漲基本工資來面對風暴。</p>',
    sideImg: null,
  },
  {
    key: 'intro-2',
    title: '## 真的好想贏韓國！',
    text: '<p>若以經濟發展歷程類似的南韓來比較，可以發現南韓的基本工資呈現穩定成長，與台灣的不自然波動大不同，' +
      '甚至在台灣凍漲的十年內一舉超越台灣。</p>' +
      '<p>難道，韓國沒受到亞洲金融風暴波及嗎?</p>' +
      '<small><p>圖為兩國基本工資時薪比較圖； 韓元匯率採用0.02658</p></small>',
    sideImg: null,
  },
  {
    key: 'intro-3',
    title: '## 再不景氣，也要和你調個工資！',
    text: '<p>若根據「成長果實理論」，只有在經濟有成長時才能調整基本工資。</p>' +
      '<p>比較台韓的GDP成長率，可以發現幾次金融危機，韓國經濟受挫狀況並不輸台灣，但韓國仍是每年穩定調升基本工資。</p>' +
      '<small>資料來源：台韓主計處</small>',
    sideImg: null,
  },
  {
    key: 'intro-4',
    title: '## 什麼都漲，只有薪水沒漲？',
    text: '<p>若考量是否能滿足勞工生活所需，以象徵一個地區生活成本的消費者物價指數(CPI)來比較，' +
      '則能發現儘管兩國增減幅度不同，但漲跌狀況卻相似。</p>' +
      '<p>不過，韓國的基本工資並不像台灣長年凍漲，大部分呈穩定成長。</p>' +
      '<small>資料來源：台韓主計處</small>',
    sideImg: null,
  },
  {
    key: 'intro-5',
    title: '## 如果當年不凍漲…',
    text: '<p>基本工資凍漲多年，但經濟並非沒有成長，只是沒有反映在基本工資上。</p>' +
      '<p>若以<u>勞動部公式來計算，2016年基本工資應為29,766元</u>，足足比當年的基本工資多出48%！</p>' +
      '<small>勞動部1994年參考公式 =〔前次行政院核定之基本工資×(1+消費者物價指數上升率+1/2×工業部門勞動生產力上升率)〕</small>',
    sideImg: null,
  },
  {
    key: 'intro-6',
    title: '',
    text: '<p>倘若根據ILO最低工資的精神來試算來算，<u>2015年基本工資應為28,861元</u>，比同年基本工資高出44%。</p>' +
      '<p>由此可知，目前基本工資偏低，凍漲的那十年功不可沒。</p>' +
      '<small>ILO精神最低工資 = 每月最低生活費 + (每月最低生活費 × 就業撫養比)' +
      '（備註：此為勞團以ILO精神試算的算式，但實際上各國則能依其國情自行調整指標）</small>',
    sideImg: null,
  },
  {
    key: 'intro-7',
    title: '## 為什麼凍漲十年?',
    text: '<p>過去20年間(1997-2016)，就有12年凍漲基本工資。</p>' +
      '<p>回顧凍漲理由，包括亞洲金融風暴、產業外移，或因「經濟不景氣」而遭行政院否決，<u>總歸一句話，就是政府說了算</u>。</p>' +
      '<p>也就是當政府高興時可以調，不高興則隨時可以否決基本工資審議會的決議。</p>',
    sideImg: null,
  },
  {
    key: 'intro-8',
    title: '## 韓國怎麼做到年年調基本工資？',
    text: '<p>景氣好調、景氣不好也調，與台灣「逢跌必凍」的情況大不相同，到底韓國怎麼做到的？</p>' +
      '<p>文化大學勞工關係學系教授李健鴻便分析，韓國經驗贏在<u>「詳盡的法制化」，而這是台灣目前最為缺乏的。</u></p>' +
      '<p>他並點出台灣基本工資調整制度有以下幾個主要問題。</p>',
    sideImg: null,
  },
  {
    key: 'problem-law',
    title: '## 基本工資未完成法制化',
    text: '<p>目前基本工資調整的法源為勞基法第21條與「基本工資審議辦法」。</p>' +
      '<p>而<u>主要依據的「基本工資審議辦法」是行政命令而非法律</u>，對政府的約束力不夠高。</p>' +
      '<p>辦法中明訂的事項也不多，缺乏對決策機制、時程以及對應罰則做明確規範，這也是造就十年凍漲的主因。</p>',
    sideImg: null,
  },
  {
    key: 'problem-agenda',
    title: '## 未明定時程與調整流程',
    text: '<p>過去曾發生資方集體拒絕出席審議會，政府不斷拜託資方的狀況。</p>' +
      '<p>這是由於辦法僅規範要在第三季進行審議，卻未明訂完成期限及參與者權責。</p>' +
      '<p>韓國明確將基本工資審議時間、參與者權責明訂於法令中，<u>若一定時間內未完成審議便算違法</u>，維持勞資政三方暢通的對話，才有年年調整的結果。</p>',
    sideImg: null,
  },
  {
    key: 'problem-index',
    title: '## 指標僅供參考',
    text: '<p>審議辦法沒有明確參考項目，每年都是審議會前勞動部透露可能參照哪個公式，<u>常被勞團質疑是「先射箭再畫靶」</u>。</p>' +
      '<p>事實上，<u>許多國家會透過「最低工資法」明訂「生活成本」等作為調整最低工資的指標</u>，' +
      '像法國甚至明定消費者物價指數(CPI)上漲超過2%，最低工資會立即以相同幅度調升。</p>',
    sideImg: null,
  },
  {
    key: 'problem-dependency',
    title: '## 委員會欠缺獨立性',
    text: '<p>好不容易委員會決定了<u>調漲的幅度，卻可能被行政院否決</u>，因為<u>勞動部公告之前，要經過行政院核定</u>。</p>' +
      '<p>如2012年，行政院便以「經濟前景不明」為由拒絕調漲月薪，並訂下經濟成長率連兩季大於3%，以及失業率低於4%才能調漲的門檻。</p>' +
      '<p>缺乏獨立性的委員會，讓基本工資審議委員會形同虛設！</p>',
    sideImg: null,
  },
  {
    key: 'problem-ineffective',
    title: '## 強制力不足',
    text: '<p>若雇主不按規定乖乖給員工高於基本工資的薪資，按照勞基法規定，只會被罰2萬元～100萬元罰鍰。</p>' +
      '<p>對照<u>韓國</u>，雇主若被發現給薪低於最低工資，甚至<u>可能被判處最高3年的刑期</u>。</p>' +
      '<p>此外他國法令能保障勞工取回最低工資差額，但台灣勞工則須自行向勞動局申請調解或向法院提起民事訴訟。</p>',
    sideImg: null,
  },
  {
    key: 'ending-tsai-promise',
    title: '## 蔡英文2016政見主張將「最低工資」入法',
    text: '<p>其實我國<u>曾簽署「經濟社會文化國際權利」國際公約</u>，裡面明確規定落實最低工資維護勞工生存權。</p>' +
      '<p>蔡英文總統也曾在<a href="https://tsai-tracker.twreporter.org/promise?ID=3" target="_blank">勞工政見提出要訂定〈最低工資法〉</a>，以實現此國際權利公約的規範，' +
      '雖然<u>勞動部曾承諾去年年底提出草案，但至今尚未提出草案</u>。</p>',
    sideImg: null,
  },
]

const footerText = '<h2>一起監督最低工資法</h2>' +
  '目前，雖有時代力量黨團及部分國民黨立委提出草案版本，但兩版本目前各有爭議，最低工資法的制定，仍須各界的關心' +
                      '（<a href="https://tsai-tracker.twreporter.org/promise?ID=3" target="_blank">蔡英文〈最低工資法〉進度追蹤</a>）'

const authorsText = '<p>數據、文字整理 ｜ <span itemprop="author">葉瑜娟</span>、<span itemprop="author">王珣沛</span></p>' +
                    '<p>設計 ｜ <span itemprop="author">黃禹禛</span></p>' +
                    '<p>工程 ｜ <span itemprop="author">王珣沛</span>、<span itemprop="author">黃詩晏</span></p>'


const slideBeginingKey = 'cover'

const slideEndingKey = 'footer'

const slidesCnt = slidesContent.length + slideConfig.extraCnt

export { slidesContent, slidesCnt, coverTitle, coverSubTitle, publishedDate, slideBeginingKey, slideEndingKey, authorsText, footerText }
