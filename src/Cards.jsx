import React, { useState } from 'react'

function Cards({num,fun,names,price,img}) {
  let [count2,setCount2]=useState(0);  //USE STATE is  used to change the value of cart  
  
  let add=()=>{  //adding the count to the cart button by using on click method
    setCount2(count2+=1);
    fun(num=num+1)

  }
 let remove=()=>{ //decresing the count from cart button by using on click method
    if(count2>0){
    setCount2(count2-=1)
    if(num>0){
    fun(num=num-1)
    }
    }
  }
  

  return (
    <div className="col mb-5 ">
    <div className="card h-100 w-100">
    <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right: "0.5rem"}}>Sale</div>
                                                            
    <div className="img">  
             <img className="card-img-top" src={img} alt="..."/></div>
    <div className="card-body p-2 d-flex align-items-center">
    <div className="text-center">
             <h4 className="fw-bolder">{names}</h4>
             {price}
             <p>Best Seller</p>  </div>
    </div>
    <div className="card-footer pt-0 border-top-0 bg-transparent">
    <div className="d-flex justify-content-center ">
             {                
             count2<1?   //ternary  operator to chaing the button by using use state
             <button  className="btn btn-outline-dark mt-auto " onClick={add}>Add to Cart</button>:   //chaning button add to cart to remove from cart
             <button id="btn" className="btn btn-outline-dark mt-auto " onClick={remove}>Remove from Cart</button>
             }
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cards