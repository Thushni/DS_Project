import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

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

  function sendData(e) {
    e.preventDefault();

    const newProduct = {

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

    axios.post("http://localhost:8070/product/addPRODUCT", newProduct).then((res) => {
      alert("Product Added")
      console.log(res.data)
      Navigate('/allPRODUCT-table')

    }).catch((err) => {
      alert(err)
    })
  }

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
            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter product name" onChange={(e) => {

              setproductName(e.target.value);

            }} required />


          </div>


          <div className="col-md-6">
            <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Product Category</label>
            <select className="form-select" id="validationCustom04" onChange={(e) => {

              setproductType(e.target.value);

            }} required>
              <option selected disabled >Choose...</option>
              <option>Cream</option>
              <option>Oil</option>

            </select>

          </div>



          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter price" onChange={(e) => {

              setamount(e.target.value);

            }} required />

          </div>

          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Code</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="" onChange={(e) => {

              setpc(e.target.value);

            }} required />

          </div>
          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>UPC Code</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="" onChange={(e) => {

              setuc(e.target.value);

            }} required />

          </div>

          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Description</label>
            <textarea className="form-control" id="validationCustom01" rows="2" cols="100" placeholder="Enter here..." onChange={(e) => {

              setdescription(e.target.value);

            }} required>
            </textarea>

          </div>
          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Best By</label>
            <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter Best By" onChange={(e) => {

              setfdate(e.target.value);

            }} required />

          </div>
          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Date First Available</label>
            <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter Best By" onChange={(e) => {

              setldate(e.target.value);

            }} required />

          </div>

          <div className="col-md-12">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Product Image</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Select Image" onChange={(e) => {

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
  )
}