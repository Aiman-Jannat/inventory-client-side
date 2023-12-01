

const Title = ({ mainTitle, subTitle }) => {
    return (
        <div className="text-center my-3 pb-3 relative">
      <p className=" text-lg text-gray-600 mb-3">........<span className="text-blue-900 font-bold">{subTitle}</span>........</p>
      <h2 className="text-4xl font-extrabold text-gray-900 relative inline-block">
        <span className="relative  border-4 rounded-md border-b-0  border-orange-600 px-4">{mainTitle}</span>
        
        <div className="absolute px-3 inset-0 bg-gradient-to-b from-orange-800 via-orange-100 to-transparent opacity-50 -z-50"></div>
      </h2>
      
    </div>
    //     <div className="text-center my-12 pb-6">
    //   <h2 className="text-4xl border-8 border-y-0 border-r-0 border-orange-600 font-extrabold text-gray-900 relative inline-block px-3">
    //     {mainTitle}
        
    //   </h2>
    //   <p className="mt-2 text-lg text-gray-600">........{subTitle}........</p>
    // </div>
    );
};

export default Title;