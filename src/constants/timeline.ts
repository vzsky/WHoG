import { IEvent } from '../interface'

export const colors = {
  communism: 'red.100',
  liberalism: 'blue.100',
  capitalism: 'green.100',
  socialism: 'yellow.100',

}

export const events : IEvent[] = [
  {
    type: 'communism',
    year: 1516,
    title: 'Utopia, Thomas More',
    content: 'A book that visualize a utopia as a land that has no classes and people share common property, which is also known as communistic thought.',
  },
  {
    type: 'communism',
    year: 1917,
    title: 'Russian Revolution',
    content: 'Lenin rose to power and rule the USSR, the first communist party to reach this level.'
  },
  {
    type: 'communism',
    year: 1948,
    title: 'Devision of Korea',
    content: 'Korea split upon the 38th parallel into North Korea and South Korea. North Korea, by Kim Il Sung, is regulated under the communism idea.'
  },
  {
    type: 'communism',
    year: 1949,
    title: "People's Republic of China",
    content: "Mao Zedong founded People's Republic of China and became the leader of the communist state."
  },
  {
    type: 'communism',
    year: 1991,
    title: 'Russian Dissolution',
    content: 'Russian Communist party lose their power.'
  },
  {
    type: 'capitalism',
    year: 1700,
    displayYear: '1700s',
    title: 'Industrial Revolution',
    content: 'Creation of steam engine and automatic systems that allows faster production.',
  },
  {
    type: ['capitalism', 'liberalism'],
    year: 1759,
    title: 'Invisible hand',
    content: 'The idea of invisible hand, and free market was proposed by the economist Adam Smith in his book, The Theory of Moral Sentiments.',
  },
  
]

