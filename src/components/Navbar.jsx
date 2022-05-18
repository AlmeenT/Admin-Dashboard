import React, { useEffect, useState } from 'react'
import '../CSS/navbar.css';
import { FaRegBell, FaSearch } from 'react-icons/fa'
const Navbar = () => {
  const [imageData, setImageData] = useState([]);
  const [searchBar, setSearchBar] = useState(false);
  const url= "https://fakerapi.it/api/v1/images?_quantity=1";


  const toggleSearch = () => {
    if (searchBar) {
      setSearchBar(false);
    } else {
      setSearchBar(true);
    }
  }

  const fetchImage = () => {
    fetch(url)
      .then(response => response.json())
      .then(myReturn => {
        setImageData(myReturn.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <header className="navbar-section">
      <div className="navbar-heading">
        <h1>Dashboard</h1>
      </div>
      <div className="widgets-container">
        <div className="search-container">
          {searchBar && <input type="text" className='myinput' placeholder='search' />}
          <FaSearch className='search-icon' onClick={toggleSearch} />
        </div>
        <div className="bell">
          <div className="icon">
          <FaRegBell />
          </div>
        </div>
        <div className="profile">
          {
            imageData.map(myImage => {
              return <img key={1}
                className='profile-img'
                src={myImage.url}
                alt={myImage.title} 
              />
            })
          }
        </div>
      </div>
    </header>
  )
}

export default Navbar;