import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './Product.css';

function ProductTable() {

    const [products, setProducts] = useState([]);

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


    const deleteProduct = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Product/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Product deleted")
                // getHotels()
            }
        })
}    }

    return (
        
      <div className="container">

        <a href="http://localhost:3000/"><button class="abc" type="button">Products Details</button> </a> <br/> 
        <br/><br/>
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">product Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">product code</th>
                    <th scope="col">upc code</th>
                    <th scope="col">Description</th>
                    <th scope="col">Best by</th>
                    <th scope="col">date</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((Product , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Product.productName}</td>
                                <td>{Product.productType}</td>
                                <td>{Product.amount}</td>
                                <td>{Product.pc}</td>
                                <td>{Product.uc}</td>
                                <td>{Product.description}</td>
                                <td>{Product.fdate}</td>
                                <td>{Product.ldate}</td>
                                <td> <Link to={"/all-table/updatePRODUCT/"+Product._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteProduct(Product._id)}} className='btn btn-danger'>Delete </button> </td>
                            </tr>
                        )
                    })
                }

            <a href="/reportProduct" >
            <button className="gen_btn" type="submit" >
            Generate pdf
            </button></a>

            </tbody>
        </table>
        </div>
    )
}

export default ProductTable;