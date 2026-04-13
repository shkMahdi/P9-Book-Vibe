import React from 'react';
import bannerImg from '../../assets/bannerImg.png';

const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-gray-100 rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center justify-between">
                
                <div className="max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Books to freshen up your bookshelf
                    </h1>

                    <button className="mt-10 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                        View The List
                    </button>
                </div>

                <div className="mt-10 md:mt-0">
                    <img
                        src={bannerImg}
                        alt="Book"
                        className="w-64 md:w-80 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;