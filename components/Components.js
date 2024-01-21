import Image from 'next/image';
import { useState } from 'react'; // Import useState hook

const Components = ({ components }) => {
  const [loading, setLoading] = useState(false); // Introduce a loading state

  console.log(components);

  return (
    <div>
      <h1 className="my-10 text-5xl font-bold text-center ">Components</h1>

      {loading ? (
       <span className="loading loading-spinner text-accent"></span>
      ) : (
        <div className="grid grid-cols-1 w-full items-center md:grid-cols-3 mx-auto gap-4 my-5">
          {components?.map((component) => (
            <div className="w-full shadow-xl card bg-base-100 h-96" key={component?.id}>
              <figure>
                <Image
                  className='w-full h-48 rounded-2xl'
                  src={component?.Image}
                  alt={component?.ProductName}
                  width={400} 
                  height={100} 
                />
              </figure>
              <div className="items-center text-center card-body">
                <h2 className="font-extrabold ">{component?.ProductName}</h2>
                <p className="font-semibold ">Price: ${component?.Price}</p>
                <p className="font-semibold ">Category: {component?.CategoryName}</p>
                <p className="font-bold ">Rating: {component?.Rating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Components;
