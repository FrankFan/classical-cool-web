import { FC } from 'react';
import './less.less';
interface ActivityProps {}

const Activity: FC<ActivityProps> = () => {
  return (
    <div className="activity">
      <div className="timeline">
        <p className="title">Book NFT Mint Activity</p>
        <div className="desc">
          <div className="item">
            <p>2022.09.09</p>
            <p>论语</p>
          </div>
          <div className="item">
            <p>2022.09.09</p>
            <p>道德经</p>
          </div>
          <div className="item">
            <p>2022.09.09</p>
            <p>孙子兵法</p>
          </div>
        </div>
      </div>
      <div className="content">
        <p className="title">人类的智慧浩劫记录</p>
        <article>
          典籍的传承是人类最宝贵的遗产，这些人类的知识是文明的基础，是人类发展过程中知识和智慧的记录，比黄金要更贵重。而过去人类的这些宝贵遗产能留下和传承的非常少，古代人类只能通过雕刻到石头上才能勉强留下这些宝贵的智慧，并部分传承下来，而历史上的焚书坑儒，火烧圆明园，火烧亚历山大图书馆，每一次乱象都会导致智慧惨遭荼毒，甚至绝迹。
          虽然现在的印刷术和计算机技术让这些知识的传播和复制非常容易，虽然可以避免被人为简单破坏和自然风蚀。但是无法避免统治阶级和权贵的刻意篡改，把原始作者的真实思想演变成自己的统治和奴役洗脑工具。
        </article>
        <div className="desc">
          <ul>
            <li>
              <p>
                <span className="circle"></span>
                <span>秦朝焚书坑儒</span>
              </p>
              <p>秦始皇焚书坑儒烧毁了大量的书籍</p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>西汉200年王莽篡位焚书</span>{' '}
              </p>
              <p>
                当时整个藏书不过13000卷。可是随着王莽篡位，这13000卷书全部焚毁。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>东汉末年董卓进京烧书</span>
              </p>
              <p>董卓把书烧了个干净，数字不详，很多修书都灰飞烟灭</p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>永嘉之祸，西晋的皇宫被烧</span>{' '}
              </p>
              <p>
                晋武帝司马炎开始重新修书，藏书。但是永嘉之祸时，西晋的皇宫被烧，书再次一本都没留下。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                南北朝，书籍增加到了6万多本，梁武帝灭齐国，又把这些书都烧了。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                江陵焚书
                历史上规模最大的烧书是梁元帝的江陵焚书，梁元帝上位后，把【文德殿】和【藏书馆】14多万卷书运回江陵后全部烧毁。
                “读书万卷
                ，犹有今日，故焚之！”他把自己亡国的责任归为“读书无用”。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                到唐朝，安史之乱，唐玄宗在逃亡的过程中，史书有记载：“安禄山之乱，尺简不藏。”
                又损失了好多书籍。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                黄巢起义，《旧唐书经籍志》载：“广明初，黄巢干纪，再陷两京，宫庙寺署焚荡殆尽。曩时遗籍，尺简无存。”
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                靖康之难时，金军在都城抢走大量书籍典藏，导致这些书最后下落不明，极少有流传到北方的。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>南宋末年，伯颜又对着临安放了把大火。</p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                乾隆皇帝虽然是是历史上修书最多的人，但是他毁得比修得多。乾隆皇帝修《四库全书》，全国图书都要进献检查，涉及明朝的不利清朝的文献全部被禁毁，查缴的禁书达三千多种，十五万多部。
              </p>
            </li>
            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                一批又一批的宫殿陆续倒下去,一处又一处无比美丽的景观被烧毁,就连那部被誉为旷世大典、百科全书式的文献集——《永乐大典》也在大火中灰飞烟灭。
              </p>
            </li>

            <li>
              <p>
                <span className="circle"></span>
                <span>梁武帝灭齐国，毁书6万本</span>
              </p>
              <p>
                亚历山大城建立了举世无双、当时世界上藏书最多、文种最多、书目记录最全的亚历山大图书馆。在鼎盛时期，图书馆藏书量达70万卷，仅图书目录就达120卷，馆内收藏了当时地中海沿岸古埃及、古希腊、古罗马的大批哲学、诗歌、文学、医学、宗教、伦理和其他科学著述和孤本书。后来惨遭火灾，因而被摧毁。连一个石块实物都没有留下。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;
