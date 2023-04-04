export interface MenuModel {
  menu: MenuOption[]
}

export interface MenuOption {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: string
  nutritionalInfo: NutritionalInfo
}

export interface NutritionalInfo {
  calories: number
  fat: number
  carbs: number
  protein: number
}
