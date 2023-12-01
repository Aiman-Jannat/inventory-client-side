

const Banner = () => {
    return (
        <div className="">
  <div className="hero min-h-screen " style={{backgroundImage: 'url(https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Inventory_Management.jpg)'}}>
  <div className="bg-black h-full w-full opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Hello Shop <span className="text-white text-7xl font-semibold">Manageres</span></h1>
      <p className="mb-5 text-white">Streamline your business with our cutting-edge Inventory Management System, ensuring precise control and maximum productivity.</p>
      <button className="px-6 py-3 text-white bg-orange-500 border-0 rounded-0">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;