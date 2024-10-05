import '../styles/globals.css'
import React, { useState } from 'react';
import MonsterCard from '../components/MonsterCard';
import {Monster} from "@/interfaces/Monster";


const App: React.FC = () => {
    const [monster, setMonster] = useState<Monster | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (searchTerm: string) => {
        setLoading(true);
        setError(null);
        setMonster(null);

        // You can choose to search for spells, monsters, or both based on your needs.
        // Here, we'll implement searching for monsters only.
        //     try {
        //         const monsterData = await fetchMonster(searchTerm);
        //         setMonster(monsterData);
        //     } catch (err) {
        //         setError('Monster not found or an error occurred.');
        //     } finally {
        //         setLoading(false);
        //     }
        // };

//     return (
//         <div className="App">
//             <h1>D&D 5e Encyclopedia</h1>
//             <SearchBar onSearch={handleSearch} />
//             {loading && <p>Loading...</p>}
//             {error && <p className="error">{error}</p>}
//             {monster && (
//                 <ul className="card-list">
//                     <MonsterCard monster={monster} />
//                 </ul>
//             )}
//             {/* add SpellCard here similarly */}
// //         </div>
//     );
    }
};

export default App;