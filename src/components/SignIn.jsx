import { Button } from '@mui/material';
import { auth } from '../firebase';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider(auth);
    signInWithPopup(auth, provider);
}

const SignIn = () => {
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
                }}
                variant="contained"
                startIcon={< GoogleIcon />}
                onClick={GoogleSignIn}
            >Sign In with Google
            </Button>
        </div >
    )
}

export default SignIn