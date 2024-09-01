import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white font-bold text-xl">
                    D&D Resource
                </div>
                <div className="space-x-4">
                    <Link href="../pages/equipment.tsx">
                        <a className="text-gray-300 hover:text-white">Equipment</a>
                    </Link>
                    <Link href="../pages/monsters.tsx">
                        <a className="text-gray-300 hover:text-white">Monsters</a>
                    </Link>
                    <Link href="../pages/races.tsx">
                        <a className="text-gray-300 hover:text-white">Races</a>
                    </Link>
                    <Link href="../pages/spells.tsx">
                        <a className="text-gray-300 hover:text-white">Spells</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;