import logo from "./assets/react.svg"

function Navbar() {


    const opnbtn = () => {
        let navbtn = document.querySelector(".mobdiv");
        navbtn.style.left = "300px";
    }


    return (
        <>
            <div className="Navbar-wrapper">




                <div className="mobnav" id="mob-btn" onClick={opnbtn}> <p>___</p> <p>___</p> <p>___</p></div>

                <div className="mobdiv">


                </div>




                <div className="img-wrap">
                    <img src={logo}></img>
                </div>
                <div className="navigate-wrap">

                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Prodicts</a>
                    <a href="#">Contacts</a>
                    <a href="#">About Us</a>

                </div>
            </div>

        </>
    )
}

export default Navbar