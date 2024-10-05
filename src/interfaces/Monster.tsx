export interface Speed {
    walk?: string;
    fly?: string;
    swim?: string;
    burrow?: string;
}

export interface Senses {
    blindsight?: string;
    darkvision?: string;
    tremorsense?: string;
    truesight?: string;
}

export interface Action {
    name: string;
    desc: string;
}

export interface Monster {
    id: string; // Unique identifier for the monster
    name: string;
    size: string;
    type: string;
    subtype?: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: Speed;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    skills?: string[];
    damage_vulnerabilities?: string[];
    damage_resistances?: string[];
    damage_immunities?: string[];
    condition_immunities?: string[];
    senses: Senses;
    languages: string;
    challenge_rating: number;
    actions: Action[];
}

export interface GetAllMonstersResponse {
    monsters: Monster[];
}