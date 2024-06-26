const CardData = ({ data }) => {
  const { estate_title,price, area, image, segment_name, description } = data;
  console.log(data);
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-72"
            src= {image}
            alt="Shoes"
          />
        </figure>
        <p>{segment_name}</p>
        <div className="card-body">
         
          <h2 className="card-title">
          {estate_title}
           
          </h2>
          <p>{description}</p>
             <div className="flex">
             <p>{price}</p>
             <p>{area}</p>
             </div>
          <button className="btn btn-primary">Property</button>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardData;
