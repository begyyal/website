export const KihuAct = {
    Agaru: {
        id: "p",
        desc: "上"
    },
    Yoru: {
        id: "q",
        desc: "寄"
    },
    Hiku: {
        id: "r",
        desc: "引"
    },
    Sugu: {
        id: "s",
        desc: "直"
    }
}

export function selectById(id: string) {
    return Object.values(KihuAct).find(p => p.id == id);
}

export interface KihuAct {
    id: string
    desc: string
}