export interface ICardProps {
  name: string
  capital: string
  region: string
  population: string
  flags: {
    svg: string
    png: string
  }
  onClick: () => void
  children: any
}