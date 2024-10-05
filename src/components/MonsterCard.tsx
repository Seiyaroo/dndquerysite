import React from 'react';
import { Monster } from '@/interfaces/Monster';

interface MonsterCardProps {
    monster: Monster;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ monster }) => {
    return (
        <li className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{monster.name}</h2>
                <p className="text-gray-600">
                    {monster.size} {monster.type}{monster.subtype ? `, ${monster.subtype}` : ''} - {monster.alignment}
                </p>

                <div className="mt-2">
                    <p><strong>Armor Class:</strong> {monster.armor_class}</p>
                    <p><strong>Hit Points:</strong> {monster.hit_points} ({monster.hit_dice})</p>
                    <p><strong>Speed:</strong> {Object.entries(monster.speed).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
                </div>

                <div className="mt-2">
                    <p className="font-semibold">Abilities:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>STR:</strong> {monster.strength}</li>
                        <li><strong>DEX:</strong> {monster.dexterity}</li>
                        <li><strong>CON:</strong> {monster.constitution}</li>
                        <li><strong>INT:</strong> {monster.intelligence}</li>
                        <li><strong>WIS:</strong> {monster.wisdom}</li>
                        <li><strong>CHA:</strong> {monster.charisma}</li>
                    </ul>
                </div>

                {monster.skills && monster.skills.length > 0 && (
                    <div className="mt-2">
                        <p><strong>Skills:</strong> {monster.skills.join(', ')}</p>
                    </div>
                )}

                {monster.damage_vulnerabilities && monster.damage_vulnerabilities.length > 0 && (
                    <div className="mt-2">
                        <p><strong>Damage Vulnerabilities:</strong> {monster.damage_vulnerabilities.join(', ')}</p>
                    </div>
                )}

                {monster.damage_resistances && monster.damage_resistances.length > 0 && (
                    <div className="mt-2">
                        <p><strong>Damage Resistances:</strong> {monster.damage_resistances.join(', ')}</p>
                    </div>
                )}

                {monster.damage_immunities && monster.damage_immunities.length > 0 && (
                    <div className="mt-2">
                        <p><strong>Damage Immunities:</strong> {monster.damage_immunities.join(', ')}</p>
                    </div>
                )}

                {monster.condition_immunities && monster.condition_immunities.length > 0 && (
                    <div className="mt-2">
                        <p><strong>Condition Immunities:</strong> {monster.condition_immunities.join(', ')}</p>
                    </div>
                )}

                <div className="mt-2">
                    <p><strong>Senses:</strong> {Object.entries(monster.senses).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>
                    <p><strong>Languages:</strong> {monster.languages}</p>
                    <p><strong>Challenge Rating:</strong> {monster.challenge_rating}</p>
                </div>

                <div className="mt-4">
                    <p className="font-semibold">Actions:</p>
                    <ul className="list-disc list-inside">
                        {monster.actions.map((action, index) => (
                            <li key={index}>
                                <strong>{action.name}:</strong> {action.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default MonsterCard;