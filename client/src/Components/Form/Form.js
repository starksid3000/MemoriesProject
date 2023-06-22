import React, { useState } from "react";
import FileBase from "react-file-base64";
import {
    StyledForm,
    StyledPaper,
    StyledFileInput,
    StyledButton,
    StyledRoot,
} from "../Form/Style";
import { Typography, TextField, Button } from "@mui/material";
const Form = () => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
    });
    const handleSubmit = () => { };
    const clear = () => { };
    return (
        <StyledRoot>
            <StyledPaper>
                <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">creating a memorie</Typography>
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        fullWidth
                        value={postData.creator}
                        onChange={(e) =>
                            setPostData({ ...postData, creator: e.target.value })
                        }
                    />
                    <TextField
                        name="title"
                        variant="outlined"
                        label="title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) =>
                            setPostData({ ...postData, title: e.target.value })
                        }
                    />
                    <TextField
                        name="message"
                        variant="outlined"
                        label="message"
                        fullWidth
                        value={postData.message}
                        onChange={(e) =>
                            setPostData({ ...postData, message: e.target.value })
                        }
                    />
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />
                    <div>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                setPostData({ ...postData, selectedFile: base64 })
                            }
                        />
                    </div>
                    <StyledButton
                        variant="contained"
                        size="small"
                        type="submit"
                        fullWidth
                    >
                        SUBMIT{" "}
                    </StyledButton>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={clear}
                        fullWidth
                    >
                        Clear{" "}
                    </Button>
                </StyledForm>
            </StyledPaper>
        </StyledRoot>
    );
};
export default Form;
