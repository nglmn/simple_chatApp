import { Box } from "@mui/material"
import SignIn from "./SignIn";
import LogOut from './LogOut';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const Navbar = () => {

	const [user] = useAuthState(auth);
	console.log(user);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				width: '100%',
				height: 75,
				backgroundColor: '#1A76D2',
			}}>
			<h1
				style={{
					display: 'flex',
					margin: `0 auto`,
					color: 'white',
					marginLeft: 25,
					fontWeight: 'bold',
					fontSize: 40,
					fontFamily: 'Monospace',
					textAlign: 'center',
				}}
			>chat</h1>

			{
				user ? <LogOut /> : <SignIn />
			}

		</Box >
	)
}