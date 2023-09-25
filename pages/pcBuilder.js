import Link from "next/link";


const pcBuilderPage = ({ products }) => {
    return (
        <div>
        <h1 className='my-10 text-5xl font-bold text-center '> </h1>
        
            {
                products.map((product) => (
                    <div className="min-h-screen hero bg-base-200">
                    <div className="flex-col hero-content lg:flex-row">
                      <img src={product?.Image} className="max-w-sm rounded-lg shadow-2xl" />
                      <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                      </div>
                    </div>
                  </div>
                ))
            }
        </div>


    );
};

export default pcBuilderPage;

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
