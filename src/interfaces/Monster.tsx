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

export interface Monster {
    index: string; // Unique identifier for the monster
    name: string;
}

export interface GetAllMonstersResponse {
    monsters: Monster[];
}