import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SignOut = () => {
    signOut(auth)
}

const LogOut = () => {
    return (
        <div className={'flex justify-center'}>
            <Button
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    borderRadius: 4,
                    height: 50,
                    m: 'auto',
                    backgroundColor: 'white',
                    color: '#1A76D2',
                    marginRight: 3
                }}
                variant="contained"
                onClick={SignOut}
            >Log Out
            </Button>
        </div>
    )
}

export default LogOut