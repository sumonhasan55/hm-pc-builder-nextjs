

const ProductsDetailsPage = ({ product }) => {
    return (
        <>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row">
                    <img src={product?.Image} className="h-full max-w-sm rounded-lg shadow-2xl" />

                    <div className="p-8">

                        <h1 className="text-5xl font-bold">{product?.ProductName}</h1>
                        <p className="py-3 "><span className="font-bold ">Category:</span> {product?.Category}</p>
                        <p className="py-2"><span className="font-bold ">Description:</span> {product?.Description}</p>
                        <p className="py-2"><span className="font-bold ">Status:</span> {product?.Status}</p>
                        <p className="py-2"><span className="font-bold ">Price:</span> {product?.Price}</p>
                        <p className="py-2"><span className="font-bold ">KeyFeatures:</span> {product?.KeyFeatures?.Specification}</p>
                        <p className="py-2"><span className="font-bold ">IndividualRating:</span> {product?.IndividualRating}</p>
                        <p className="py-2"><span className="font-bold ">AverageRating:</span> {product?.AverageRating}</p>
                        <p className="py-2"><span className="font-bold ">Reviews:</span> {product?.Reviews}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetailsPage;


export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://pc-builder-data.onrender.com/components/${params.componentId}`);
    const data = await res.json();
    console.log(data)
    return {
        props: {
            product: data,
        },
    }
};
