export interface VideoItem {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
  bvid: string;
  duration: string;
  views: number;
  likes: number;
  uploadDate: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: '《崩坏：星穹铁道》动画短片：「你好，世界」',
    description: '昔涟相关高热度官方动画短片内容，适合作为站点视频区重点展示。',
    thumbnail: '/images/videos/thumbnail1.jpg',
    type: 'official',
    bvid: 'BV14G1kB5Evp',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  },
  {
    id: 2,
    title: '《崩坏：星穹铁道》音乐MV——「昔涟」',
    description: '昔涟主题音乐 MV，适合归入官方视频内容。',
    thumbnail: '/images/videos/thumbnail2.jpg',
    type: 'official',
    bvid: 'BV1XG2FBTEHK',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  },
  {
    id: 3,
    title: '《崩坏：星穹铁道》昔涟角色PV——「再度和你」',
    description: '昔涟角色 PV，展示角色氛围、剧情感受与视觉表现。',
    thumbnail: '/images/videos/thumbnail3.jpg',
    type: 'official',
    bvid: 'BV1yZ1MB1Eej',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  },
  {
    id: 4,
    title: '《崩坏：星穹铁道》走近星穹——「昔涟：留待未来的空白诗篇」',
    description: '昔涟角色专题向视频，可作为剧情与设定补充内容展示。',
    thumbnail: '/images/videos/thumbnail4.jpg',
    type: 'story',
    bvid: 'BV1ekyBB5Esg',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  },
  {
    id: 5,
    title: '【崩坏星穹铁道】万字解析！昔涟全方位手法教学',
    description: '面向玩家的昔涟深度攻略视频，涵盖配队、光锥与实战思路。',
    thumbnail: '/images/videos/thumbnail5.jpg',
    type: 'guide',
    bvid: 'BV1iT1xBCEJT',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  },
  {
    id: 6,
    title: '【星穹铁道】不小心抽到昔涟该怎么培养？',
    description: '昔涟养成与培养向视频，适合补充到攻略类展示。',
    thumbnail: '/images/videos/thumbnail6.jpg',
    type: 'guide',
    bvid: 'BV1E51pB3E6F',
    duration: '—',
    views: 0,
    likes: 0,
    uploadDate: '2026-03-08'
  }
];

export const videoCategories = [
  { id: 'all', name: '全部' },
  { id: 'official', name: '官方' },
  { id: 'gameplay', name: '游戏视频' },
  { id: 'guide', name: '攻略' },
  { id: 'story', name: '剧情' }
];
