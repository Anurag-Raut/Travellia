import React, { useState } from "react";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from "axios";





function HisCard({rows,array ,setdview,detailview,setrowNo,rowNo}) {

  

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'city', headerName: 'City', width: 260 },
  { field: 'buttonn', headerName: 'More Details', width: 260 ,

  renderCell: (params) => {
   function onClick(){
      const currentRow = params.row;
      setrowNo(currentRow.id);
      setdview(1);
    };
    
    return (
      
      <button style={{height:'70%'}} type="button" class="btn btn-dark"onClick={onClick}>Link</button>
    )
  }
},

]





  // rows.shift();
  // console.log(rows);
    // let {
        
     
    //   List1hook,
    //   List2hook,
    //   List3hook,
    //   List4hook,
    //   useremail,
    //   date,
    //   route1,
    //   route2,
    //   route3,
    //   route4,
      
      
    // } = prop;
    // if(data.useremail===user.email){
    return (
        <div class='Tablee' style={{ display:'flex',height:400, maxHeight: '70%', width: '100%' ,justifyContent:'center'}}>
          <div class="d-flex" style={{width:'70%'}}>
          <DataGrid
          
        
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />

          </div>
         
        </div>
      );
    // }
  }
export  default HisCard;


