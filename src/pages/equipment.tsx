import Navbar from '../components/Navbar';

const EquipmentPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto text-center py-20">
                <h1 className="text-4xl font-bold text-gray-800">Equipment</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Explore all the equipment available in Dungeons and Dragons.
                </p>
            </div>
        </div>
    );
};

export default EquipmentPage;