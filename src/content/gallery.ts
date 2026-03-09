import fs from 'node:fs';
import path from 'node:path';

export interface ImageItem {
  id: number;
  category: string;
  src: string;
  title: string;
  description?: string;
  width: number;
  height: number;
}

const GALLERY_DIR = path.resolve(process.cwd(), 'public/images/gallery');

type Rule = {
  pattern: RegExp;
  category: string;
  title: (name: string, match: RegExpMatchArray | null) => string;
  width?: number;
  height?: number;
};

const RULES: Rule[] = [
  {
    pattern: /^character(\d+)\.(jpg|jpeg|png|webp)$/i,
    category: 'character',
    title: (_name, m) => {
      const n = Number(m?.[1] || 0);
      const titles = [
        '',
        '角色立绘 - 昔涟',
        '战斗画面 - 昔涟',
        '角色表情 - 微笑',
        'CV配音 - 宴宁',
        '角色立绘 - 双形态',
        '战斗立绘 - 昔涟',
        '角色立绘 - 成熟版',
        '技能立绘 - 结界',
        '角色立绘 - 迷迷'
      ];
      return titles[n] || `角色图片 - 昔涟${n}`;
    },
    width: 400,
    height: 600
  },
  {
    pattern: /^wallpaper(\d+)\.(jpg|jpeg|png|webp)$/i,
    category: 'wallpaper',
    title: (_name, m) => {
      const n = Number(m?.[1] || 0);
      const titles = [
        '',
        '高清壁纸 - 星空',
        '高清壁纸 - 官宣',
        '高清壁纸 - 梦境',
        '高清壁纸 - 官宣2',
        '高清壁纸 - 情侣',
        '高清壁纸 - 官宣3',
        '高清壁纸 - 官宣4',
        '高清壁纸 - 官宣5'
      ];
      return titles[n] || `高清壁纸 - 昔涟${n}`;
    },
    width: 1920,
    height: 1080
  },
  {
    pattern: /^meme(\d+)\.(jpg|jpeg|png|webp)$/i,
    category: 'meme',
    title: (_name, m) => `表情包 - 昔涟${m?.[1] || ''}`,
    width: 300,
    height: 300
  },
  {
    pattern: /^xilian_miyoushe_(\d+)\.(jpg|jpeg|png|webp)$/i,
    category: 'fanart',
    title: (_name, m) => `粉丝作品 - 昔涟${m?.[1] || ''}`,
    width: 500,
    height: 500
  },
  {
    pattern: /^sr_live_(\d+)\.(jpg|jpeg|png|webp)$/i,
    category: 'livestream',
    title: (_name, m) => `3.7直播 - 昔涟${m?.[1] || ''}`,
    width: 500,
    height: 500
  },
  {
    pattern: /^xilian_\d+_[a-z0-9]+\.(jpg|jpeg|png|webp)$/i,
    category: 'fanart',
    title: (name) => `自动采集素材 - ${name.replace(/\.[^.]+$/, '')}`,
    width: 500,
    height: 500
  }
];

function fileToImageItem(filename: string, index: number): ImageItem | null {
  for (const rule of RULES) {
    const match = filename.match(rule.pattern);
    if (match) {
      return {
        id: index + 1,
        category: rule.category,
        src: `/images/gallery/${filename}`,
        title: rule.title(filename, match),
        width: rule.width ?? 500,
        height: rule.height ?? 500
      };
    }
  }
  return null;
}

function loadImages(): ImageItem[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return files
    .map((file, index) => fileToImageItem(file, index))
    .filter((item): item is ImageItem => item !== null);
}

export const images: ImageItem[] = loadImages();

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'character', name: '角色' },
  { id: 'wallpaper', name: '壁纸' },
  { id: 'meme', name: '表情包' },
  { id: 'fanart', name: '粉丝作品' },
  { id: 'livestream', name: '版本直播' },
  { id: 'official', name: '官方素材' }
];
