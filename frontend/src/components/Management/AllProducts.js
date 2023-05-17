import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import './Product.css'
import { FaStar } from 'react-icons/fa';


function ProductTable() {

    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/Product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getProducts();
    }, [products])


    const deleteProduct = (id) => {
        // alert(id)
        var answer = window.confirm("Are you sure")

        if (answer) {
            axios.delete("http://localhost:8070/Product/delete/" + id).then((res) => {
                if (res.status === 200) {
                    alert("Product deleted")
                
                }
            })
        }
    }

    //search

    useEffect(() => {
        setFilteredResults(products.filter((product) => {
            const nameMatch = product.productName.toLowerCase().includes(searchInput.toLowerCase());
            const typeMatch = product.productType.toLowerCase().includes(searchInput.toLowerCase());
            return (nameMatch || typeMatch );
        }));
    }, [searchInput, products]);


    //endsearch



    return (
        <div className='background'>
            <div>





                <div class="d-flex justify-content-center h-50">
                    <a href="http://localhost:3000/addPRODUCT"><button class="a" type="button" style={{ color: "#FFFFFF", fontWeight: "bold" }}>Add Products </button> </a>
                    <div class="searchbar">
<p><b><i>Products:</i></b></p>


                        <input class="search_input" type="text" placeholder="Find products" onChange={(e) => setSearchInput(e.target.value)} />
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                    </div>


                </div>
            </div>

            <div className="container">
                <section className="section about-section gray-bg" id="about">
                    <br>
                    </br>

                    <h6 className="text-center font-italic" class="p-2 mb-6 bg-warning text-dark" >
                        customers can easily find hotels that match their
                        specific needs and preferences by entering the product name & product type.
                    </h6>
                    {products && filteredResults.map(product => (

                        <div className="row align-items-center justify-content-around flex-row-reverse" style={{ border: "2px solid ", backgroundColor: "white", color: "gray", borderRadius: "40px" }}>
                            <div className="col-lg-7">
                                <div className="about-text">
                                    <h4></h4>
                                    <button class="f41101cd39" aria-expanded="false" data-testid="wishlist-button" fdprocessedid="ic4fu9"><span data-testid="wishlist-icon" class="b6dc9a9e69 c422d77911 ec1b6253a6" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"></path></svg></span></button>
                                    <div>
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
    </div>
                                    <h5 style={{color: "blue", fontWeight: "bold"}}>{product.productName}</h5>


                                    <h6 className="dark-color" style={{ color: "black" }}></h6>Product Type<h6 class="dark-color"> {product.productType}</h6>
                                    <h6 className="dark-color" style={{ color: "black" }}></h6>Product Code<h6 class="dark-color"> {product.pc}</h6>
                                    <h6 className="dark-color" style={{ color: "black" }}></h6>Product UPC code<h6 class="dark-color"> {product.uc}</h6>
                                   
                                    <h6 className="dark-color" style={{ color: "black" }}></h6>Price<h6 class="dark-color"> {product.amount}</h6>
                                   
                                    <div className="btn-bar">
                                        <td> <Link to={"/viewPRODUCT/" + product._id}><button className='btn btn-primary'>Feedback</button></Link> </td>

                                        <td> <Link to={"/viewPRODUCT/" + product._id}><button className='btn btn-success'>View More</button></Link> </td>
                                        <td>

                                            <a href="http://localhost:3000/cart" >
                                                <button className="btn btn-warning" type="submit">ADD TO CART</button></a></td>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center ">
                                <div className="about-img">
                                    <img className='photo' src={product.image} />

                                </div>
                            </div>
                            <br>
                            </br>
                        </div>


                    ))}
                </section>

            </div>
        </div>
    )
}
export default ProductTable;