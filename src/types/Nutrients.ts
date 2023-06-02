export enum NutrientType {
    Vitamin = 'vitamin',
    Mineral = 'mineral'
}

export enum VitaminName {
    A = 'A',
    B1 = 'B1',
    Choline = 'Choline',
    C = 'C',
    D = 'D',
    E = 'E',
    K = 'K'
}

export enum MineralName {
    Calcium = 'Calcium',
    Magnesium = 'Magnesium',
    Ferrum = 'Ferrum',
    Phosphorus = 'Phosphorus',
    Zink = 'Zink',

}

interface Nutrient {
    type: string
    name: string
    value: number
    percent: number
}

export interface Vitamin extends Nutrient {
    name: VitaminName,
    type: NutrientType.Vitamin
}

export interface Mineral extends Nutrient {
    name: MineralName,
    type: NutrientType.Mineral
}