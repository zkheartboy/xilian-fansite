export interface ImageItem {
  id: number;
  category: string;
  src: string;
  title: string;
  description?: string;
  width: number;
  height: number;
}

export const images: ImageItem[] = [
  { id: 1, category: 'character', src: '/images/gallery/character1.jpg', title: '角色立绘 - 昔涟', width: 400, height: 600 },
  { id: 2, category: 'character', src: '/images/gallery/character2.jpg', title: '战斗画面 - 昔涟', width: 400, height: 600 },
  { id: 3, category: 'wallpaper', src: '/images/gallery/wallpaper1.jpg', title: '高清壁纸 - 星空', width: 1920, height: 1080 },
  { id: 4, category: 'wallpaper', src: '/images/gallery/wallpaper2.jpg', title: '高清壁纸 - 官宣', width: 1920, height: 1080 },
  { id: 5, category: 'character', src: '/images/gallery/character3.jpg', title: '角色表情 - 微笑', width: 400, height: 600 },
  { id: 6, category: 'meme', src: '/images/gallery/meme1.jpg', title: '表情包 - 你好呀', width: 300, height: 300 },
  { id: 7, category: 'wallpaper', src: '/images/gallery/wallpaper3.jpg', title: '高清壁纸 - 梦境', width: 1920, height: 1080 },
  { id: 8, category: 'character', src: '/images/gallery/character4.jpg', title: 'CV配音 - 宴宁', width: 400, height: 600 },
  { id: 9, category: 'meme', src: '/images/gallery/meme2.jpg', title: '表情包 - 撒娇', width: 300, height: 300 },
  { id: 10, category: 'character', src: '/images/gallery/character5.jpg', title: '角色立绘 - 双形态', width: 400, height: 600 },
  { id: 11, category: 'wallpaper', src: '/images/gallery/wallpaper4.jpg', title: '高清壁纸 - 官宣2', width: 1920, height: 1080 },
  { id: 12, category: 'meme', src: '/images/gallery/meme3.jpg', title: '表情包 - 人家', width: 300, height: 300 },
  { id: 13, category: 'character', src: '/images/gallery/character6.jpg', title: '战斗立绘 - 昔涟', width: 400, height: 600 },
  { id: 14, category: 'wallpaper', src: '/images/gallery/wallpaper5.jpg', title: '高清壁纸 - 情侣', width: 1920, height: 1080 },
  { id: 15, category: 'meme', src: '/images/gallery/meme4.jpg', title: '表情包 - 惊喜', width: 300, height: 300 },
  { id: 16, category: 'character', src: '/images/gallery/character7.jpg', title: '角色立绘 - 成熟版', width: 400, height: 600 },
  { id: 17, category: 'wallpaper', src: '/images/gallery/wallpaper6.jpg', title: '高清壁纸 - 官宣3', width: 1920, height: 1080 },
  { id: 18, category: 'meme', src: '/images/gallery/meme5.jpg', title: '表情包 - 害羞', width: 300, height: 300 },
  { id: 19, category: 'character', src: '/images/gallery/character8.jpg', title: '技能立绘 - 结界', width: 400, height: 600 },
  { id: 20, category: 'wallpaper', src: '/images/gallery/wallpaper7.jpg', title: '高清壁纸 - 官宣4', width: 1920, height: 1080 },
  { id: 21, category: 'meme', src: '/images/gallery/meme6.jpg', title: '表情包 - 认真', width: 300, height: 300 },
  { id: 22, category: 'character', src: '/images/gallery/character9.jpg', title: '角色立绘 - 迷迷', width: 400, height: 600 },
  { id: 23, category: 'wallpaper', src: '/images/gallery/wallpaper8.jpg', title: '高清壁纸 - 官宣5', width: 1920, height: 1080 },
  { id: 24, category: 'meme', src: '/images/gallery/meme7.jpg', title: '表情包 - 开心', width: 300, height: 300 }
];

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'character', name: '角色' },
  { id: 'wallpaper', name: '壁纸' },
  { id: 'meme', name: '表情包' }
];
