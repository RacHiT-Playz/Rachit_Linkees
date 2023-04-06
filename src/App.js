import "./styles.css";

import Avatar from "./original.jpeg";
import Linkees, { CHANNEL_TYPES } from "linkees";

const items = [
  {
    title: "Website",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://techkingrachit.netlify.app" //your personal website or portfolio  link
  },
  {
    title: "GitHub",
    subtitle: "@RachitPlayz  | 🏡 to all my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/RacHiT-Playz" //Github Profile link
  },
  {
    title: "Instagram",
    subtitle: "@wtf.rxchit_ |  Shots of my life 🙂",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/wtf.rxchit_" //instagram profile link
  },
  {
    title: "Twitter",
    subtitle: "@stfu_rachit | 😉",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/stfu_rachit" // twitter profile link
  },
  {
    title: "YouTube",
    subtitle: "stfu_rachit",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://www.youtube.com/channel/UCyojJPz_MVutILrLqNuduTw" //youtube channel link
  },

  {
    title: "Dribbble",
    subtitle: "@rachitxd | shots of dezigns ",
    type: CHANNEL_TYPES.DRIBBLE,
    link: "https://dribbble.com/rachitxd" // Dribbble profile link
  },
  {
    title: "Telegram",
    subtitle: "@stfu_rachit | Chat with me instantly ",
    type: CHANNEL_TYPES.TELEGRAM,
    link: "https://telegram.me/stfu_rachit" //Telegram Pofile
  }
];

export default function App() {
  return <Linkees cardItems={items} name="Rachit.!" headerAvatar={Avatar} />;
}
