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
    Zink = 'Zink'
}

export interface INutrient {
    type: string
    name: string
    dailyRate: number
}

export interface IVitamin extends INutrient {
    name: VitaminName,
    type: NutrientType.Vitamin
}

export interface IMineral extends INutrient {
    name: MineralName,
    type: NutrientType.Mineral
}
