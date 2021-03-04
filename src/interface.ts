export interface IEvent {
  year: number,
  displayYear?: string,
  title: string,
  content: string,
  type: string,
}

export interface ISystemOption {
  type: string,
  system: string,
  bgSrc: string,
  upperBandColor: string,
}