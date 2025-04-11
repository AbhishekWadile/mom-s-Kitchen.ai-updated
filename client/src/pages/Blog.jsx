import React from "react";
import Aftnav from "../components/Aftnav";
import Footer from "../components/Footer";
import intro from "../images/Blog page/intro-1645057933.jpg";
import break1 from "../images/Blog page/vecteezy_ai-generated-plate-of-breakfast-food-with-eggs-bacon-and_41913265.jpeg.jpg"
import break2 from "../images/Blog page/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table.jpg"
import break3 from "../images/Blog page/chicken-skewers-with-slices-sweet-peppers-dill.jpg"
import break4 from "../images/Blog page/pexels-valeriya-724667.jpg"
import break5 from "../images/Blog page/pexels-suju-1132558.jpg"
import break6 from "../images/Blog page/pexels-dana-tentis-118658-691114.jpg"
import break7 from "../images/Blog page/pexels-pelageia-zelenina-58865108-10000000.jpg"
import break8 from "../images/Blog page/pexels-valeriya-19859349.jpg"
import break9 from "../images/Blog page/pexels-yuuilina-10254481.jpg"

function Blog() {
  return (
    <div className="font-[poppins]">
      <div className="bg-[#f6f6f6]  text-center font-sans">
        {/* Hero Section */}
        <Aftnav />
        <div className="relative">
          <img
            src={intro}
            alt="Hero Banner"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-7 bg-black bg-opacity-40 text-white">
            <h1 className="text-8xl font-bold mb-2">Blog</h1>
            <p className="text-2xl font-semibold">Book, Eat, Repeat.</p>
            <p className="text-2xl font-semibold">The Healthy Way</p>
          </div>
        </div>

        {/* Client Section */}
        <section className="py-10 px-5">
          <h2 className="text-5xl mb-[6vh] font-semibold">
            What Our <span className="text-green-700">Client Say</span>
          </h2>
          <p className="text-2xl mt-2 mb-4 text-gray-600">
            Most <span className="text-green-700">Popular Categories</span>
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mt-2">
            Be sure not to miss out the categories of these most popular
            categories. Enjoy trying them out!
          </p>

          {/* Categories Grid */}
          <div className="flex justify-center items-center w-[100%]">
            <div className="grid grid-cols-2 w-[90%] md:grid-cols-3 gap-4 mt-6 px-4">
              {[
                { title: "Breakfast", image: break1 },
                { title: "Salads", image: break2 },
                { title: "Appetizer", image: break3 },
                { title: "Soups", image: break4},
                { title: "Desserts", image: break5 },
                { title: "Main Dishes", image: break6 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded overflow-hidden shadow-md hover:scale-[1.03] hover:cursor-pointer transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[150px] object-cover"
                  />
                  <div className="absolute text-2xl flex flex-col gap-1 font-semibold bottom-[6vh] left-2 bg-black bg-opacity-30 text-white p-1  rounded">
                    {item.title}
                    <span className="text-sm">View All Recipes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Recipes */}
        <section className="py-10 px-5">
          <h2 className="text-2xl font-semibold">
            New <span className="text-green-700">Recipes</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Every week we present you with a selection of our personal favorite
            recipes. Enjoy trying them out!
          </p>

          <div className="flex justify-center items-center w-[100%]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] gap-4 mt-6 px-4">
              {/* Left Side: Big Image */}
              <div className="relative rounded overflow-hidden shadow-md hover:scale-[1.03] hover:cursor-pointer transition-transform duration-300">
                <img
                  src={break7}
                  alt="Real Italian Pasta"
                  className="w-full h-full max-h-[420px] object-cover"
                />
                <div className="absolute bottom-[53vh] left-2 bg-black bg-opacity-60 text-white p-1 text-2xl font-semibold rounded">
                  Real Italian Pasta
                </div>
              </div>

              {/* Right Side: Two Smaller Images Vertically Stacked */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Ham and Egg Summer Salad",
                    image: break8,
                  },
                  {
                    title: "Tasty Mozarella Buns",
                    image: break9,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative rounded overflow-hidden shadow-md h-[200px] hover:scale-[1.03] hover:cursor-pointer transition-transform duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-[21vh] left-2 bg-black bg-opacity-30 text-white p-1 text-2xl font-semibold rounded">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="py-10">
          <h2 className="text-4xl font-semibold">
            Begin Your <span className="text-green-700">Story Here</span>
          </h2>
          <button className="mt-4 px-6 text-xl w-[10%] py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Start
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
