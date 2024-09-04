import React from 'react'


function BusinessCard() {
  return (
    <div>
        <div className="cards">
            {/* Example Card */}
            <div className="card">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7FmLQWVcI6I8NChHXZHuVU1-wNia1ewsgMph1-fm2XMwpyMjU"
                alt="Business"
                className="card-img"
              />
              <div className="card-content">
                <div className="price">$35 - $50</div>
                <h3>Bar Business</h3>
                <p>Health, Luxury, Spa</p>
                <p>New York, USA</p>
                <p>Open</p>
                <div className="card-footer">
                  <div className="rating">4.5</div>
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>
            {/* Add more cards similarly */}
          </div>
    </div>
  )
}

export default BusinessCard