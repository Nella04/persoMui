import Delete from "@mui/icons-material/Delete";
import { Stack, Button } from "@mui/material";
import React from "react";
//import  from "@mui/material";


function Mui(){
    return(<div >
        <h1>essaie Mui</h1>
        <Stack spacing={2} direction="row">
            <Button variant="text" startIcon={<Delete/>}>text</Button>
        </Stack>
    </div>)
}


export default Mui;