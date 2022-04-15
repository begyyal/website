export const KihuRel = {
    Migi: {
        id: "m",
        desc: "右"
    },
    Hidari: {
        id: "n",
        desc: "左"
    }
}

export function selectById(id: string) {
    return Object.values(KihuRel).find(p => p.id == id);
}

export interface KihuRel {
    id: string
    desc: string
}