export const Player = {
    Sente: {
        id: "x",
        desc1: "sente",
        desc2: "εζ"
    },
    Gote: {
        id: "y",
        desc1: "gote",
        desc2: "εΎζ"
    }
}

export function selectById(id: string) {
    return Object.values(Player).find(p => p.id == id);
}

export interface Player {
    id: string
    desc1: string
    desc2: string
}