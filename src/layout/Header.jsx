import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  };
  const handleNav = () => {
    setNavOpen(!navOpen);
    console.log("menu", navOpen);
    // setMouseClick(true)
  };
  return (
    <>
      <div className="nav absolute w-full">
        <div className="notice bg-[#ffdc1c] font-semibold px-2">
          <p className="underline md:text-sm text-xs py-2 text-center cursor-pointer text-[#333132] hover:text-[#05f] ">
            We Have Been Working On Several Initiatives During The
            Jajarkot-Rukum Earthquake Response 2023. Check Them Out
            <Link to="/">
              <i class="bi bi-arrow-right notice-arrow text-[#05f] font-extrabold align-middle sm:ps-2"></i>
            </Link>
          </p>
        </div>
        <div className="wrapper flex bg-transparent justify-between py-3  ">
          <div className="logo flex items-center px-2 ">
            <Link to="/">
              <img src="./logo.png" alt="" className="w-full" />
            </Link>
          </div>
          <div className="nav w-3/5 lg:flex hidden list-none justify-evenly items-center text-[#333132] hover:cursor-pointer font-medium text-base">
            <Link to="/">
              <li className="hover:text-[#05f]">Services</li>
            </Link>
            <li className="nav-link1 hover:text-[#05f] ">
              Portfolio <i class="bi bi-caret-down-fill font-thin text-xs"></i>
              <div className="nav-sublink1  absolute top-20 text-sm bg-white shadow-md z-10">
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    General
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    International
                  </li>
                </Link>
              </div>
            </li>
            <li className="nav-link2 hover:text-[#05f] ">
              Company <i class="bi bi-caret-down-fill font-thin text-xs"></i>
              <div className="nav-sublink2 absolute top-20 text-sm bg-white shadow-md z-10">
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    About Us
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Team
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Work with us
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Awards & Achievements
                  </li>
                </Link>
              </div>
            </li>
            <Link to="/">
              <li className=" hover:text-[#05f]">GeoAI</li>
            </Link>

            <li className="nav-link3 hover:text-[#05f]">
              Events & Media{" "}
              <i class="bi bi-caret-down-fill font-thin text-xs"></i>
              <div className="nav-sublink3  absolute top-20 text-sm bg-white shadow-md z-10">
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Events
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Media
                  </li>
                </Link>
                <Link to="/">
                  <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                    Publications
                  </li>
                </Link>
              </div>
            </li>
            <Link to="/">
              <li className=" hover:text-[#05f]">Blogs</li>
            </Link>
          </div>
          <button
            className="button lg:w-2/12 md:w-1/5 sm:w-1/3 w-2/5 flex justify-center items-center font-semibold md:text-sm text-xs  "
            // style={{ fontSize: "15px" }}
          >
            <li className="nav-btn list-none bg-[#ffdc1c] hover:bg-[#ffa01c] text-[#05f] lg:w-4/5 w-11/12 px-3 md:py-2 py-1 leading-6 ">
              Let's talk
              <i class="bi bi-arrow-right nav-arrow text-[#05f] font-extrabold align-middle sm:ps-2"></i>
            </li>
          </button>
          <div onClick={handleNav} className="lg:hidden cursor-pointer">
            <i class="bi bi-list text-[#ffab00] text-4xl font-extrabold"></i>
          </div>
          <div
            className={
              navOpen
                ? "fixed right-0 top-0 sm:w-[52%] w-[60%] lg:hidden h-screen bg-[#ffa01c] py-10 px-8 ease-in duration-100 z-30"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
            }
            ref={sidebarRef}
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={handleNav} className="lg:hidden cursor-pointer">
                <i class="bi bi-x text-[#13294b] text-4xl font-extrabold"></i>
              </div>
            </div>
            <div className="flex-col py-4 text-[#13294b] font-bold list-none ">
              <Link to="/">
                <li className="hover:text-[#05f] cursor-pointer py-4">
                  Services
                </li>
              </Link>

              <li className="nav-link1 hover:text-[#05f] relative cursor-pointer py-4">
                Portfolio{" "}
                <i class="bi bi-caret-down-fill font-thin text-xs "></i>
                <div className="nav-sublink1 absolute text-sm bg-white shadow-md z-10">
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      General
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      International
                    </li>
                  </Link>
                </div>
              </li>
              <li className="nav-link2 hover:text-[#05f] relative cursor-pointer py-4">
                Company <i class="bi bi-caret-down-fill font-thin text-xs"></i>
                <div className="nav-sublink2 absolute text-sm bg-white shadow-md z-10">
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      About Us
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Team
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Work with us
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Awards & Achievements
                    </li>
                  </Link>
                </div>
              </li>
              <Link to="/">
                <li className=" hover:text-[#05f] cursor-pointer py-4">
                  GeoAI
                </li>
              </Link>
              <li className="nav-link3 hover:text-[#05f] relative cursor-pointer py-4">
                Events & Media{" "}
                <i class="bi bi-caret-down-fill font-thin text-xs"></i>
                <div className="nav-sublink3 absolute text-sm bg-white shadow-md z-10">
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Events
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Media
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="text-[#333132] hover:bg-[#ffdc1c] px-4 py-3">
                      Publications
                    </li>
                  </Link>
                </div>
              </li>
              <Link to="/">
                <li className=" hover:text-[#05f] cursor-pointer py-4">
                  Blogs
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='text-orange-400 text-9xl'>Header</div> */}
    </>
  );
};

export default Header;
