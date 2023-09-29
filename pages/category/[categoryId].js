/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { addToBuild } from '@/redux/features/builder/builderSlice';
import Head from 'next/head';
import Link from 'next/link';
import { connect, } from 'react-redux';



const AllProductsPage = ({ products }) => {

  return (
    <>
    <Head>
        <title>HM_PC_Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <div>
       
    <h1 className='my-5 font-bold text-center lg:text-5xl '>Please! Choose a Product & Click addToBuilder   </h1>
      
      {
        products?.map((product) => (
         
          <div className="my-5 h-80 lg:h-60 hero bg-base-200">
            <div className="flex-col border-2 border-black hero-content lg:flex-row rounded-xl">
              <img src={product?.Image} className="max-w-sm rounded-lg shadow-2xl h-36 w-28" />
              <div>
                <div className="flex mx-0 -col lg:flex-row lg:mx-5 w-80">
                  <div>
                    <h1 className="mx-3 text-xl font-bold lg:mx-5 ">{product?.ProductName}</h1>
                    <p className="mx-3 lg:mx-5 "><span className='font-semibold '>Price:</span>{product?.Price}$</p>
                    <p className="mx-3 lg:mx-5 " ><span className='font-semibold '> Status:</span>{product?.Status}</p>
                    <p className="mx-3 lg:mx-5 " ><span className='font-semibold '> Rating:</span>{product?.Rating}</p>
                  </div>
                  <div>
                    <Link href="/pcBuilder" className="btn btn-neutral"> <button>Add To Builder</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        ))
      }

    </div>
    
    </>
  );
};


const mapDispatchToProps = {
  addToBuild,
};

export default connect(null, mapDispatchToProps)(AllProductsPage);


export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://pc-builder-data.onrender.com/components/${params.categoryId}`)
  const data = await res.json();
  
  return {
    props: {
      products: data.category.products
    },
  }
};