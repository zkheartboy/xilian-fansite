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
    title: "昔涟角色演示 - 来自星尘官方",
    description: "昔涟角色PV《再度和你》官方完整版，展现角色魅力与剧情故事",
    thumbnail: "/images/videos/thumbnail1.jpg",
    type: "official",
    bvid: "BV1wxxx111",
    duration: "2:30",
    views: 500000,
    likes: 25000,
    uploadDate: "2026-02-15"
  },
  {
    id: 2,
    title: "昔涟技能演示 - 全技能展示与解析",
    description: "详细解析昔涟所有技能机制与实战表现",
    thumbnail: "/images/videos/thumbnail2.jpg",
    type: "gameplay",
    bvid: "BV1wxxx222",
    duration: "8:45",
    views: 300000,
    likes: 15000,
    uploadDate: "2026-02-20"
  },
  {
    id: 3,
    title: "昔涟毕业配队 - 最强配队与遗器推荐",
    description: "推荐最佳配队方案与遗器搭配，助你快速培养昔涟",
    thumbnail: "/images/videos/thumbnail3.jpg",
    type: "guide",
    bvid: "BV1wxxx333",
    duration: "12:30",
    views: 200000,
    likes: 10000,
    uploadDate: "2026-02-25"
  },
  {
    id: 4,
    title: "来自星尘 4.0 预告 - 新版本内容抢先看",
    description: "4.0版本预告PV，全新剧情与角色抢先曝光",
    thumbnail: "/images/videos/thumbnail4.jpg",
    type: "official",
    bvid: "BV1wxxx444",
    duration: "1:45",
    views: 800000,
    likes: 40000,
    uploadDate: "2026-02-10"
  },
  {
    id: 5,
    title: "阿尔林铎探索指南 - 新地图完全攻略",
    description: "新地图探索要点与隐藏要素全解析",
    thumbnail: "/images/videos/thumbnail5.jpg",
    type: "guide",
    bvid: "BV1wxxx555",
    duration: "15:20",
    views: 150000,
    likes: 8000,
    uploadDate: "2026-02-05"
  },
  {
    id: 6,
    title: "剧情回顾：昔涟篇 - 昔涟主线剧情合集",
    description: "昔涟主线剧情完整回顾，重温感动瞬间",
    thumbnail: "/images/videos/thumbnail6.jpg",
    type: "story",
    bvid: "BV1wxxx666",
    duration: "20:00",
    views: 100000,
    likes: 5000,
    uploadDate: "2026-02-28"
  }
];

export const videoCategories = [
  { id: 'all', name: '全部' },
  { id: 'official', name: '官方' },
  { id: 'gameplay', name: '游戏视频' },
  { id: 'guide', name: '攻略' },
  { id: 'story', name: '剧情' }
];
