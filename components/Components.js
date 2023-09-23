import React from 'react';

const Components = ({ components }) => {
    console.log(components)
    return (
        <div>
            <h1 className='my-10 text-5xl font-bold text-center '>Components</h1>
            <div class="grid grid-cols-1 w-full items-center md:grid-cols-3  mx-auto gap-4  my-5">

                {
                    components.map((component) => (
                        <div className="w-full shadow-xl card bg-base-100">
                            <figure className="px-10 pt-10">
                                <img src={component?.Image} alt="Shoes" className="h-64 rounded-xl w-96" />
                            </figure>
                            <div className="items-center text-center card-body">
                                <h2 className="font-extrabold card-title">{component?.ProductName}</h2>
                                <p className='font-semibold te'>Price:{component?.Price}$</p>
                                <p className='font-semibold '>Category:{component?.Category}</p>
                                <p className='font-semibold'>Status:{component?.Status}</p>
                            </div>
                        
                            <div className="flex flex-row items-center justify-between card-body">
                                <div className=" card-actions">
                                    <button className="w-full btn btn-neutral">Buy Now</button>

                                </div>
                                <div>
                                    <p className='font-bold '>Rating:{component?.Rating}</p>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Components;