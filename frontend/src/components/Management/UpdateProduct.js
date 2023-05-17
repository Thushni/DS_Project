// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
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

  //onSubmit handler
  const onSubmit = (productObject) => {
    axios
      .put(
        `http://localhost:8070/product/updatePRODUCT/${id}`,
        productObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("product successfully updated");
          props.history.push("/AddProduct");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  
  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/product/get/${id}`

      )
      .then((res) => {
        const { productName, productType, amount, pc,uc, description, fdate, ldate,image } = res.data.hotel;
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

    axios.put(`http://localhost:8070/product/updatePRODUCT/${id}`, newproduct).then((res) => {
      alert("Product Updated")
      console.log(res.data)
      Navigate('/allPRODUCT-table')

    }).catch((err) => {
      alert(err)
    })

  }

  // Return event form
  return (
    <div className="container"
    style={{
      backgroundImage: "url(https://wallpapercave.com/wp/wp7488228.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}><br />


    <br />
    <div className="d-grid col-12 mx-10">

      <br></br>
    </div>
    <div className="container" style={{ backgroundColor: 'white', border: '10px solid gray', borderRadius: '20px' }}>

      <form className="row g-3 needs-validation" onSubmit={sendData} >

        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Name</label>
          <input value={productName} type="text" className="form-control" id="productName" placeholder="Enter product name" onChange={(e) => {

            setproductName(e.target.value);

          }} required />


        </div>


        <div className="col-md-6">
          <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Product Category</label>
          <select value={productType}className="form-select" id="validationCustom04" onChange={(e) => {

            setproductType(e.target.value);

          }} required>
            <option selected disabled >Choose...</option>
            <option>Cream</option>
            <option>Oil</option>

          </select>

        </div>



        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
          <input value={amount} type="text" className="form-control" id="validationCustom01" placeholder="Enter price" onChange={(e) => {

            setamount(e.target.value);

          }} required />

        </div>

        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Code</label>
          <input value={pc} type="text" className="form-control" id="validationCustom01" placeholder="Enter code" onChange={(e) => {

            setpc(e.target.value);

          }} required />

        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>UPC Code</label>
          <input  value={uc}type="text" className="form-control" id="validationCustom01" placeholder="Enter code" onChange={(e) => {

            setuc(e.target.value);

          }} required />

        </div>

        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Description</label>
          <textarea value={description} className="form-control" id="validationCustom01" rows="2" cols="100" placeholder="Enter here..." onChange={(e) => {

            setdescription(e.target.value);

          }} required>
          </textarea>

        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Best By</label>
          <input value={fdate} type="Date" className="form-control" id="validationCustom01" placeholder="Enter Best By" onChange={(e) => {

            setfdate(e.target.value);

          }} required />

        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Date First Available</label>
          <input value={ldate} type="Date" className="form-control" id="validationCustom01" placeholder="Enter Best By" onChange={(e) => {

            setldate(e.target.value);

          }} required />

        </div>

        <div className="col-md-12">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Image</label>
          <input value={image}type="text" className="form-control" id="validationCustom01" placeholder="Select Image" onChange={(e) => {

            setimage(e.target.value);

          }} required />


        </div>



        <div className="col-md-3">
          <button className="btn btn-primary" type="submit" style={{ width: '200px' }} >
            <a href="/allPRODUCT-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
            Submit</button>
          <br></br>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit" style={{ width: '200px' }} >
            <a href="/allPRODUCT-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
            Cancle</button>
          <br></br>
        </div>
        <div className="col-md-12">
          <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}></label>


        </div>
      </form>
    </div>
    <br></br>
    <div className="d-grid col-12 mx-10">

    </div>
    <br></br>
  </div>
  );
};


export default UpdateProduct;
