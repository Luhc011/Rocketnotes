import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Notes';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'

export function Home() {
	return (
		<Container>
			<Brand>
				<h1>RocketNotes</h1>
			</Brand>

			<Header />

			<Menu>
				<li><ButtonText title="All" isActive /></li>
				<li><ButtonText title="ReactJS"/></li>
				<li><ButtonText title="NodeJS"/></li>
			</Menu>

			<Search>
				<Input placeholder="Search by Title" icon={FiSearch} />
			</Search>

			<Content>
				<Section title="My Notes">
					<Note data={{
						title: 'React Modal',
						tags: [
							{id: '1', name: 'react'},
							{id: '2', name: 'rocketseat'}
						] 
					}}/>

				</Section>

			</Content>

			<NewNote>
				<FiPlus />
				New Note
			</NewNote>

		</Container>
	)
}