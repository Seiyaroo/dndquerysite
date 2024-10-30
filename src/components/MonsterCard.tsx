import React from 'react';
import { Monster } from '@/interfaces/Monster';
import Image from "next/image";

interface MonsterCardProps {
    monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    return (
        <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
            <h2 className="card-title text-xl font-semibold">{monster.name}</h2>
            <p className="text-sm text-gray-500">Index: {monster.index}</p>
            <p className="text-sm text-gray-500">Challenge Rating: {monster.challenge_rating}</p>
            { monster.image === null
                ? <p>No image Available</p>
                : <Image
                    src={"https://dnd5eapi.co" + monster.image}
                    alt={monster.name}
                    width={400}
                    height={400}
                />
            }
            <p className="text-sm text-gray-500"> Armor Rating: {monster.armor_class.value} </p>
        </div>
    );
};

export default MonsterCard;