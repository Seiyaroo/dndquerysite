// import React from 'react';
// import { Spell } from '@/interfaces/Spell';
//
// interface SpellCardProps {
//     spell: Spell;
// }
//
// const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {
//     return (
//         <li className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
//             <h2 className="text-2xl font-bold">{spell.name}</h2>
//             <p className="text-gray-600">Level {spell.level} - {spell.school.name}</p>
//             <p className="mt-2"><strong>Casting Time:</strong> {spell.casting_time}</p>
//             <p><strong>Range:</strong> {spell.range}</p>
//             <p><strong>Components:</strong> {spell.components.join(', ')}</p>
//             <p><strong>Duration:</strong> {spell.duration}</p>
//             <p className="mt-2">{spell.description}</p>
//         </li>
//     );
// };
//
// export default SpellCard;