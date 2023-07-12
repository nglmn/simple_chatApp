import { useState } from "react";
import { Button, Stack, TextField, Container } from "@mui/material";
import { auth, db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import SendIcon from '@mui/icons-material/Send';


const SendMessage = () => {
    const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, displayName } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
    }
    return (
        <form onSubmit={sendMessage}>
            <Container
                component='div'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    bottom: 0,
                }}>
                <Stack direction="row" spacing={2}
                    sx={{
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <TextField
                        sx={{
                            width: '100%',
                            backgroundColor: 'white'
                        }}
                        id="outlined-basic"
                        label="Send message"
                        type='text'
                        variant="outlined"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <Button
                        sx={{
                            ml: 1,
                        }}
                        type='submit'
                        size="medium"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >Send
                    </Button>
                </Stack>
            </Container>
        </form>
    )
}

export default SendMessage