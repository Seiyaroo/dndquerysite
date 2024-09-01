import Navbar from '../components/Navbar'
import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto text-center py-20">
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome to the D&D 5e Compendium
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Explore a world of fantasy that is only limited by your imagination!
                </p>
                <div className="mt-8 space-x-4">
                    <Link href="/monsters" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Monsters </Link>
                    <Link href="/equipment" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Equipment</Link>
                    <Link href="/races" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Races</Link>
                    <Link href="/spells" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Spells</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;