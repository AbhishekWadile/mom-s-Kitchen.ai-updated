import { useState } from "react";

const Ad_addProduct = () => {
const [product, setProduct] = useState({
    product_id: 0,
    product_name: "",
    product_price: 0,
    category: "",
    stock: 0,
    image: "",
});

  const postProduct=async (e) =>{
    e.preventDefault();
    const {product_id,product_name,product_price,category,stock,image}=setProduct;

    console.log(product)
    // if(!product_id || !product_name || !product_price || !category || !stock || !image){
    //     alert("Data not entered")
    // }
    try{
        const url = `http://localhost:8080/postProduct`;
        const response = await fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
        const result = await response.json();
        if(result){
            alert("Data is entered into database")
        }
    }catch(error){
        console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

//   const handleImageChange = (e) => {
//     setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Product added:", product);
//   };

  return (
    <div className="max-w-md h-auto mx-auto bg-black border-white border-[2px] mt-[3vh] p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Add Product</h2>
      <form onSubmit={postProduct} className="space-y-4">
        <div>
          <label htmlFor="product_id" className="block text-sm font-medium">Product ID</label>
          <input type="text" id="product_id" name="product_id" value={product.product_id} onChange={handleChange} required className="w-full text-black p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="product_name" className="block text-sm font-medium">Product Name</label>
          <input type="text" id="product_name" name="product_name" value={product.product_name} onChange={handleChange} required className="w-full p-2 border text-black rounded-lg" />
        </div>
        <div>
          <label htmlFor="product_price" className="block text-sm font-medium">Product Price</label>
          <input type="number" id="product_price" name="product_price" value={product.product_price} onChange={handleChange} required className="w-full p-2 border text-black rounded-lg" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <input type="text" id="category" name="category" value={product.category} onChange={handleChange} required className="w-full text-black p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="stock" className="block text-sm font-medium">Stock</label>
          <input type="number" id="stock" name="stock" value={product.stock} onChange={handleChange} required className="w-full text-black p-2 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium">Product Image Link</label>
          <input type="text" id="image" name="image" onChange={handleChange} required className="w-full text-black p-2 border rounded-lg" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Add Product</button>
      </form>
    </div>
  );
};

export default Ad_addProduct;
