import { useState } from 'react'
import './App.css'
import Cards from './Cards'

function App() {
   
  let productName=[
    "Power and Hand Tool Kit",
    "HIGHLANDER Sneakers For Men",
    "GS PANDA Back Case for OPPO A55 5G",
    "Soundcore by Anker Life Dot 2 ANC",
    "AI Voice Assistant Mode Smartwatch",
    "Electric fly killer WITH 20W",
    "COMBO SWEET & SALTY FLAVOURS",
    "200A Inverter ARC Welding Machine"
  ]
  let productPrice=[
    '$50.00 $25.00',
    '$120.00 - $280.00',
    '$40.00',
    '$60.00',
    '$50.00 $25.00',
    '$120.00 - $280.00',
    '$40.00',
    '$60.00'
  ]
  let productImage=[
    "https://rukminim2.flixcart.com/image/200/200/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/shoe/z/z/r/-original-imagg3aa77ts5jmp.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/l0bbonk0/cases-covers/front-back-case/j/e/9/oppo-a16-jpeg-170-gs-panda-collections-original-imagc5f2fparm3qz.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/kn6cxow0/headphone/5/i/0/a3931z11-soundcore-original-imagfxyhkmfqdz6a.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/screen-guard/screen-guard/h/4/q/ooo985-i-think-enterprises-original-imagqgq7dhtg2e5z.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/400/400/xif0q/electric-insect-killer/q/i/u/anti-rat-mosquito-insect-lizard-spider-ants-rodents-cockroaches-original-imaghfxab8wyner3.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/200/200/kxgfzbk0/cookie-biscuit/w/s/0/500-ajwain-tutifruity-combo-of-best-selling-sweet-salty-flavours-original-imag9wsqzmmmxggm.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/200/200/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70",
  ]
  let [count,setCount]=useState(0);

  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
         <a className="navbar-brand" href="#">ONLINE SHOPPING</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
         <ul className="navbar-nav d-flex align-items-center px-5 me-auto my-2 my-lg-0 navbar-nav-scroll" style={{scroll:"100px",height: "100px" }}>
         <li className="nav-item" ><a className="nav-link active" aria-current="page" href="#">Home</a></li>
         <li className="nav-item"><a className="nav-link" href="#">About</a></li>
         <li class="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
         <li><a className="dropdown-item" href="#!">All Products</a></li>
         <li><hr className="dropdown-divider"/></li>
         <li><a className="dropdown-item" href="#!">Popular Items</a></li>
         <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
         </ul></li></ul>
    <button className="btn-1 btn-outline-dark align-items-center" type="submit">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
         </svg> Cart
         <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
    </button>
    </div></div>
</nav>

<header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5"><div className="text-center text-white">
      <h1 className="display-4 fw-bolder">Shop in style</h1>
      <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
      </div></div>
</header>


<div class="container px-2 px-lg-1 mt-2">
<div class="row gx-1 gx-lg-1 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       <Cards num={count} fun={setCount} names={productName[0]} price={productPrice[0]} img={productImage[0]}/>
       <Cards num={count} fun={setCount} names={productName[1]} price={productPrice[1]} img={productImage[1]}/>
       <Cards num={count} fun={setCount} names={productName[2]} price={productPrice[2]} img={productImage[2]}/>
       <Cards num={count} fun={setCount} names={productName[3]} price={productPrice[3]} img={productImage[3]}/>
       <Cards num={count} fun={setCount} names={productName[4]} price={productPrice[4]} img={productImage[4]}/>
       <Cards num={count} fun={setCount} names={productName[5]} price={productPrice[5]} img={productImage[5]}/>
       <Cards num={count} fun={setCount} names={productName[6]} price={productPrice[6]} img={productImage[6]}/>
       <Cards num={count} fun={setCount} names={productName[7]} price={productPrice[7]} img={productImage[7]}/>
</div>
</div>
           
       
        
    </>
  )
}

export default App
