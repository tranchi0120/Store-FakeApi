export interface IUserLogin {
  username: string
  password: string
}

export interface IAuthData {
  token: string
}
export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}
