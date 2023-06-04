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

export interface IProduct {
    name: string
    image: string
    vitamins: {
        name: VitaminName,
        value: number
    }[],
    minerals: {
        name: MineralName,
        value: number
    }[]
}

export interface IWeight extends IProduct {
    name: ProductName,
    weight: number
}