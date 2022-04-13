export const Koma = {
    Hu: {
        id: "a",
        nari: false,
        index: 7,
        limit: 18,
        desc: "歩"
    },
    Tokin: {
        id: "a",
        nari: true,
        index: 15,
        limit: 18,
        desc: "と"
    },
    Kyousya: {
        id: "b",
        nari: false,
        index: 6,
        limit: 4,
        desc: "香"
    },
    NariKyou: {
        id: "b",
        nari: true,
        index: 14,
        limit: 4,
        desc: "成香"
    },
    Keima: {
        id: "c",
        nari: false,
        index: 5,
        limit: 4,
        desc: "桂"
    },
    NariKei: {
        id: "c",
        nari: true,
        index: 13,
        limit: 4,
        desc: "成桂"
    },
    Gin: {
        id: "d",
        nari: false,
        index: 4,
        limit: 4,
        desc: "銀"
    },
    NariGin: {
        id: "d",
        nari: true,
        index: 12,
        limit: 4,
        desc: "成銀"
    },
    Kin: {
        id: "e",
        nari: false,
        index: 3,
        limit: 4,
        desc: "金"
    },
    Kaku: {
        id: "f",
        nari: false,
        index: 2,
        limit: 2,
        desc: "角"
    },
    Uma: {
        id: "f",
        nari: true,
        index: 10,
        limit: 2,
        desc: "馬"
    },
    Hisya: {
        id: "g",
        nari: false,
        index: 1,
        limit: 2,
        desc: "飛"
    },
    Ryuu: {
        id: "g",
        nari: true,
        index: 9,
        limit: 2,
        desc: "龍"
    },
    Ou: {
        id: "h",
        nari: false,
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
    nari: boolean
    index: number
    limit: number
    desc: string
}