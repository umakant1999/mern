import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="stat-card  bg-blue-300 p-2 rounded-2xl shadow-2xl cursor-pointer">
            <div className="stat-top">
              <div>
                <p>Total Spent</p>
{/* 
                <h3>₹{total.toLocaleString()}</h3> */}
              </div>

              <div className="icon orange">
                {/* <CircleDollarSign size={20} /> */}
              </div>
            </div>
          </div>
    </div>
  )
}

export default Card