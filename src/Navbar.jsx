const Navbar = () => {
  const buttonsData = [
    { text: 'Home', address: '/' },
    { text: 'About', address: '/about' },
    { text: 'Status', address: '/status' },
    { text: 'Blog', address: '/blog' },
  ]
  return (
    <div className="navbar bg-transparent absolute">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow border-2 border-gray-100 rounded-box w-52 bg-black bg-opacity-25 text-gray-200"
          >
            {buttonsData.map((button, index) => (
              <li className="hover:border-l-2 hover:border-l-gray-300" key={index}>
                <a href={button.address}>{button.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl right-0 fixed">Lorem</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {buttonsData.map((button, index) => (
            <li key={index}>
              <a href={button.address}>{button.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  )
}

export default Navbar

