import Link from "next/link";

const Panels = ({

  setSuper,
  setAdmin,
  setUser,
}) => {
  return (
    <div className="flex flex-wrap w-auto justify-center mx-auto gap-2  ">
      {/* Panel Cards */}

      {/* Super Admin Login */}
      <a className=" border-2 border-black rounded-xl  h-10 hover:bg-slate-600 w-70 bg-indigo-300  " onClick={()=>{setSuper(true);setAdmin(false);setUser(false);}}>
        <div className="text-black text-center mr-auto mt-1  mx-22 font-bold w-80  ">
        Super Admin Login
        </div>  
      </a>
       {/*  Admin Login */}
       <a className=" border-2 border-black rounded-xl h-10 hover:bg-slate-600 w-70 bg-indigo-300  " onClick={()=>{setSuper(false);setAdmin(false);setUser(false);}}>
        <div className="text-black text-center mr-auto mt-1  mx-2 font-bold w-80  ">
         Admin Login
        </div>  
      </a>
       {/*  User Login */}
       <a className=" border-2 border-black rounded-xl h-10 hover:bg-slate-600 w-70 bg-indigo-300  " onClick={()=>{setSuper();setAdmin(false);setUser(false);}}>
        <div className="text-black text-center mr-auto mt-1  mx-2 font-bold w-80  ">
        User Login
        </div>  
      </a>
     
     
    </div>
  );
};

export default Panels;