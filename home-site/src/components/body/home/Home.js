import './Home.css'

function Home() {
    return (
      <div className='ContentBodyContainer'>
        <div className="image-container">
          <img className="HomeImage" src={process.env.PUBLIC_URL + '/cl_prompt.gif'}  alt={"Home"}/>
        </div>
      </div>
    );
}
  
export default Home;