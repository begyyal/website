export const Koma = {
    Hu: {
        key: "a",
        nari: false,
        index: 7,
        limit: 18,
        desc: "歩"
    },
    Tokin: {
        key: "a",
        nari: true,
        index: 15,
        limit: 18,
        desc: "と"
    },
    Kyousya: {
        key: "b",
        nari: false,
        index: 6,
        limit: 4,
        desc: "香"
    },
    NariKyou: {
        key: "b",
        nari: true,
        index: 14,
        limit: 4,
        desc: "成香"
    },
    Keima: {
        key: "c",
        nari: false,
        index: 5,
        limit: 4,
        desc: "桂"
    },
    NariKei: {
        key: "c",
        nari: true,
        index: 13,
        limit: 4,
        desc: "成桂"
    },
    Gin: {
        key: "d",
        nari: false,
        index: 4,
        limit: 4,
        desc: "銀"
    },
    NariGin: {
        key: "d",
        nari: true,
        index: 12,
        limit: 4,
        desc: "成銀"
    },
    Kin: {
        key: "e",
        nari: false,
        index: 3,
        limit: 4,
        desc: "金"
    },
    Kaku: {
        key: "f",
        nari: false,
        index: 2,
        limit: 2,
        desc: "角"
    },
    Uma: {
        key: "f",
        nari: true,
        index: 10,
        limit: 2,
        desc: "馬"
    },
    Hisya: {
        key: "g",
        nari: false,
        index: 1,
        limit: 2,
        desc: "飛"
    },
    Ryuu: {
        key: "g",
        nari: true,
        index: 9,
        limit: 2,
        desc: "龍"
    },
    Ou: {
        key: "h",
        nari: false,
        index: 0,
        limit: 2,
        desc: "王"
    }
}

export function selectByIndex(index: number) {
    return Object.values(Koma).find(k => k.index == index);
}

export function select(key: string, nari: boolean) {
    return Object.values(Koma).find(k => k.key == key && k.nari == nari);
}

export interface Koma {
    key: string
    nari: boolean
    index: number
    limit: number
    desc: string
}