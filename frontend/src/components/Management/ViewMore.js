// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Product.css'



const Viewmore = (props) => {

    const { id } = useParams();
    const Navigate = useNavigate()
    const [productName, setproductName] = useState("");
    const [productType, setproductType] = useState("");
    const [amount, setamount] = useState("");
    const [pc, setpc] = useState("");
    const [uc, setuc] = useState("");
    const [description, setdescription] = useState("");
    const [fdate, setfdate] = useState("");
    const [ldate, setldate] = useState("");
    const [image, setimage] = useState("");
    const [formValues, setFormValues] = useState({

        productName: "",
        productype: "",
        amount: "",
        pc: "",
        uc: "",
        description: "",
        fdate: "",
        ldate: "",
        image: ""
    });





    // Load data from server and reinitialize event form  
    useEffect(() => {
        axios
            .get(
                `http://localhost:8070/product/get/${id}`


            )
            .then((res) => {
                const { productName, productType, amount, pc, uc, description, fdate, ldate, image } = res.data.product;
                console.log(productName)
                console.log(productType)
                console.log(amount)
                console.log(pc)
                console.log(uc)
                console.log(description)
                console.log(fdate)
                console.log(ldate)
                console.log(image)

                setproductName(productName)
                setproductType(productType)
                setamount(amount)
                setpc(pc)
                setuc(uc)
                setdescription(description)
                setfdate(fdate)
                setldate(ldate)
                setimage(image)


            })
            .catch((err) => console.log(err));
    }, []);
    function sendData(e) {
        e.preventDefault();

        const newproduct = {


            productName,
            productType,
            amount,
            pc,
            uc,
            description,
            fdate,
            ldate,
            image

        }
        Navigate('/bookEVENT')

    }
    // Return event form
    return (
        <div className="container">
            <h4 className="text-center" style={{ color: "black", fontWeight: "bold" }}>
                View More Details
            </h4>


            <div className="row">

                <div className="col-md-3">
                    <div className="image">
                        <img src={image} className="avatar img-circle img-thumbnail" alt="avatar" />
                    </div>

                </div>
                <div className="col-md-9 personal-info">





                    <form className="form" onSubmit={sendData} >
                        <br /><br />

                        <h6 className="user-name border" style={{ color: "blue", fontWeight: "bold" }}> Product Name {productName}</h6>
                        <h6 className="user-name border">Product Type {productType}</h6>

                        <h6 className="user-name border">Price(Rs): {amount}</h6>
                        <h6 className="user-name border">Product Code: {pc}</h6>
                        <h6 className="user-name border">UPC Code: {uc}</h6>

                        <h6 className="user-name border">{description}</h6>


                        <div className="d-grid col-8 mx-10">
                            <br /><br />
                            <a href="http://localhost:3000/bookEVENT" >
                                <button className="btn btn-warning" type="submit">ADD TO CART</button></a>

                        </div>
                    </form>



                </div>
            </div>

        </div>

    );
}

export default Viewmore;