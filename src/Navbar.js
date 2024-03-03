function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="mealSearch.html">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact</a>
          </div>
        </div>
        
        <a className="nav-link" href="#"><button className="btn btn-dark" type="submit">Search</button></a>
      </div>
    </nav>
  );
}

export default Navbar;