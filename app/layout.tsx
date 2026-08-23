import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "付玉梅 May / 余寐｜人物、品牌与研究型内容",
  description: "付玉梅的自由职业作品集：人物特稿、商业品牌内容、城市文化写作、AI 内容研究、跨文化文书与产业科技内容。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
