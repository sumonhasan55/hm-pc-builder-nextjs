import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Import the Image component

const FeaturedCategory = ({ products }) => {
  return (
    <>
      <Head>
        <title>HM_PC_Builder</title>
        <meta
          name="description"
          content="This is a news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="my-10 text-5xl font-bold text-center">Featured Category</h1>
        <div className="grid items-center w-full grid-cols-1 gap-4 mx-auto my-5 md:grid-cols-3">
          {products.map((product) => (
            <Link href={`/component/${product?.id}`} key={product?.id}>
              <div className="w-full shadow-xl card bg-base-100">
                <figure className="px-10 pt-10">
                  {/* Replace <img> with <Image> */}
                  <Image
                    src={product?.Image}
                    alt={product?.ProductName}
                    width={384} // Set your desired width
                    height={256} // Set your desired height
                    className="h-64 rounded-xl w-96"
                  />
                </figure>
                <div className="items-center text-center card-body">
                  <h2 className="font-extrabold card-title">{product?.ProductName}</h2>
                  <p className="font-semibold te">Price: {product?.Price}$</p>
                  <p className="font-semibold">Category: {product?.Category}</p>
                  <p className="font-semibold">Status: {product?.Status}</p>
                </div>

                <div className="flex flex-row items-center justify-between card-body">
                  <div className="card-actions">
                    <button className="w-full btn btn-neutral">Buy Now</button>
                  </div>
                  <div>
                    <p className="font-bold">Rating: {product?.Rating}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCategory;

export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-data.onrender.com/components");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
};
