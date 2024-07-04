import iron_man from '../assets/iron-man.jpg';
import spider_man from '../assets/spider-man.jpg';
import thor from '../assets/thor.jpg';
import hulk from '../assets/hulk.jpg';
import Avengers_Disassembled from '../assets/Avengers Disassembled.jpg';
import Amazing_Spider_Man from '../assets/The Amazing Spider Man.jpg';
import Thor_Ragnarok from '../assets/Thor Ragnarok.jpg';
import Iron_Man_Thor from '../assets/Thor Iron Man.jpg';

export const characters = [
  {
    id: 1,
    name: 'Iron Man',
    description: 'Тони Старк, миллиардер, гениальный изобретатель и плейбой. После того, как он был захвачен и ранен, он создал высокотехнологичный костюм для поддержания своей жизни и спасения от похитителей. С тех пор он совершенствовал свой костюм и стал известен как Железный человек, защищающий мир от угроз.',
    image: iron_man,
    comics: [
      "Invincible Iron Man (2008)",
      "Iron Man: Extremis (2005)",
      "Iron Man: Demon in a Bottle (1979)",
      "Iron Man: The Five Nightmares (2008)"
    ]
  },
  {
    id: 2,
    name: 'Spider Man',
    description: 'Питер Паркер, подросток, получивший способности паука после укуса радиоактивного паука. Он использует свои новые способности для борьбы с преступностью в Нью-Йорке, часто сталкиваясь с моральными дилеммами и личными потерями, стараясь сбалансировать свою жизнь как герой и обычный подросток.',
    image: spider_man,
    comics: [
      "The Amazing Spider-Man (1963)",
      "Ultimate Spider-Man (2000)",
      "Spider-Man: Blue (2002)",
      "The Superior Spider-Man (2013)"
    ]
  },
  {
    id: 3,
    name: 'Thor',
    description: 'Тор Одинсон, бог грома из Асгарда, вооружен магическим молотом Мьёльниром, который дает ему силу управлять молнией и летать. Изгнанный на Землю своим отцом Одином для научения смирению, Тор становится защитником как Асгарда, так и Земли.',
    image: thor,
    comics: [
      "The Mighty Thor (1966)",
      "Thor: God of Thunder (2012)",
      "Thor: The Dark World Prelude (2013)",
      "Thor: Ragnarok (2017)"
    ]
  },
  {
    id: 4,
    name: 'Hulk',
    description: 'Брюс Бэннер, гениальный ученый, который при воздействии гамма-радиации превращается в Халка, огромного зелёного монстра с невероятной силой. Халк является результатом ярости Бэннера и часто борется с тем, чтобы контролировать свою трансформацию.',
    image: hulk,
    comics: [
      "The Incredible Hulk (1962)",
      "Planet Hulk (2006)",
      "World War Hulk (2007)",
      "Hulk: Future Imperfect (1992)"
    ]
  }
];

export const comics = [
  {
    id: 1,
    name: "Avengers: Disassembled",
    image: Avengers_Disassembled,
    characters_id : [1, 2, 3, 4]
  },
  {
    id: 2,
    name: "The Amazing Spider-Man",
    image: Amazing_Spider_Man,
    characters_id : [1, 2, 3, 4]
  },
  {
    id: 3,
    name: "Thor: Ragnarok",
    image:Thor_Ragnarok,
    characters_id : [3, 4]
  },
  {
    id: 4,
    name: "Iron Man/Thor",
    image: Iron_Man_Thor,
    characters_id : [1, 3]
  },  
]