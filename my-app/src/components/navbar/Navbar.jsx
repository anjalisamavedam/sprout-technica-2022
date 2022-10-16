import "./Navbar.css";

function Navbar(){
    return(
       <div>
           <nav>
                <ul id="navbar">
                    <li>sprout</li>
                </ul>

           <div>
               <ul id="navbar">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="../mentor">Mentor</a></li>
                    <li><a href="../mentee">Mentee</a></li>
                    <li><a href="../matching">Matching</a></li>
               </ul>

           </div>
        </nav>

       </div>

    );
}

export default Navbar;