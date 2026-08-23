import Image from "next/image";
import { Reveal } from "./Reveal";
import { HeroEditor } from "./HeroEditor";

const externalProps = { target: "_blank", rel: "noreferrer" } as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#portfolio">跳到作品集</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">
          <span>Yumei</span>
        </a>
        <nav className="desktop-nav" aria-label="主导航">
          <a href="#portfolio">作品集</a><a href="#method">合作方式</a><a href="#about">关于我</a>
          <a className="nav-contact" href="mailto:yumeifu0420@gmail.com">聊聊项目</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="打开导航">菜单</summary>
          <nav aria-label="移动端导航">
            <a href="#portfolio">作品集</a><a href="#method">合作方式</a><a href="#about">关于我</a>
            <a href="mailto:yumeifu0420@gmail.com">聊聊项目</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image className="hero-art" src="/assets/may-editorial-hero.png" alt="一位戴贝雷帽与眼镜的女性坐在由文字汇成的长路尽头" width={1536} height={1024} priority />
        <div className="hero-copy">
          <p className="hero-name">Yumei</p>
          <h1 id="hero-title" aria-label="AI人文时代，不变的是继续用故事创造价值">
            <span>AI人文时代，不变的是</span><span>继续用故事创造价值。</span>
          </h1>
          <p className="hero-intro">5年头部媒体记者、3年欧洲自由撰稿经历，兼具专业判断与全球视野。以采访、研究和深度编辑为基础，为品牌与媒体创作真实、有洞察、具传播力的中英双语内容。</p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:yumeifu0420@gmail.com">聊聊项目</a>
            <a className="text-link" href="#portfolio">查看作品集 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-color-marks" aria-hidden="true"><i /><i /><i /></div>
      </section>

      <section className="portfolio-intro" id="portfolio">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Portfolio as a river</p>
            <h2>六条支流，一套编辑判断。</h2>
            <p>每一块先说明我能参与什么，再用已经发生的项目和公开作品证明。作者、联合署名与项目经历分别标注，不把团队成果改写成个人战绩。</p>
          </div>
        </Reveal>
      </section>

      <div className="portfolio-river">
        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-brand">
            <StreamTitle title="商业品牌内容">让品牌不只“说卖点”，而是找到人物、场景与可信的中文表达。</StreamTitle>
            <ServiceTags items={["品牌故事与长文", "人物案例与采访", "中国市场内容", "社媒与网站编辑"]} />
            <div className="stream-evidence">
              <Evidence title="欧洲餐饮品牌内容与网站">项目经历 · 多平台内容、资产库与网站改版</Evidence>
              <Evidence title="品牌人物故事生产链">项目制 · 采访提纲、转写、成稿与事实核查</Evidence>
              <Evidence title="中文传播方案与长文本编辑">项目制 · 研究、结构、版本迭代与风险校对</Evidence>
            </div>
          </article>
        </Reveal>

        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-people">
            <StreamTitle title="人物与深度特稿">从长访谈和零散细节里，找到人物真正的选择、矛盾与时间感。</StreamTitle>
            <ServiceTags items={["人物采访与口述史", "第一人称故事", "深度特稿", "敏感议题编辑"]} />
            <div className="stream-evidence work-links">
              <Work href="https://m.thepaper.cn/newsDetail_forward_18683462" title="被“冻”住的六年，她战胜了比死亡更可怕的事">作者 · 罕见病与家庭照护</Work>
              <Work href="https://www.wenxuecity.com/news/2022/09/21/11847876.html" title="被网暴的第 70 天：她只是染了粉色头发">作者 · 女性表达与网络暴力</Work>
              <Work href="https://www.globalpeople.com.cn/special/1938.html" title="少年出川">作者 · 历史人物叙事</Work>
            </div>
          </article>
        </Reveal>

        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-city">
            <StreamTitle title="城市文化与旅行写作">把现场观察、文化史与个人感受编织成可以慢慢阅读的城市文本。</StreamTitle>
            <ServiceTags items={["城市与目的地特稿", "文化遗产", "展览与博物馆", "杂志长文"]} />
            <div className="stream-evidence issue-grid">
              <Issue href="/works/2505-pessoa.pdf" date="2025 · 05" title="佩索阿">作者 · 余寐 · 查看成刊</Issue>
              <Issue href="/works/2507-ceramic-staircase.pdf" date="2025 · 07" title="西西里陶瓷阶梯">作者 · 余寐 · 查看成刊</Issue>
              <Issue href="/works/2607-rotterdam.pdf" date="2026 · 07" title="鹿特丹 Fenix 移民博物馆">联合署名 · 查看成刊</Issue>
            </div>
          </article>
        </Reveal>

        <div className="jellyfish-break" aria-hidden="true">
          <Image src="/assets/jellyfish-drift.png" alt="" width={1024} height={1536} />
          <p>有些材料沉下去，有些线索浮上来。</p>
        </div>

        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-ai">
            <StreamTitle title="AI 内容研究与评测">不把 AI 当捷径，而是把任务、badcase 与人工判断做成可复用的方法。</StreamTitle>
            <ServiceTags items={["模型与产品横评", "内容质量评测", "AI 编辑工作流", "叙事产品研究"]} />
            <div className="stream-evidence work-links">
              <Work href="https://finance.sina.com.cn/tech/roll/2024-08-06/doc-inchsmtk0190567.shtml" title="实测 4 款国产头部 AI 视频大模型">作者 · 余寐 · 统一任务横向测评</Work>
              <Work href="https://finance.sina.com.cn/stock/stockzmt/2024-08-27/doc-incmapwh5859996.shtml" title="实测 4 款头部 PPT 生成大模型">作者 · 余寐 · 需求遵循与内容质量</Work>
              <div className="research-note"><strong>Retell：可解释的 AI 人生叙事系统</strong><p>个人研究与原型开发。完成 21 名用户测试、10 次后续访谈；189 次模块评价中有 137 次认为相关解释有帮助。</p></div>
            </div>
          </article>
        </Reveal>

        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-cross">
            <StreamTitle title="跨文化表达与文书">不是逐字替换，而是让身份、经历与意图在另一种语境里仍然成立。</StreamTitle>
            <ServiceTags items={["中英文资料整合", "翻译与语境改写", "CV 与求职信", "动机信与申请文书"]} />
            <div className="stream-evidence">
              <Evidence title="中英文 CV / Cover Letter / Motivation Letter">私人项目 · 涉及隐私，不公开原文</Evidence>
              <Evidence title="欧洲学习、文化与品牌语境转换">资料梳理、结构重写、语气与受众适配</Evidence>
            </div>
          </article>
        </Reveal>

        <Reveal className="stream-wrap">
          <article className="portfolio-stream stream-tech">
            <StreamTitle title="产业与科技观察">进入产品、企业与用户之间的信息差，把技术问题写回现实处境。</StreamTitle>
            <ServiceTags items={["行业与市场研究", "产品分析", "专家采访", "事实与数据核查"]} />
            <div className="stream-evidence work-links">
              <Work href="https://www.jwview.com/jingwei/html/06-23/328481.shtml" title="碰撞数据失窃背后：本田皓影中保研测试有无猫腻？">作者 · 汽车安全与测试数据调查</Work>
              <Work href="https://www.jwview.com/jingwei/html/m/03-15/471463.shtml" title="威马陷“锁电”争议">作者 · 消费者权益与电池技术</Work>
              <Work href="https://zixun.xinlingshou.com/archives/82403" title="扫地机器人第一股，陷入“隐私门”">作者 · 余寐 · 智能硬件与数据安全</Work>
            </div>
          </article>
        </Reveal>
      </div>

      <section className="method" id="method">
        <Reveal>
          <div className="section-heading section-heading-light"><p className="section-kicker">How I work</p><h2>研究是河床，编辑判断决定水往哪里走。</h2></div>
          <ol className="method-list">
            <Method title="先问清楚">目标、读者、用途、公开边界与交付格式。</Method>
            <Method title="进入材料">采访、资料搜集、来源核验与问题拆解。</Method>
            <Method title="搭出结构">找到冲突、人物弧线、信息层级与叙事节奏。</Method>
            <Method title="写与重写">AI 可以辅助转录、比较和初稿，人负责事实、语气与判断。</Method>
            <Method title="交付可追溯">保留版本、来源与修改说明，方便协作和继续使用。</Method>
          </ol>
        </Reveal>
      </section>

      <section className="about" id="about">
        <Reveal className="about-grid">
          <div className="portrait-frame"><Image src="/assets/may-portrait.jpg" alt="付玉梅站在海报墙前的照片" width={1080} height={1440} loading="lazy" /><span>在城市里收集句子，也收集人。</span></div>
          <div className="about-copy">
            <p className="section-kicker">About May</p><h2>我叫付玉梅。写作时，也用余寐这个名字。</h2>
            <p>新闻采访训练我追问事实、现场与人的选择；数字人文与 Human-AI Interaction 研究，让我开始把数据、模型与可解释性带进内容工作。</p>
            <p>我做过记者与编辑，也参与过品牌内容、城市人文写作、AI 产品测评和研究传播。2026 年，我在联合国日内瓦图书馆与档案馆担任研究与传播实习生。</p>
            <p>我以中文写作为主，可以处理英文资料、英文脚本与中英文沟通。对尚未公开或职责边界不清的项目，我宁愿少说一点。</p>
          </div>
        </Reveal>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div className="contact-copy"><p className="section-kicker">Start a conversation</p><h2 id="contact-title">如果你的材料很多、问题很复杂，我们可以从一次对话开始。</h2></div>
        <div className="contact-actions"><a className="primary-button" href="mailto:yumeifu0420@gmail.com">yumeifu0420@gmail.com</a><a className="text-link" href="https://www.linkedin.com/in/may-fu-0232a3286/" {...externalProps}>LinkedIn ↗</a></div>
      </section>
      <footer><p>Yumei</p><p>Chinese editorial work for people, places, brands and emerging technology.</p><a href="#top">回到上游 ↑</a></footer>
      <HeroEditor />
    </main>
  );
}

function StreamTitle({ title, children }: { title: string; children: string }) {
  return <div className="stream-title"><span className="stream-dot" aria-hidden="true" /><h3>{title}</h3><p>{children}</p></div>;
}

function ServiceTags({ items }: { items: string[] }) {
  return <div className="stream-services" aria-label="可合作内容">{items.map((item) => <span key={item}>{item}</span>)}</div>;
}

function Evidence({ title, children }: { title: string; children: string }) {
  return <div className="evidence-row"><p>{title}</p><span>{children}</span></div>;
}

function Work({ href, title, children }: { href: string; title: string; children: string }) {
  return <a href={href} {...externalProps}><span>{title}</span><small>{children}</small></a>;
}

function Issue({ href, date, title, children }: { href: string; date: string; title: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer"><span className="issue-date">{date}</span><strong>{title}</strong><small>{children}</small></a>;
}

function Method({ title, children }: { title: string; children: string }) {
  return <li><span>{title}</span><p>{children}</p></li>;
}
