import React , {Component} from "react";

import {Link } from "react-router-dom";

class  Navui extends Component
{
    render()
    {
        return(
            <React.Fragment>

<Link class="dropdown-item" to="/home">Navbar</Link>
            
             <div class="collapse navbar-collapse" id="collapsibleNavId">
                 <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                     <li class="nav-item active">
                         <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                     </li>
                     
                     <li class="nav-item">
                         <Link class="nav-link" to="#">Link</Link>
                     </li>

                 </ul>
                
             </div>

            </React.Fragment>

        )
    }
};

export default Navui;