// export interface Speed {
//     walk?: string;
//     fly?: string;
//     swim?: string;
//     burrow?: string;
// }
//
// export interface Senses {
//     blindsight?: string;
//     darkvision?: string;
//     tremorsense?: string;
//     truesight?: string;
// }
//
// export interface Action {
//     name: string;
//     desc: string;
// }

export interface ArmorClass {
    value: [number];
}

export interface Monster {
    index: string; // Unique identifier for the monster
    name: string;
    challenge_rating: number;
    image: string;
    armor_class?: ArmorClass | null;
    hit_points: number;
}

export interface GetAllMonstersResponse {
    monsters: Monster[];
}