import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="min-h-screen hero" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Best Desktop PC Shop In Bangladesh</h1>
                        <p className="mb-5">HM-Pc Builder is the most popular Laptop Brand Shop in BD. Star Tech Laptop Shop has the perfect device, whether you are a freelancer, officegoer, or student.</p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;