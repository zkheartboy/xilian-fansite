#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/home/z/.openclaw/workspace/xilian-fansite"
LOG_DIR="$PROJECT_DIR/memory"
STAMP="$(date '+%Y-%m-%d %H:%M:%S')"
TODAY="$(date '+%Y-%m-%d')"
LOG_FILE="$LOG_DIR/autonomous-dev-$TODAY.md"
TODO_FILE="$PROJECT_DIR/AUTONOMOUS.md"

mkdir -p "$LOG_DIR"
cd "$PROJECT_DIR"

step=""
changed=0

append_log() {
  printf "%s\n" "$1" >> "$LOG_FILE"
}

append_log "## $STAMP"
append_log ""

# 1) 读取当前项目状态
IMAGE_COUNT=$(find public/images/gallery -type f \( -name '*.jpg' -o -name '*.png' -o -name '*.webp' \) 2>/dev/null | wc -l | tr -d ' ')
VIDEO_LINKS=0
AUDIO_LINKS=0
[ -f memory/videos.md ] && VIDEO_LINKS=$(grep -cE '^\d+\.' memory/videos.md || true)
[ -f memory/audios.md ] && AUDIO_LINKS=$(grep -cE '^\d+\.' memory/audios.md || true)

append_log "- 当前图片：${IMAGE_COUNT} 张"
append_log "- 当前视频链接：${VIDEO_LINKS} 个"
append_log "- 当前音频链接：${AUDIO_LINKS} 个"

# 2) 选择一个最小可迭代功能：若无 audio 页面则创建；否则补充首页入口；否则只做构建巡检
if [ ! -f src/pages/audio.astro ]; then
  step="create-audio-page"
  cat > src/pages/audio.astro <<'EOF'
---
import Layout from '../layouts/Layout.astro';
import fs from 'node:fs';

const audioFile = new URL('../../memory/audios.md', import.meta.url);
let items = [];
try {
  const content = fs.readFileSync(audioFile, 'utf-8');
  items = content
    .split('\n')
    .filter(line => /^\d+\.\s+\[.*\]\(.*\)/.test(line))
    .map(line => {
      const m = line.match(/^\d+\.\s+\[(.*)\]\((.*)\)/);
      return m ? { title: m[1], url: m[2] } : null;
    })
    .filter(Boolean);
} catch {}
---
<Layout title="昔涟音频库">
  <section class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-4">昔涟音频库</h1>
    <p class="text-gray-400 mb-8">收录角色语音、主题曲、战斗音效等相关音频线索。</p>

    {items.length > 0 ? (
      <div class="grid gap-4">
        {items.map((item) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" class="block rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
            <div class="font-semibold">{item.title}</div>
            <div class="text-sm text-gray-400 mt-1 break-all">{item.url}</div>
          </a>
        ))}
      </div>
    ) : (
      <div class="rounded-xl border border-dashed border-white/15 p-8 text-center text-gray-400">
        暂无音频链接，等待自动搜集任务补充。
      </div>
    )}
  </section>
</Layout>
EOF
  changed=1
  append_log "- 本轮迭代：新增音频页面 src/pages/audio.astro"
fi

# 3) 如果首页还没有音频入口，则补一个明显入口
if ! grep -q 'audio' src/pages/index.astro; then
  step="${step:+$step,}add-audio-entry"
  python3 - <<'PY'
from pathlib import Path
p = Path('src/pages/index.astro')
text = p.read_text()
needle = '</section>'
insert = '''\n  <section class="max-w-6xl mx-auto px-4 py-8">\n    <div class="rounded-2xl border border-white/10 bg-white/5 p-6">\n      <h2 class="text-2xl font-bold mb-3">更多内容</h2>\n      <div class="flex flex-wrap gap-3">\n        <a href="/gallery" class="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 transition">查看图片画廊</a>\n        <a href="/videos" class="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition">查看视频库</a>\n        <a href="/audio" class="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">查看音频库</a>\n      </div>\n    </div>\n  </section>\n'''
if needle in text:
    text = text.replace(needle, needle + insert, 1)
    p.write_text(text)
PY
  changed=1
  append_log "- 本轮迭代：为首页新增音频库入口"
fi

# 4) 更新 AUTONOMOUS.md 的进度数字和任务描述
python3 - <<PY
from pathlib import Path
p = Path('$TODO_FILE')
text = p.read_text()
text = text.replace('247张图片', f'${IMAGE_COUNT}张图片')
text = text.replace('当前图片：247张', f'当前图片：${IMAGE_COUNT}张')
text = text.replace('### 自动任务系统\n- **图片搜集**：每30分钟自动执行，MD5去重，主动探索新来源\n- **视频搜集**：每30分钟自动执行，收集B站视频链接\n- **音频搜集**：每30分钟自动执行，收集音频链接\n- **Claude Code开发**：每小时自动执行，持续优化网站（已修复配置）',
'''### 自动任务系统
- **图片搜集**：每30分钟自动执行，MD5去重，主动探索新来源
- **视频搜集**：每30分钟自动执行，收集B站视频链接
- **音频搜集**：每30分钟自动执行，收集音频链接
- **网站开发巡检/迭代**：每小时自动执行，持续小步开发、构建验证、更新任务进度''')
p.write_text(text)
PY

# 5) 构建验证
if npm -s run build >/tmp/xilian-build.log 2>&1; then
  append_log "- 构建结果：BUILD_OK"
else
  append_log "- 构建结果：BUILD_FAIL"
  append_log "```"
  tail -80 /tmp/xilian-build.log >> "$LOG_FILE" || true
  append_log "```"
  exit 1
fi

# 6) 自动提交
if ! git diff --quiet || ! git diff --cached --quiet; then
  git add -A
  git commit -m "feat: autonomous hourly iteration" >/tmp/xilian-git.log 2>&1 || true
  git push >/tmp/xilian-push.log 2>&1 || true
  append_log "- Git：已提交并尝试推送"
else
  append_log "- Git：本轮无代码变更"
fi

append_log ""
