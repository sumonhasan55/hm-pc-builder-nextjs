import Link from "next/link";

import { useDispatch, useSelector } from 'react-redux';
import { addToBuild } from '../redux/features/builder/builderSlice'

import { useGetProductsQuery } from "@/redux/api/api";
import Head from "next/head";


const pcBuilderPage = ( ) => {
    
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const { data, isLoading, isError, error } = useGetProductsQuery();
    console.log(data)

    const sucessAlert = () => alert("Congratulations! Sucessfuly You Are Create Your PC!!!");


    
    return (
        <>
        <Head>
        <title>pcBuilderPage</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1 className='my-5 font-bold text-center lg:text-5xl '>Build Your PC With Your Selected Components </h1>

            {
                data?.map((product) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="my-12 lg:my-5 h-60 lg:h-60 hero bg-base-200">
                        <div className="flex-col border-2 border-black hero-content lg:flex-row rounded-xl">
                            <img src={product?.Image} className="max-w-sm rounded-lg shadow-2xl h-36 w-28 " />
                            <div>
                                <div className="flex mx-0 -col lg:flex-row lg:mx-5 w-80">
                                    <div>
                                        <h1 className="mx-3 text-xl font-bold lg:mx-5 ">{product?.ProductName}</h1>
                                    </div>
                                    <div>
                                        <Link href={`/category/${product?.category?.id}`}  onClick={() => dispatch(addToBuild())}><button className="btn btn-neutral">Select</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
           <div className="my-10">
           <div className="p-3 mx-auto text-center text-white rounded-lg lg:w-1/5 bg-primary">
           <span>Total Selected Products: {count}</span>
           
           </div>

           <div className="p-3 mx-auto font-semibold text-center">
           {
            count > 4 ? <Link href="/"><button onClick={sucessAlert} className="btn btn-active btn-accent" >Complete Build</button></Link> :
            <> Pleace Select At List 5 Products!</>

           }
           </div>
           </div>

        </>


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
