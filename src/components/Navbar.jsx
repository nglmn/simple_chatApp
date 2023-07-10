import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import GoogleButton from "react-google-button";

export const Navbar = () => {
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
			<GoogleButton />
			<Button
				variant="contained"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					borderRadius: 4,
					height: 50,
					m: 'auto',
				}}
			>Outlined
			</Button>

		</Box >
	)
}