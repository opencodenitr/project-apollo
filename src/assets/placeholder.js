import Team from './img/home/team.svg';
import Work from './img/home/github.svg';
import OpenSource from './img/home/open_source.svg';
import WebDev from './img/home/web_dev.svg';
import AppDev from './img/home/app_dev.svg';
import Competitive from './img/home/competitive.svg';
import Hackathon from './img/home/hackathon.svg';
import Ai from './img/home/ai.svg';


export const homepage = {
  about: {
    data: [
      {
        title: 'Who are we?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        direction: 'row',
        img: Team,
      },
      {
        title: 'What we do?',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        direction: 'row-reverse',
        img: Work,
      },
    ],
  },
  focus: {
    data: [
      {
        img: OpenSource,
        caption: "Open Source",
        background: "linear-gradient(to bottom right, #0a8270, #7cff6b)"
      },
      {
        img: WebDev,
        caption: "Web Development",
        background: "linear-gradient(to bottom right, #5b146f, #ff009c)"
      },
      {
        img: AppDev,
        caption: "App Development",
        background: "linear-gradient(to bottom right, #72b2e4, #92e1e2)"
      },
      {
        img: Ai,
        caption: "Machine Learning and Artificial Intelligence",
        background: "linear-gradient(to bottom right, #fd8451, #ffbd6f)"
      },
      {
        img: Hackathon,
        caption: "Hackathon",
        background: "linear-gradient(to bottom right, #a3c9e2, #9618f7)"
      },
      {
        img: Competitive,
        caption: "Competitive Programming",
        background: "linear-gradient(to bottom right, #efeb77, #f6af04)"
      },
    ],
  },
};
