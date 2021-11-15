import member from './member';
import painter from './painter';

const memberMap = {
  '提格': 0,
  '托格': 1,
  '燃渡': 2,
  '岳白': 3,
  '起司': 4,
  '萊烈': 5,
};

const painterMap = {
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
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['Mo yu']],
    image: 'https://i.imgur.com/0TkjUYH.jpg'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['牛肉糰子']],
    image: 'https://i.imgur.com/YiZpNUD.png'
  },
  {
    member: [member[memberMap['燃渡']]],
    painter: painter[painterMap['希雅思']],
    image: 'https://i.imgur.com/ePCAKev.jpg'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['妞龍']],
    image: 'https://i.imgur.com/GeYCOQE.jpg'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['妞龍']],
    image: 'https://i.imgur.com/NGdyiLa.jpg'
  },
  {
    member: [member[memberMap['燃渡']]],
    painter: painter[painterMap['妞龍']],
    image: 'https://i.imgur.com/6z4J4RD.jpg'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']],
      member[memberMap['岳白']],
      member[memberMap['萊烈']]
    ],
    painter: painter[painterMap['粽子']],
    image: 'https://i.imgur.com/OruZmyt.png'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['希雅思']],
    image: 'https://i.imgur.com/PfB7hQ8.png'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['帝獵']],
    image: 'https://i.imgur.com/luLqbWN.png'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['帝獵']],
    image: 'https://i.imgur.com/FL1IjOK.png'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['Saki']],
    image: 'https://i.imgur.com/Xc0RwUZ.png'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']],
      member[memberMap['起司']]
    ],
    painter: painter[painterMap['粽子']],
    image: 'https://i.imgur.com/FXgonRh.png'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['雷樂']],
    image: 'https://i.imgur.com/feqCaGs.jpg'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['琴春']],
    image: 'https://i.imgur.com/ZT2YbUO.png'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['久一杉']],
    image: 'https://i.imgur.com/BS7z4aZ.gif'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['久一杉']],
    image: 'https://i.imgur.com/zAATRpO.gif'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['總裁']],
    image: 'https://i.imgur.com/ugCxOwe.png'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['琴春']],
    image: 'https://i.imgur.com/wxJ0vki.png'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['希雅思']],
    image: 'https://i.imgur.com/lZJiu7T.jpg'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['希雅思']],
    image: 'https://i.imgur.com/wiT5rv9.jpg'
  },
  {
    member: [member[memberMap['托格']]],
    painter: painter[painterMap['琴春']],
    image: 'https://i.imgur.com/sgSGrPR.png'
  },
  {
    member: [member[memberMap['提格']]],
    painter: painter[painterMap['琴春']],
    image: 'https://i.imgur.com/fI4u3V3.png'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['Mo yu']],
    image: 'https://i.imgur.com/ghC5r4y.jpg'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['Mo yu']],
    image: 'https://i.imgur.com/17qAHSj.jpg'
  },
  {
    member: [
      member[memberMap['提格']],
      member[memberMap['托格']]
    ],
    painter: painter[painterMap['Mo yu']],
    image: 'https://i.imgur.com/6ydI6QW.jpg'
  }
];
