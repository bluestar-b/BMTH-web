const Navbar = () => {
  const buttonsData = [
    { text: "Home", address: "/" },
    { text: "About", address: "/about" },
    { text: "Status", address: "/status" },
    { text: "Blog", address: "/blog" },
  ];
  return (
    <div className="navbar absolute bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-gray-200 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-4 w-52 border-2 border-gray-100 bg-black bg-opacity-25 p-2 text-gray-200 shadow"
          >
            {buttonsData.map((button, index) => (
              <li
                className="pl-2 text-gray-200 hover:border-l-2 hover:border-l-gray-300"
                key={index}
              >
                <a href={button.address}>{button.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost right-0 text-xl normal-case text-gray-200">
          Lorem
        </a>
      </div>
      <div className="navbar-center hidden text-gray-200 lg:flex">
        <ul className="menu menu-horizontal px-1">
          {buttonsData.map((button, index) => (
            <li className="border-b-gray-200 hover:border-b-2" key={index}>
              <a href={button.address}>{button.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
