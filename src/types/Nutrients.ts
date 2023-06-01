export enum NutrientType {
    Vitamin = 'vitamin',
    Mineral = 'mineral'
}

export enum VitaminName {
    A = 'a',
    B = 'b'
}

export enum MineralName {
    Calcium = 'calcium',
    Magnesium = 'magnesium',
}

interface Nutrient {
    type: string
    name: string
    value: number
}

export interface Vitamin extends Nutrient {
    name: VitaminName,
    type: NutrientType.Vitamin
}

export interface Mineral extends Nutrient {
    name: MineralName,
    type: NutrientType.Mineral
}