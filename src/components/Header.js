import React from "react";

const Header = () => {
  return <div>
    {/* navigation menu here */}
        <div className="bg-[#1C2B35] md:flex items-center justify-between md:px-20 md:py-4">
            <div>
                <img src="/images/logo.svg" alt="logo" />
            </div>
            {/* nav */}
            <nav>
                <ul className="text-white md:flex items-center md:space-x-10 ">
                    <li><a href="# ">Order</a></li>
                    <li><a href="# ">Order Review</a></li>
                    <li><a href="# ">Manage Inventory</a></li>
                    <li><a href="# ">Login</a></li>
                </ul>
            </nav>
        </div>
    {/* navigation menu ends here */}
  </div>;
};

export default Header;
