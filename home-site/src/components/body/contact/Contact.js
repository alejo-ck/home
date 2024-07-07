import ContentBody from '../ContentBody'
import ContactInfoEntry from './ContactInfoEntry'

function Blog() {
    return (
      <ContentBody>
        <h1>Contact Info</h1>
        <ContactInfoEntry network="email" href="mailto:alejo.ck.official@gmail.com" displayString="alejo.ck.official@gmail.com" />
        <ContactInfoEntry network="github" href="https://github.com/alejo-ck/" displayString="alejo-ck Github" />
        <ContactInfoEntry network="linkedin" href="https://linkedin.com/in/alejandro-fonseca-904a365" displayString="Alejandro Fonseca LinkedIn Profile" />
      </ContentBody>
    );
}
  
export default Blog;