"use client";

import { useEffect, useState } from "react";

type Settings = { font: string; titleSize: number; artSize: number; artPosition: number };
const storageKey = "yumei-hero-settings-v2";
const defaults: Settings = { font: '"Songti SC", STSong, serif', titleSize: 67, artSize: 100, artPosition: 0 };
const fonts = [
  ["柔和宋体", '"Songti SC", STSong, serif'],
  ["清晰黑体", '"PingFang SC", sans-serif'],
  ["书页衬线", '"Iowan Old Style", "Songti SC", serif'],
];

function applySettings(settings: Settings) {
  const root = document.documentElement;
  root.style.setProperty("--hero-title-font", settings.font);
  root.style.setProperty("--hero-title-size", `${settings.titleSize}px`);
  root.style.setProperty("--hero-art-width", `${settings.artSize}%`);
  root.style.setProperty("--hero-art-width-mobile", `${Math.round(settings.artSize * 1.72)}%`);
  root.style.setProperty("--hero-art-bottom", `${settings.artPosition}%`);
}

export function HeroEditor() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(defaults);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    try {
      const parsed = { ...defaults, ...JSON.parse(saved) } as Settings;
      const timer = window.setTimeout(() => {
        setSettings(parsed);
        applySettings(parsed);
      }, 0);
      return () => window.clearTimeout(timer);
    } catch { localStorage.removeItem(storageKey); }
  }, []);

  function update(next: Partial<Settings>) {
    const updated = { ...settings, ...next };
    setSettings(updated);
    applySettings(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  }

  function reset() {
    setSettings(defaults);
    applySettings(defaults);
    localStorage.removeItem(storageKey);
  }

  return (
    <aside className="hero-editor" aria-label="首页视觉编辑器">
      <button className="editor-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "收起" : "调整首页"}</button>
      {open && <div className="editor-panel">
        <div className="editor-heading"><strong>首页样式</strong><span>修改会自动保存在这台设备</span></div>
        <label><span>标题字体</span><select value={settings.font} onChange={(event) => update({ font: event.target.value })}>{fonts.map(([label, value]) => <option value={value} key={label}>{label}</option>)}</select></label>
        <EditorRange label="标题大小" value={settings.titleSize} min={38} max={84} suffix="px" onChange={(titleSize) => update({ titleSize })} />
        <EditorRange label="插画大小" value={settings.artSize} min={72} max={118} suffix="%" onChange={(artSize) => update({ artSize })} />
        <EditorRange label="插画位置" value={settings.artPosition} min={-4} max={20} suffix="%" onChange={(artPosition) => update({ artPosition })} />
        <button className="editor-reset" type="button" onClick={reset}>恢复默认</button>
      </div>}
    </aside>
  );
}

function EditorRange({ label, value, min, max, suffix, onChange }: { label: string; value: number; min: number; max: number; suffix: string; onChange: (value: number) => void }) {
  return <label><span>{label}<output>{value}{suffix}</output></span><input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} /></label>;
}
