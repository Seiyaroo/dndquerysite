// import React from 'react';
// import { useSpells } from '@/hooks/useSpells';
// import SpellCard from '@/components/SpellCard';
// // import { Spell } from '@/interfaces/Spell';
//
// const SpellsPage: React.FC = () => {
//     const { data, isLoading, error } = useSpells();
//
//     const spells = data ?? [];
//
//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold my-4">Spells</h1>
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : error ? (
//                 <p className="text-red-500">Something went wrong: {error.message}</p>
//             ) : (
//                 <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {spells.map((spell: Spell) => (
//                         <SpellCard key={spell.id} spell={spell} />
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };
//
// export default SpellsPage;