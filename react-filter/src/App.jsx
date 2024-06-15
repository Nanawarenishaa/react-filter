import { useState } from "react"
import { productData } from "./Data/Data"
function App() {
  const [priceRange , setPriceRange ] = useState(1000)
  const [brand , setBrand ] = useState([])
  const [disc, setdisc ] = useState('')
  const selectByPrice = (e) =>{
    setPriceRange(e.target.value)
  }

  const selectByBrand = (element) => {
    setBrand(element);
  };

  const selectByDiscount = (discount) => {
    setdisc(discount);
  }

  const filteredProducts = productData.filter((product) => {
    if (product.price <= priceRange && (brand.length === 0 || brand.includes(product.brand))) {
      return true;
    }
    if (disc === "Under-10" && product.discount < 10) {
      return true;
    }
    if (disc === "10-20" && product.discount >= 10 && product.discount <= 20) {
      return true;
    }
    return false; 
  });
  


  
  return (
    <>
      <div className="w-full bg-black text-white min-h-screen flex gap-8 pt-8">
       <div className="w-[20%] h-screen border-[1px] border-white mt-4 p-4">
        <div className="flex flex-col gap-2">
        <label className="text-xl" >Price range :{priceRange}</label>
        <input type="range" className="mx-8" min="0" max="1000" value={priceRange} onChange={selectByPrice} />
        </div>
          <div className="mt-8">
          <label className="pt-8 text-xl">Brand : {brand} </label>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}  onChange={() => selectByBrand("Nike")}      />
          <label >Nike</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}   onChange={() => selectByBrand("Reebok")}    />
          <label >Reebok</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}   onChange={() => selectByBrand("Adidas")}     />
          <label >Adidas</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}   onChange={() => selectByBrand("ASICS")}     />
          <label >ASICS</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}   onChange={() => selectByBrand("Converse")}  />
          <label >Converse</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}  onChange={() => selectByBrand("New Balance")}  />
          <label >New Balance</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}   onChange={() => selectByBrand("Puma")} />
          <label >Puma</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox"  value={brand}  onChange={() => selectByBrand("Vans" )} />
          <label >Vans</label>
           </div>
      </div>
      <div className="mt-8">
          <label className="pt-8 text-xl"> Discound :{disc}  </label>
          <div className="flex gap-6">
          <input type="checkbox" value={disc} onChange={() => selectByDiscount("Under-10")} />
          <label>Under-10</label>
           </div>
          <div className="flex gap-6">
          <input type="checkbox" value={disc}  onChange={() => selectByDiscount("10-20")} />
          <label>10-20</label>
           </div>
           </div>
        </div>  
         <div className="container grid grid-cols-3 gap-4 p-4 mx-auto w-[70%]">
          
         {filteredProducts.map((product , index) =>(
          <div className="border-[1px] flex flex-col gap-2 border-white rounded-md p-4" key={index}>
            <img src={product.imageUrl} alt="" />
            <h2>{product.brand}</h2>
              <span>{product.category}</span>
              <p>{product.description}</p>
              <span>Price : {product.price}</span>
              <span>colors : {product.colors}</span>
              <div className="flex justify-between">
              <p>Discount : {product.discount}</p>
              <p>{product.gender}</p>
              </div>
             
          </div>
         ))}
         </div>
    
      </div>
      
    </>
  )
}

export default App
