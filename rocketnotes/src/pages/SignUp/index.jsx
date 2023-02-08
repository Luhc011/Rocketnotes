import { FiUser ,FiMail, FiLock } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SignUp() {
	return (
		<Container>
			<Background />

			<Form>
				<h1>Rocket Notes</h1>
				<p>Application to save and manage your links</p>
				
				<h2>Create account</h2>

				<Input 
					placeholder="Name"
					type="text"
					icon={FiUser}
				/>

				<Input 
					placeholder="E-mail"
					type="email"
					icon={FiMail}
				/>

				<Input 
					placeholder="Password"
					type="password"
					icon={FiLock}
				/>

				<Button title="Register"/>

				<a href="#">
					back to login
				</a>				
			</Form>			
			
		</Container>
	)
}