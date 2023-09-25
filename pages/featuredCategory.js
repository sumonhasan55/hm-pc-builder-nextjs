import Link from "next/link";


const featuredCategory = ({ products }) => {
    return (
        <div>
        <h1 className='my-10 text-5xl font-bold text-center '>Featured Category </h1>
        <div class="grid grid-cols-1 w-full items-center md:grid-cols-3  mx-auto gap-4  my-5">

            {
                products.map((product) => (
                    <Link href={`/component/${product?.id}`}>
                    <div className="w-full shadow-xl card bg-base-100">
                        <figure className="px-10 pt-10">
                            <img src={product?.Image} alt="Shoes" onClick={console.log("me")} className="h-64 rounded-xl w-96" />
                        </figure>
                        <div className="items-center text-center card-body">
                            <h2 className="font-extrabold card-title">{product?.ProductName}</h2>
                            <p className='font-semibold te'>Price:{product?.Price}$</p>
                            <p className='font-semibold '>Category:{product?.Category}</p>
                            <p className='font-semibold'>Status:{product?.Status}</p>
                        </div>
                    
                        <div className="flex flex-row items-center justify-between card-body">
                            <div className=" card-actions">
                                <button className="w-full btn btn-neutral">Buy Now</button>

                            </div>
                            <div>
                                <p className='font-bold '>Rating:{product?.Rating}</p>
                            </div>

                        </div>
                    </div>
                    </Link>
                ))
            }
        </div>


    </div>
    );
};

export default featuredCategory;

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:5000/components")
    const data = await res.json()
    console.log(data)

    return {
        props: {
            products: data
        },

    };
};
