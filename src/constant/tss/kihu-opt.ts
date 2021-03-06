export const KihuOpt = {
    Nari: {
        id: "t",
        desc: "ζ"
    },
    Narazu: {
        id: "u",
        desc: "δΈζ"
    },
    Utu: {
        id: "v",
        desc: "ζ"
    }
}

export function selectById(id: string) {
    return Object.values(KihuOpt).find(p => p.id == id);
}

export interface KihuOpt {
    id: string
    desc: string
}