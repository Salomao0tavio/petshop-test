import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 fixed w-full">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-white text-xl font-bold">
                    FindPetshop
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
