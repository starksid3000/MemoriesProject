import React, {useState} from 'react'
import { StyledForm, StyledPaper, StyledFileInput, StyledButton } from './Styles';
import { Typography, TextField } from '@mui/material';
const Form = ()=>{
    const [postData, setPostData ] = useState({creator:'', title:'',message:'',tags:'',selectedFile:''})
    const handleSubmit = () =>{

    }
  return(
    <StyledPaper>
        <form autoComplete='off' noValidate StyledForm onSubmit={handleSubmit}>
           <Typography variant='h6'>creating a memorie</Typography> 
           <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator:e.target.value})}/>
        </form>
    </StyledPaper>
  )  
}
export default Form;