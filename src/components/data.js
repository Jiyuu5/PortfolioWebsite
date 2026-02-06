export const LANGUAGE_DATA = {
  de: {
    title: "Softwareentwickler",
    description:
      "Herzlich willkommen auf meinem Profil! Ich bin Fachinformatiker für Anwendungsentwicklung und um Erfahrung zu sammeln, entwickle ich Projekte im Front-End-Bereich und Mobile-Apps für Android. In meiner Freizeit lerne ich Japanisch, um der Kultur Japans näher zu kommen.",
    credit: [
      "Das Design dieser Website orientiert sich an der Portfolio-Site von",
      ". Vielen Dank für die beeindruckende Vorlage!",
    ],
  },
  en: {
    title: "Software Developer",
    description:
      "Welcome to my profile! I'm an IT specialist for application development and to gain experience I'm developing projects in the front-end area and mobile apps for Android. In my spare time I'm learning Japanese to get closer to the Japanese culture.",
    credit: [
      "The design of this website is based on the portfolio site of",
      ". Many thanks for the impressive template!",
    ],
  },
  jp: {
    title: "アプリケーション開発のITスペシャリスト",
    description:
      "私のプロフィールへようこそ！私はアプリケーション開発のITスペシャリストで、経験を積むためにフロントエンド分野やAndroid向けモバイルアプリの開発に携わっています。余暇には、日本の文化をより深く理解するために日本語を学んでいます。",
    credit: [
      "このウェブサイトのデザインは、",
      "のポートフォリオサイトに基づいています。印象的なテンプレートに感謝します！",
    ],
  },
};

export const PROJECTS = [
  {
    title: "The Dice Guy",
    description: {
      de: "Eine Würfel-App für Rollen- und Table-Top-Spieler. Entwickelt für Android Smartphones mit Android Studio. Befindet sich noch in der geschlossenen Alpha.",
      en: "A dice app for role-playing and table-top players. Developed for Android smartphones with Android Studio. Still in closed alpha.",
      jp: "ロールプレイングやテーブルトッププレイヤー向けのダイスアプリ。Android StudioでAndroidスマートフォン向けに開発。クローズドアルファ版。",
    },
    tags: ["Android", "Kotlin", "Java", "Jetpack Compose"],
    imgID: "04",
    url: "https://github.com/Jiyuu5/TheDiceGuyJC",
  },
  {
    title: "Space Defence",
    description: {
      de: "Ein Space Invaders Clone programmiert in C# in der Unity 3D Game Engine. Alpha Version.",
      en: "A Space Invaders clone programmed in C# in the Unity 3D game engine. Alpha version.",
      jp: "Unity 3DゲームエンジンでC#でプログラムされたスペースインベーダーのクローン。アルファ版。",
    },

    tags: ["C#", "Unity3D"],
    imgID: "03",
    url: "https://play.unity.com/en/games/dc5378bb-50a5-4224-95f6-23bb1d5c15c4/build",
  },
  {
    title: "ericgrebe.de",
    description: {
      de: "Mein erstes eigenes Projekt mit React und Vite. Angelehnt an das Design der Entwicklerin Brittany Chiang.",
      en: "My first own project with React and Vite. Based on the design of the developer Brittany Chiang.",
      jp: "ReactとViteを使った初めての自分のプロジェクト。開発者Brittany Chiangのデザインに基づいています。",
    },
    tags: ["React", "Tailwind"],
    imgID: "02",
    url: "https://github.com/Jiyuu5/PortfolioWebsite",
  },
  {
    title: "Lesewelt Oker",
    description: {
      de: "Einfache Website im Onepage-Design, die ich zu 99% mit HTML und CSS während meiner ehrenamtlichen Tätigkeit für die Bücherei Lesewelt Oker realisiert habe.",
      en: "Simple website in one-page design, which I realized 99% with HTML and CSS during my voluntary work for the library Lesewelt Oker.",
      jp: "図書館Lesewelt Okerでのボランティア活動中に、HTMLとCSSで99％実現した1ページデザインのシンプルなウェブサイト。",
    },
    tags: ["HTML", "CSS", "Javascript"],
    imgID: "01",
    url: "https://leseweltoker.de/",
  },
];
