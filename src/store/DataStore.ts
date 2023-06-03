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
            [MineralName.Calcium]: createMineral(MineralName.Calcium, 0.05),
            [MineralName.Ferrum]: createMineral(MineralName.Ferrum, 1.2)
        } as Record<MineralName, IMineral>,
        [NutrientType.Vitamin]: {
            [VitaminName.A]: createVitamin(VitaminName.A, 0.1),
            [VitaminName.B1]: createVitamin(VitaminName.B1, 0.2)
        } as Record<VitaminName, IVitamin>,
    }

    const products: Record<ProductName, IProduct> = {
        [ProductName.Banana]: {
            name: ProductName.Banana,
            image: "banana",
            vitamins: [
                {
                    name: VitaminName.A,
                    value: 50
                }
            ],
            minerals: [
                {
                    name: MineralName.Calcium,
                    value: 60
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

