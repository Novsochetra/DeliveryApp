export type IProduct = {
  id: number
  productImage: string
  productName: string
  location: string
  rating: number
  totalRate: number
  isFreeDelivery: boolean
}

export const favoriteDummies: IProduct[] = [
  {
    id: 1,
    productImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.self.com%2Fphotos%2F5862946e788377c57db95a08%2Fmaster%2Fpass%2Fraw-diet-pros-cons.jpg&f=1&nofb=1',
    productName: 'Spagatti',
    rating: 4.5,
    totalRate: 100,
    location: 'phnom penh',
    isFreeDelivery: true,
  },
  {
    id: 2,
    productImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.self.com%2Fphotos%2F5862946e788377c57db95a08%2Fmaster%2Fpass%2Fraw-diet-pros-cons.jpg&f=1&nofb=1',
    productName: 'Spagatti',
    rating: 4.5,
    totalRate: 100,
    location: 'phnom penh',
    isFreeDelivery: false,
  },
  {
    id: 3,
    productImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.self.com%2Fphotos%2F5862946e788377c57db95a08%2Fmaster%2Fpass%2Fraw-diet-pros-cons.jpg&f=1&nofb=1',
    productName: 'Spagatti',
    rating: 4.5,
    totalRate: 100,
    location: 'phnom penh',
    isFreeDelivery: false,
  },
  {
    id: 4,
    productImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.self.com%2Fphotos%2F5862946e788377c57db95a08%2Fmaster%2Fpass%2Fraw-diet-pros-cons.jpg&f=1&nofb=1',
    productName: 'Spagatti',
    rating: 4.5,
    totalRate: 100,
    location: 'phnom penh',
    isFreeDelivery: true,
  },
  {
    id: 5,
    productImage:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.self.com%2Fphotos%2F5862946e788377c57db95a08%2Fmaster%2Fpass%2Fraw-diet-pros-cons.jpg&f=1&nofb=1',
    productName: 'Spagatti',
    rating: 4.5,
    totalRate: 100,
    location: 'phnom penh',
    isFreeDelivery: false,
  },
]
