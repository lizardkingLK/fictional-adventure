import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <Link href={"/"}>
      <div className="flex min-h-10 items-center justify-center bg-green-400 p-2">
        <h1 className="font-black text-white">GarageSales</h1>
      </div>
    </Link>
  );
};

export default Brand;
