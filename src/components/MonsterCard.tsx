import React from 'react';
import { Monster } from '@/interfaces/Monster';

interface MonsterCardProps {
    monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    return (
        <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
            <h2 className="card-title text-xl font-semibold">{monster.name}</h2>
            <p className="text-sm text-gray-500">Index: {monster.index}</p>
        </div>
    );
};

export default MonsterCard;