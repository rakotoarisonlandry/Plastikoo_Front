import React from 'react';
import { FaSearch, FaComment, FaLink, FaHeart } from 'react-icons/fa';

const PlastikooEduc: React.FC = () => {
    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4">

                <div className="flex justify-center mb-6">
                    <div className="relative w-full max-w-4xl">
                        <input
                            type="text"
                            placeholder="Recherche"
                            className="w-full p-4 border border-gray-300 rounded-l-lg pr-12 text-lg"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center px-4 bg-green-500 text-white rounded-r-lg">
                            <FaSearch className="text-xl" />
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Bloc de contenu avec image réduite */}
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <img
                                    src="profil.png"
                                    alt="profile"
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">Andry007</h3>
                                    <p className="text-base text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-600 text-2xl">
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block"></span>
                            </button>
                        </div>
                        <div className="mt-6">
                            <img
                                src="pub.png"
                                alt="post"
                                className="w-full h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center text-gray-600">
                            <div className="flex space-x-6">
                                <a href="#" className="flex items-center text-lg">
                                    <FaHeart className="mr-2" /> 98
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaComment className="mr-2" /> 223
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaLink className="mr-2" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bloc de contenu avec image réduite */}
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <img
                                    src="profil.png"
                                    alt="profile"
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">Landry001</h3>
                                    <p className="text-base text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-600 text-2xl">
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block"></span>
                            </button>
                        </div>
                        <div className="mt-6">
                            <img
                                src="pub.png"
                                alt="post"
                                className="w-full h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center text-gray-600">
                            <div className="flex space-x-6">
                                <a href="#" className="flex items-center text-lg">
                                    <FaHeart className="mr-2" /> 150
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaComment className="mr-2" /> 120
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaLink className="mr-2" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bloc de contenu avec image réduite */}
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <img
                                    src="profil.png"
                                    alt="profile"
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">boziiy</h3>
                                    <p className="text-base text-gray-600">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-600 text-2xl">
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block mb-1"></span>
                                <span className="w-2.5 h-2.5 bg-gray-600 rounded-full block"></span>
                            </button>
                        </div>
                        <div className="mt-6">
                            <img
                                src="pub.png"
                                alt="post"
                                className="w-full h-80 object-cover rounded-lg"
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center text-gray-600">
                            <div className="flex space-x-6">
                                <a href="#" className="flex items-center text-lg">
                                    <FaHeart className="mr-2" /> 200
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaComment className="mr-2" /> 300
                                </a>
                                <a href="#" className="flex items-center text-lg">
                                    <FaLink className="mr-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bouton pour partager un post */}
                <div className="flex justify-center mt-8">
                    <button className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg">Partager un post</button>
                </div>
            </div>
        </section>
    );
};

export default PlastikooEduc;
