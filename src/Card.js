function card() {
  return (
      <div className="d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                  <div className="card text-bg-primary" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Card 01</h5></div>
                      <div class="card-body">
                      
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div> 
              </div>
              <div className="col">
                  <div className="card text-bg-danger" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Card 02</h5></div>
                      <div class="card-body">
                    
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     </div>
                  </div> 
              </div>
              <div className="col">
                  <div className="card text-bg-success" style={{width: '18rem'}}>
                      <div className="card-header"><h5 className="card-title">Card 03</h5></div>
                      <div class="card-body">
                      
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div> 
              </div>
          </div> 
      </div>
  );
}

export default card;