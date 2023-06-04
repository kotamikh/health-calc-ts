import { defineStore } from "pinia";
import { IMineral, INutrient, IVitamin, MineralName, NutrientType, VitaminName, INutrientsData } from "@/types/Nutrients";
import { IProduct, ProductName } from "@/types/Products";

export const useDataStore = defineStore('dataStore', () => {
    const createNutrient = (type: NutrientType, name: string, dailyRate: number): INutrient => {
        return { type, name, dailyRate }
    }
    const createMineral = (name: MineralName, rate: number): IMineral => {
        return createNutrient(NutrientType.Mineral, name, rate) as IMineral
    }

    const createVitamin = (name: VitaminName, rate: number): IVitamin => {
        return createNutrient(NutrientType.Vitamin, name, rate) as IVitamin
    }

    const dailyRateData: INutrientsData = {
        [NutrientType.Mineral]: {
            [MineralName.Calcium]: createMineral(MineralName.Calcium, 1000),
            [MineralName.Magnesium]: createMineral(MineralName.Magnesium, 400),
            [MineralName.Ferrum]: createMineral(MineralName.Ferrum, 18),
            [MineralName.Phosphorus]: createMineral(MineralName.Phosphorus, 800),
            [MineralName.Zink]: createMineral(MineralName.Zink, 12)
        } as Record<MineralName, IMineral>,
        [NutrientType.Vitamin]: {
            [VitaminName.A]: createVitamin(VitaminName.A, 0.9),
            [VitaminName.B1]: createVitamin(VitaminName.B1, 0.04),
            [VitaminName.Choline]: createVitamin(VitaminName.Choline, 500),
            [VitaminName.C]: createVitamin(VitaminName.C, 90),
            [VitaminName.D]: createVitamin(VitaminName.D, 0.01),
            [VitaminName.E]: createVitamin(VitaminName.E, 15),
            [VitaminName.K]: createVitamin(VitaminName.K, 0.12)
        } as Record<VitaminName, IVitamin>,
    }

    const products: Record<ProductName, IProduct> = {
        [ProductName.Banana]: {
            name: ProductName.Banana,
            image: "banana",
            vitamins: [
                {
                    name: VitaminName.A,
                    value: 0.02
                },
                {
                    name: VitaminName.B1,
                    value: 0.04
                },
                {
                    name: VitaminName.Choline,
                    value: 9.8
                },
                {
                    name: VitaminName.C,
                    value: 10
                },
                {
                    name: VitaminName.D,
                    value: 0
                },
                {
                    name: VitaminName.E,
                    value: 0.4
                },
                {
                    name: VitaminName.K,
                    value: 0.0005
                },
            ],
            minerals: [
                {
                    name: MineralName.Calcium,
                    value: 8
                },
                {
                    name: MineralName.Magnesium,
                    value: 42
                },
                {
                    name: MineralName.Ferrum,
                    value: 0.6
                },
                {
                    name: MineralName.Phosphorus,
                    value: 28
                },
                {
                    name: MineralName.Zink,
                    value: 0.15
                }
            ]
        },
        [ProductName.Tangerine]: {
            name: ProductName.Tangerine,
            image: "tangerine",
            vitamins: [
                {
                    name: VitaminName.A,
                    value: 0.01
                },
                {
                    name: VitaminName.B1,
                    value: 0.06
                },
                {
                    name: VitaminName.Choline,
                    value: 10.2
                },
                {
                    name: VitaminName.C,
                    value: 38
                },
                {
                    name: VitaminName.D,
                    value: 0
                },
                {
                    name: VitaminName.E,
                    value: 0.2
                },
                {
                    name: VitaminName.K,
                    value: 0
                },
            ],
            minerals: [
                {
                    name: MineralName.Calcium,
                    value: 35
                },
                {
                    name: MineralName.Magnesium,
                    value: 11
                },
                {
                    name: MineralName.Ferrum,
                    value: 0.1
                },
                {
                    name: MineralName.Phosphorus,
                    value: 17
                },
                {
                    name: MineralName.Zink,
                    value: 0.07
                }
            ]
        },
        [ProductName.Kiwi]: {
            name: ProductName.Kiwi,
            image: "kiwi",
            vitamins: [
                {
                    name: VitaminName.A,
                    value: 0.015
                },
                {
                    name: VitaminName.B1,
                    value: 0.02
                },
                {
                    name: VitaminName.Choline,
                    value: 7.8
                },
                {
                    name: VitaminName.C,
                    value: 180
                },
                {
                    name: VitaminName.D,
                    value: 0
                },
                {
                    name: VitaminName.E,
                    value: 0.3
                },
                {
                    name: VitaminName.K,
                    value: 0.04
                },
            ],
            minerals: [
                {
                    name: MineralName.Calcium,
                    value: 40
                },
                {
                    name: MineralName.Magnesium,
                    value: 25
                },
                {
                    name: MineralName.Ferrum,
                    value: 0.8
                },
                {
                    name: MineralName.Phosphorus,
                    value: 34
                },
                {
                    name: MineralName.Zink,
                    value: 0.14
                }
            ]
        }
    } as Record<ProductName, IProduct>

    return {
        createNutrient,
        createMineral,
        createVitamin,
        dailyRateData,
        products
    }
})

