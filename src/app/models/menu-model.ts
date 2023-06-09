export interface MenuOption {
  id: string
  title: string
  description: string
  price: number
  image: string
  category: string
  nutritionalInfo: NutritionalInfo
  quantity: number;
}

export interface NutritionalInfo {
  calories: number
  fat: number
  carbs: number
  protein: number
}

export interface Cart {
  items: Array<MenuOption>;
}
