import { SocialIcon } from "react-social-icons"
import './Contact.css'

function ContactInfoEntry({network, href, displayString}) {
    return (
      <div className="ContactInfoEntryContainer">
          <div className="ContactInfoEntryElement">
          <SocialIcon network={network} href={href} />
          </div> 
          <div className="ContactInfoEntryElement">{displayString}
          </div>
      </div>
    );
}
  
export default ContactInfoEntry;