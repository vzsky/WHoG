export interface IEvent {
  year: number,
  displayYear?: string,
  title: string,
  content: string,
  type: 'communism' | 'socialism' | 'capitalism' | 'liberalism',
}

export interface ISystemOption {
  type: string,
  system: string,
  bgSrc: string,
}

export interface IReference {
  author: string,
  url: string,
  topic: string,
}