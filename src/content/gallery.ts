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
  // 角色图片 (character)
  { id: 1, category: 'character', src: '/images/gallery/character1.jpg', title: '角色立绘 - 昔涟', width: 400, height: 600 },
  { id: 2, category: 'character', src: '/images/gallery/character2.jpg', title: '战斗画面 - 昔涟', width: 400, height: 600 },
  { id: 3, category: 'character', src: '/images/gallery/character3.jpg', title: '角色表情 - 微笑', width: 400, height: 600 },
  { id: 4, category: 'character', src: '/images/gallery/character4.jpg', title: 'CV配音 - 宴宁', width: 400, height: 600 },
  { id: 5, category: 'character', src: '/images/gallery/character5.jpg', title: '角色立绘 - 双形态', width: 400, height: 600 },
  { id: 6, category: 'character', src: '/images/gallery/character6.jpg', title: '战斗立绘 - 昔涟', width: 400, height: 600 },
  { id: 7, category: 'character', src: '/images/gallery/character7.jpg', title: '角色立绘 - 成熟版', width: 400, height: 600 },
  { id: 8, category: 'character', src: '/images/gallery/character8.jpg', title: '技能立绘 - 结界', width: 400, height: 600 },
  { id: 9, category: 'character', src: '/images/gallery/character9.jpg', title: '角色立绘 - 迷迷', width: 400, height: 600 },
  
  // 壁纸 (wallpaper)
  { id: 10, category: 'wallpaper', src: '/images/gallery/wallpaper1.jpg', title: '高清壁纸 - 星空', width: 1920, height: 1080 },
  { id: 11, category: 'wallpaper', src: '/images/gallery/wallpaper2.jpg', title: '高清壁纸 - 官宣', width: 1920, height: 1080 },
  { id: 12, category: 'wallpaper', src: '/images/gallery/wallpaper3.jpg', title: '高清壁纸 - 梦境', width: 1920, height: 1080 },
  { id: 13, category: 'wallpaper', src: '/images/gallery/wallpaper4.jpg', title: '高清壁纸 - 官宣2', width: 1920, height: 1080 },
  { id: 14, category: 'wallpaper', src: '/images/gallery/wallpaper5.jpg', title: '高清壁纸 - 情侣', width: 1920, height: 1080 },
  { id: 15, category: 'wallpaper', src: '/images/gallery/wallpaper6.jpg', title: '高清壁纸 - 官宣3', width: 1920, height: 1080 },
  { id: 16, category: 'wallpaper', src: '/images/gallery/wallpaper7.jpg', title: '高清壁纸 - 官宣4', width: 1920, height: 1080 },
  { id: 17, category: 'wallpaper', src: '/images/gallery/wallpaper8.jpg', title: '高清壁纸 - 官宣5', width: 1920, height: 1080 },
  
  // 表情包 (meme)
  { id: 18, category: 'meme', src: '/images/gallery/meme1.jpg', title: '表情包 - 你好呀', width: 300, height: 300 },
  { id: 19, category: 'meme', src: '/images/gallery/meme2.jpg', title: '表情包 - 撒娇', width: 300, height: 300 },
  { id: 20, category: 'meme', src: '/images/gallery/meme3.jpg', title: '表情包 - 人家', width: 300, height: 300 },
  
  // 米游社粉丝作品 (fanart)
  { id: 21, category: 'fanart', src: '/images/gallery/xilian_miyoushe_1.jpg', title: '粉丝作品 - 昔涟1', width: 500, height: 500 },
  { id: 22, category: 'fanart', src: '/images/gallery/xilian_miyoushe_2.jpg', title: '粉丝作品 - 昔涟2', width: 500, height: 500 },
  { id: 23, category: 'fanart', src: '/images/gallery/xilian_miyoushe_3.jpg', title: '粉丝作品 - 昔涟3', width: 500, height: 500 },
  { id: 24, category: 'fanart', src: '/images/gallery/xilian_miyoushe_4.jpg', title: '粉丝作品 - 昔涟4', width: 500, height: 500 },
  { id: 25, category: 'fanart', src: '/images/gallery/xilian_miyoushe_5.jpg', title: '粉丝作品 - 昔涟5', width: 500, height: 500 },
  { id: 26, category: 'fanart', src: '/images/gallery/xilian_miyoushe_6.jpg', title: '粉丝作品 - 昔涟6', width: 500, height: 500 },
  { id: 27, category: 'fanart', src: '/images/gallery/xilian_miyoushe_7.png', title: '粉丝作品 - 昔涟7', width: 500, height: 500 },
  { id: 28, category: 'fanart', src: '/images/gallery/xilian_miyoushe_8.png', title: '粉丝作品 - 昔涟8', width: 500, height: 500 },
  { id: 29, category: 'fanart', src: '/images/gallery/xilian_miyoushe_9.png', title: '粉丝作品 - 昔涟9', width: 500, height: 500 },
  { id: 30, category: 'fanart', src: '/images/gallery/xilian_miyoushe_10.jpg', title: '粉丝作品 - 昔涟10', width: 500, height: 500 },
  { id: 31, category: 'fanart', src: '/images/gallery/xilian_miyoushe_11.png', title: '粉丝作品 - 昔涟11', width: 500, height: 500 },
  { id: 32, category: 'fanart', src: '/images/gallery/xilian_miyoushe_12.jpg', title: '粉丝作品 - 昔涟12', width: 500, height: 500 },
  { id: 33, category: 'fanart', src: '/images/gallery/xilian_miyoushe_13.jpg', title: '粉丝作品 - 昔涟13', width: 500, height: 500 },
  { id: 34, category: 'fanart', src: '/images/gallery/xilian_miyoushe_14.png', title: '粉丝作品 - 昔涟14', width: 500, height: 500 },
  { id: 35, category: 'fanart', src: '/images/gallery/xilian_miyoushe_15.jpg', title: '粉丝作品 - 昔涟15', width: 500, height: 500 },
  { id: 36, category: 'fanart', src: '/images/gallery/xilian_miyoushe_16.png', title: '粉丝作品 - 昔涟16', width: 500, height: 500 },
  { id: 37, category: 'fanart', src: '/images/gallery/xilian_miyoushe_17.png', title: '粉丝作品 - 昔涟17', width: 500, height: 500 },
  { id: 38, category: 'fanart', src: '/images/gallery/xilian_miyoushe_18.png', title: '粉丝作品 - 昔涟18', width: 500, height: 500 },
  { id: 39, category: 'fanart', src: '/images/gallery/xilian_miyoushe_19.jpg', title: '粉丝作品 - 昔涟19', width: 500, height: 500 },
  { id: 40, category: 'fanart', src: '/images/gallery/xilian_miyoushe_20.jpg', title: '粉丝作品 - 昔涟20', width: 500, height: 500 },
  
  // 3.7版本直播 (livestream)
  { id: 41, category: 'livestream', src: '/images/gallery/sr_live_1.jpg', title: '3.7直播 - 昔涟1', width: 500, height: 500 },
  { id: 42, category: 'livestream', src: '/images/gallery/sr_live_2.jpg', title: '3.7直播 - 昔涟2', width: 500, height: 500 },
  { id: 43, category: 'livestream', src: '/images/gallery/sr_live_3.jpg', title: '3.7直播 - 昔涟3', width: 500, height: 500 },
  { id: 44, category: 'livestream', src: '/images/gallery/sr_live_4.jpg', title: '3.7直播 - 昔涟4', width: 500, height: 500 },
  { id: 45, category: 'livestream', src: '/images/gallery/sr_live_5.jpg', title: '3.7直播 - 昔涟5', width: 500, height: 500 },
  { id: 46, category: 'livestream', src: '/images/gallery/sr_live_6.jpg', title: '3.7直播 - 昔涟6', width: 500, height: 500 },
  { id: 47, category: 'livestream', src: '/images/gallery/sr_live_7.jpg', title: '3.7直播 - 昔涟7', width: 500, height: 500 },
  { id: 48, category: 'livestream', src: '/images/gallery/sr_live_8.jpg', title: '3.7直播 - 昔涟8', width: 500, height: 500 },
  { id: 49, category: 'livestream', src: '/images/gallery/sr_live_9.jpg', title: '3.7直播 - 昔涟9', width: 500, height: 500 },
  { id: 50, category: 'livestream', src: '/images/gallery/sr_live_10.jpg', title: '3.7直播 - 昔涟10', width: 500, height: 500 },
  { id: 51, category: 'livestream', src: '/images/gallery/sr_live_11.jpg', title: '3.7直播 - 昔涟11', width: 500, height: 500 },
  { id: 52, category: 'livestream', src: '/images/gallery/sr_live_12.jpg', title: '3.7直播 - 昔涟12', width: 500, height: 500 },
  { id: 53, category: 'livestream', src: '/images/gallery/sr_live_13.jpg', title: '3.7直播 - 昔涟13', width: 500, height: 500 },
  { id: 54, category: 'livestream', src: '/images/gallery/sr_live_14.jpg', title: '3.7直播 - 昔涟14', width: 500, height: 500 },
  { id: 55, category: 'livestream', src: '/images/gallery/sr_live_15.jpg', title: '3.7直播 - 昔涟15', width: 500, height: 500 },
  { id: 56, category: 'livestream', src: '/images/gallery/sr_live_16.jpg', title: '3.7直播 - 昔涟16', width: 500, height: 500 },
  { id: 57, category: 'livestream', src: '/images/gallery/sr_live_17.png', title: '3.7直播 - 昔涟17', width: 500, height: 500 },
  { id: 58, category: 'livestream', src: '/images/gallery/sr_live_18.png', title: '3.7直播 - 昔涟18', width: 500, height: 500 },
  { id: 59, category: 'livestream', src: '/images/gallery/sr_live_19.png', title: '3.7直播 - 昔涟19', width: 500, height: 500 },
  { id: 60, category: 'livestream', src: '/images/gallery/sr_live_20.png', title: '3.7直播 - 昔涟20', width: 500, height: 500 },
  { id: 61, category: 'livestream', src: '/images/gallery/sr_live_22.jpg', title: '3.7直播 - 昔涟21', width: 500, height: 500 },
  { id: 62, category: 'livestream', src: '/images/gallery/sr_live_23.png', title: '3.7直播 - 昔涟22', width: 500, height: 500 },
  { id: 63, category: 'livestream', src: '/images/gallery/sr_live_24.png', title: '3.7直播 - 昔涟23', width: 500, height: 500 },
  { id: 64, category: 'livestream', src: '/images/gallery/sr_live_25.png', title: '3.7直播 - 昔涟24', width: 500, height: 500 }
];

export const categories = [
  { id: 'all', name: '全部' },
  { id: 'character', name: '角色' },
  { id: 'wallpaper', name: '壁纸' },
  { id: 'meme', name: '表情包' },
  { id: 'fanart', name: '粉丝作品' },
  { id: 'livestream', name: '版本直播' }
];
