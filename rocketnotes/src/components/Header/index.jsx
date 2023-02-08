import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

export function Header() {
	return (

		<Container>

			<Profile>
				<img 
					src="https://github.com/Luhc011.png" 
					alt="Github profile picture" 
				/>

				<div>
					<span>Welcome</span>
					<strong>Lucas Holanda</strong>
				</div>

			</Profile>

			<Logout>
				<RiShutDownLine />
			</Logout>

		</Container>
	)
}