import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportProduct() {

    //generate pdf-----------------------------

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Event Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

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
                alert("product deleted")
              
            }
        })
}    }

return (
        
      <div ref={docToPrint}>
      <table class="table">
          <thead>
              <tr>

                  <th scope='col'>No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Type</th>
                    <th scope="col">Product Code</th>
                    <th scope="col">Price</th>
                    <th scope="col">Best by</th>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                  
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
                              <td>{Product.pc}</td>
                              <td>{Product.amount}</td>
                              <td>{Product.fdate}</td>
                              <td>{Product.ldate}</td>
                              <td>{Product.description}</td>
                            
                              
                          </tr>
                      )
                  })
              }

          <button className="newCustomer_btn" onClick={printDocument}>
          Download PDF
          </button>

          </tbody>
      </table>
      </div>
    
  )
}

export default ReportProduct;
