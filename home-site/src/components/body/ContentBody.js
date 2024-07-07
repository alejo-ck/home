import './ContentBody.css'

function ContentBody(props) {
    return (
      <div className='ContentBodyContainer'>
        <div className='ContentBody'>
          {props.children}
        </div>
      </div>
    );
}

export default ContentBody;