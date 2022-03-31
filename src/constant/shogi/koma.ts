export const Koma = {
    Hu: {
        id: "a",
        index: 7,
        limit: 18,
        desc: "歩"
    },
    Tokin: {
        id: "az",
        index: 15,
        limit: 18,
        desc: "と"
    },
    Kyousya: {
        id: "b",
        index: 6,
        limit: 4,
        desc: "香"
    },
    NariKyou: {
        id: "bz",
        index: 14,
        limit: 4,
        desc: "成香"
    },
    Keima: {
        id: "c",
        index: 5,
        limit: 4,
        desc: "桂"
    },
    NariKei: {
        id: "cz",
        index: 13,
        limit: 4,
        desc: "成桂"
    },
    Gin: {
        id: "d",
        index: 4,
        limit: 4,
        desc: "銀"
    },
    NariGin: {
        id: "dz",
        index: 12,
        limit: 4,
        desc: "成銀"
    },
    Kin: {
        id: "e",
        index: 3,
        limit: 4,
        desc: "金"
    },
    Kaku: {
        id: "f",
        index: 2,
        limit: 2,
        desc: "角"
    },
    Uma: {
        id: "fz",
        index: 10,
        limit: 2,
        desc: "馬"
    },
    Hisya: {
        id: "g",
        index: 1,
        limit: 2,
        desc: "飛"
    },
    Ryuu: {
        id: "gz",
        index: 9,
        limit: 2,
        desc: "龍"
    },
    Ou: {
        id: "h",
        index: 0,
        limit: 2,
        desc: "王"
    }
}

export function selectByIndex(index: number) {
    return Object.values(Koma).find(k => k.index == index);
}

export interface Koma {
    id: string
    index: number
    limit: number
    desc: string
}