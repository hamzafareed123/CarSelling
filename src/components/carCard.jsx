import React from "react";

function CarCard({name,desc,img}){
    return(
        <div className="bg-white shadow-md rounded-lg p-4">
            <img src={img}  className="w-full h-40 object-cover rounded"/>
            <h3 className="text-xl font-semibold mt-2">{name}</h3>
             <p className="text-sm text-gray-600">{desc}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        More Details</button>

        </div>
    );
}

export default CarCard;