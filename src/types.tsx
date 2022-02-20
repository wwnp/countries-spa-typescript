export interface ICardProps {
  name:string
  capital:string
  region:string
  flags: {
    svg: string
    png: string
  }
  onClick: () => void
}