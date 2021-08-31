import memberData from './member-data.js';
import painterData from './painter-data.js';

const memberList = {
  '提格': 0,
  '托格': 1,
  '燃渡': 2,
  '岳白': 3,
  '起司': 4,
  '萊烈': 5,
};

const painterList = {
  'Mo yu': 0,
  '希雅思': 1,
  '雷樂': 2,
  '粽子': 3,
  '帝獵': 4,
  '牛肉糰子': 5,
  '琴春': 6,
  '久一杉': 7,
  '總裁': 8,
  'Saki': 9,
  '妞龍': 10
};

export default [
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['Mo yu']],
    image: 'https://i.imgur.com/0TkjUYH.jpg'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['牛肉糰子']],
    image: 'https://i.imgur.com/YiZpNUD.png'
  },
  {
    member: [memberData[memberList['燃渡']]],
    painter: painterData[painterList['希雅思']],
    image: 'https://i.imgur.com/ePCAKev.jpg'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['妞龍']],
    image: 'https://i.imgur.com/GeYCOQE.jpg'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['妞龍']],
    image: 'https://i.imgur.com/NGdyiLa.jpg'
  },
  {
    member: [memberData[memberList['燃渡']]],
    painter: painterData[painterList['妞龍']],
    image: 'https://i.imgur.com/6z4J4RD.jpg'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']],
      memberData[memberList['岳白']],
      memberData[memberList['萊烈']]
    ],
    painter: painterData[painterList['粽子']],
    image: 'https://i.imgur.com/OruZmyt.png'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['希雅思']],
    image: 'https://i.imgur.com/PfB7hQ8.png'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['帝獵']],
    image: 'https://i.imgur.com/luLqbWN.png'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['帝獵']],
    image: 'https://i.imgur.com/FL1IjOK.png'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['Saki']],
    image: 'https://i.imgur.com/Xc0RwUZ.png'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']],
      memberData[memberList['起司']]
    ],
    painter: painterData[painterList['粽子']],
    image: 'https://i.imgur.com/FXgonRh.png'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['雷樂']],
    image: 'https://i.imgur.com/feqCaGs.jpg'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['琴春']],
    image: 'https://i.imgur.com/ZT2YbUO.png'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['久一杉']],
    image: 'https://i.imgur.com/BS7z4aZ.gif'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['久一杉']],
    image: 'https://i.imgur.com/zAATRpO.gif'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['總裁']],
    image: 'https://i.imgur.com/ugCxOwe.png'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['琴春']],
    image: 'https://i.imgur.com/wxJ0vki.png'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['希雅思']],
    image: 'https://i.imgur.com/lZJiu7T.jpg'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['希雅思']],
    image: 'https://i.imgur.com/wiT5rv9.jpg'
  },
  {
    member: [memberData[memberList['托格']]],
    painter: painterData[painterList['琴春']],
    image: 'https://i.imgur.com/sgSGrPR.png'
  },
  {
    member: [memberData[memberList['提格']]],
    painter: painterData[painterList['琴春']],
    image: 'https://i.imgur.com/fI4u3V3.png'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['Mo yu']],
    image: 'https://i.imgur.com/ghC5r4y.jpg'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['Mo yu']],
    image: 'https://i.imgur.com/17qAHSj.jpg'
  },
  {
    member: [
      memberData[memberList['提格']],
      memberData[memberList['托格']]
    ],
    painter: painterData[painterList['Mo yu']],
    image: 'https://i.imgur.com/6ydI6QW.jpg'
  }
];
