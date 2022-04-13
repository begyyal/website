export const KihuOpt = {
    Nari: {
        id: "t",
        desc: "成"
    },
    Narazu: {
        id: "u",
        desc: "不成"
    },
    Utu: {
        id: "v",
        desc: "打"
    }
}

export function selectById(id: string) {
    return Object.values(KihuOpt).find(p => p.id == id);
}

export interface KihuOpt {
    id: string
    desc: string
}