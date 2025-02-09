import React from 'react';
import { Twitter, Smartphone } from 'lucide-react';

interface AppInfo {
  name: string;
  icon: string;
  description: string;
  iosUrl: string;
  androidUrl?: string; // Make androidUrl optional
}

const apps: AppInfo[] = [
  {
    name: "割り勘ナビ",
    icon: "https://i.imgur.com/XhOsFLS.png",
    description: "簡単に割り勘計算ができるアプリです。グループでの支払いも楽々管理できます。",
    iosUrl: "https://apps.apple.com/jp/app/id6615085527",
    androidUrl: "https://play.google.com/store/apps/details?id=com.warinavi.flutter_warikan_app&hl=ja"
  },
  {
    name: "聖徳太子ゲーム",
    icon: "https://i.imgur.com/XzH2UuL.png",
    description: "聖徳太子の能力を体験できる新感覚ゲーム。複数の会話を同時に理解できるかチャレンジしましょう。",
    iosUrl: "#", // 審査中のため一時的に無効なリンク
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              techaulait
            </h1>
            <a
              href="https://x.com/techaulait"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>X</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <div key={app.name} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="p-8">
                  <div className="flex items-center gap-6">
                    <img
                      src={app.icon}
                      alt={`${app.name}のアイコン`}
                      className="w-20 h-20 rounded-2xl shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-white">{app.name}</h2>
                  </div>
                  <p className="mt-6 text-slate-300 leading-relaxed">{app.description}</p>
                  <div className="mt-8 space-y-4">
                    <a
                      href={app.iosUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl backdrop-blur-sm transition-colors ${
                        app.iosUrl === "#" 
                          ? "bg-white/5 text-slate-400 cursor-not-allowed"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      <Smartphone className="w-5 h-5" />
                      <span>{app.iosUrl === "#" ? "Coming Soon" : "App Store"}</span>
                    </a>
                    {app.androidUrl && (
                      <a
                        href={app.androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-500/20 text-blue-300 rounded-xl hover:bg-blue-500/30 transition-colors backdrop-blur-sm"
                      >
                        <Smartphone className="w-5 h-5" />
                        <span>Google Play</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;