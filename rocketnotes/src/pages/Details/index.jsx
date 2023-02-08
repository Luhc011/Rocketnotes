import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function Details () {
  
  return (

   <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete Note"></ButtonText>

          <h1>Intro to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel consequuntur est repudiandae
            laboriosam nihil maiores culpa deleniti, reiciendis porro ex molestias deserunt eaque 
            exercitationem excepturi laudantium dolor totam dolorum?
          </p>


          <Section title="Links">
            <Links>
              <li><a href="https://github.com/Luhc011" target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/holanda-lucas/" target="_blank">LinkedIn</a></li>
              <li><a href="#"></a></li>
            </Links>
          </Section>

          <Section title="Bookmarks">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Back" /> 
        </Content>
      </main>     
   </Container>
  )
}