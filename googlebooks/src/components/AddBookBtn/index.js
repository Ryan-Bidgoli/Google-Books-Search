import React from "react";
import Button from "../Button";
import axios from "axios";
 
import { toast } from 'react-toastify';

function AddBookBtn (props) {
    console.log(props.books) 
        return (
          <div>
          <Button onClick={()=>{props.savebooks(props.books)}} className ="mr-4" type="primary" >
            Save Book
        </Button>
        </div>
        );
    
  }

  export default AddBookBtn;