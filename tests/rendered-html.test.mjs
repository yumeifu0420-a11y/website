import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";

const pagePath = new URL("../app/page.tsx", import.meta.url);
const layoutPath = new URL("../app/layout.tsx", import.meta.url);
const cssPath = new URL("../app/globals.css", import.meta.url);

test("the first viewport states May's freelancer offer and contact path", async () => {
  const page = await readFile(pagePath, "utf8");
  assert.match(page, />Yumei</);
  assert.match(page, /AI人文时代，不变的是继续用故事创造价值/);
  assert.match(page, /人物与深度特稿/);
  assert.match(page, /商业品牌内容/);
  assert.match(page, /城市文化与旅行写作/);
  assert.match(page, /AI 内容研究与评测/);
  assert.match(page, /跨文化表达与文书/);
  assert.match(page, /产业与科技观察/);
  assert.match(page, /用故事创造价值/);
  assert.match(page, /5年头部媒体记者、3年欧洲自由撰稿经历/);
  assert.match(page, /创作真实、有洞察、具传播力的中英双语内容/);
  assert.match(page, /mailto:yumeifu0420@gmail\.com/);
  assert.doesNotMatch(page, /Your site is taking shape/);
});

test("portfolio evidence is linked and roles stay explicit", async () => {
  const page = await readFile(pagePath, "utf8");
  assert.match(page, /实测 4 款国产头部 AI 视频大模型/);
  assert.match(page, /被“冻”住的六年/);
  assert.match(page, /2505-pessoa\.pdf/);
  assert.match(page, /2607-rotterdam\.pdf/);
  assert.match(page, /作者/);
  assert.match(page, /联合署名/);
  assert.match(page, /项目经历/);
  assert.match(page, /rel="noreferrer"/);
});

test("public portfolio assets exist", async () => {
  const assets = [
    "../public/assets/may-editorial-hero.png",
    "../public/assets/aged-paper-strip.png",
    "../public/assets/jellyfish-drift.png",
    "../public/assets/may-portrait.jpg",
    "../public/works/2505-pessoa.pdf",
    "../public/works/2507-ceramic-staircase.pdf",
    "../public/works/2607-rotterdam.pdf",
  ];

  await Promise.all(
    assets.map((path) => access(new URL(path, import.meta.url), constants.R_OK)),
  );
});

test("document metadata and responsive motion preferences are configured", async () => {
  const [layout, css] = await Promise.all([
    readFile(layoutPath, "utf8"),
    readFile(cssPath, "utf8"),
  ]);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(layout, /付玉梅/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /max-width: 767px/);
  assert.doesNotMatch(css, /transition:\s*all/);
  assert.doesNotMatch(css, /font-style:\s*italic/);
});

test("hero copy keeps a protected text column beside the illustration", async () => {
  const css = await readFile(cssPath, "utf8");
  assert.match(css, /--hero-copy-width:\s*520px/);
  assert.match(css, /--hand:\s*"Songti SC"/);
  assert.doesNotMatch(css, /Ma Shan Zheng/);
  assert.match(css, /\.hero h1\s*\{[^}]*font-family:\s*var\(--hero-title-font,var\(--hand\)\)[^}]*font-size:\s*min\(var\(--hero-title-size,44px\),11vw\)/s);
  assert.match(css, /\.hero-intro::before\s*\{[^}]*aged-paper-strip\.png[^}]*mask-image:\s*linear-gradient/s);
  assert.match(css, /\.hero-jellyfish\s*\{/);
  assert.match(css, /\.hero-jellyfish\s*\{[^}]*right:\s*37%[^}]*clip-path:/s);
  assert.match(css, /\.hero-intro::before\s*\{[^}]*sepia\(\.28\)/s);
  assert.match(css, /\.hero-intro::after\s*\{/);
  assert.match(css, /\.hero-art\s*\{[^}]*right:\s*-12%[^}]*bottom:\s*var\(--hero-art-bottom,\s*8%\)[^}]*width:\s*var\(--hero-art-width,\s*82%\)[^}]*rotate\(-1\.8deg\)/s);
});

test("a local hero editor exposes typography and illustration controls", async () => {
  const editor = await readFile(new URL("../app/HeroEditor.tsx", import.meta.url), "utf8");
  const page = await readFile(pagePath, "utf8");
  assert.match(page, /<HeroEditor/);
  assert.match(editor, /调整首页/);
  assert.match(editor, /标题字体/);
  assert.match(editor, /汇文明朝体（本机）/);
  assert.match(editor, /标题大小/);
  assert.match(editor, /插画大小/);
  assert.match(editor, /插画位置/);
  assert.match(editor, /localStorage/);
  assert.match(editor, /恢复默认/);
  assert.match(editor, /titleSize:\s*44/);
  assert.match(editor, /artSize:\s*82/);
  assert.match(editor, /wasPreviousDefault/);
  assert.doesNotMatch(editor, /志莽行书|龙藏手书|刘建毛草|艺术手写/);
});
