import { MineralName, VitaminName } from "@/types/Nutrients";

export enum ProductName {
    Banana = 'Banana',
    Tangerine = 'Tangerine',
    Kiwi = 'Kiwi',
    Pear = 'Pear',
    Strawberry = 'Strawberry',
    Broccoli = 'Broccoli',
    Carrot = 'Carrot',
    Cob = 'Cob'
}

export interface IProductMineralData {
    name: MineralName,
    value: number
}

export interface IProductVitaminData {
    name: VitaminName,
    value: number
}

export interface IProduct {
    name: string
    image: string
    vitamins: IProductVitaminData[],
    minerals: IProductMineralData[]
}