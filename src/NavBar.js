import React from "react";
function NavBar(){
    return(<div>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white"><a class="nav-link text-white" href="https://tnyima19.github.io/Assignment1/">Art Portfolio</a></h4>
                    <h4 class="text-white"><a class="nav-link text-white" href="https://github.com/tnyima19/CountyDownty-2">CountyDownty</a></h4>
                </div>
            </div>
        <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <li><a classs="nav-link" href="https://github.com/tnyima19/Calculate-Business-Success-Chance">GitHub</a>
        </li>
        </nav>
        </div>
       
    </div>);
};

export default NavBar;
