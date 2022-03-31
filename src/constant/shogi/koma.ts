export const Koma = {
    Hu: {
        id: "a",
        index: 7
    },
    Tokin: {
        id: "az",
        index: 15
    },
    Kyousya: {
        id: "b",
        index: 6
    },
    NariKyou: {
        id: "bz",
        index: 14
    },
    Keima: {
        id: "c",
        index: 5
    },
    NariKei: {
        id: "cz",
        index: 13
    },
    Gin: {
        id: "d",
        index: 4
    },
    NariGin: {
        id: "dz",
        index: 12
    },
    Kin: {
        id: "e",
        index: 3
    },
    Kaku: {
        id: "f",
        index: 2
    },
    Uma: {
        id: "fz",
        index: 10
    },
    Hisya: {
        id: "g",
        index: 1
    },
    Ryuu: {
        id: "gz",
        index: 9
    },
    Ou: {
        id: "h",
        index: 0
    }
}

export function selectByIndex(index: number) {
    return Object.values(Koma).find(k => k.index == index);
}

export interface Koma {
    id: string
    index: number
}