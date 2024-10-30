import React from 'react';
import { useMonsters } from '@/hooks/useMonsters';
import MonsterCard from '@/components/MonsterCard';
import { Monster } from '@/interfaces/Monster';

const MonstersPage: React.FC = () => {
    const { data, isLoading, error } = useMonsters();

    const monsters = data ?? [];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold my-4">Monsters</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">Something went wrong: {error.message}</p>
            ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {monsters.map((monster: Monster) => (
                        <MonsterCard key={monster.index} monster={monster} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MonstersPage;