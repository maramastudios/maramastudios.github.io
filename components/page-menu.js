let pageMenu = `
    <button id="menu-button" aria-label="Menu Button">
        <svg>
            <use href="assets/svg/menu.svg#menu"/>
        </svg>
    </button>
    <button id="theme-switch" aria-label="Theme Switch">
        <svg>
            <use href="assets/svg/theme.svg#theme"/>
        </svg>
    </button>
        <nav id="menu">
            <div class="spacer"></div>
            <ul>
                <li class="nav-item"><a href="index.html">Home</a></li>
                <li class="nav-item"><a href="team.html">Our Team</a></li>
            </ul>
        </nav>
`;

document.getElementById("page-menu").innerHTML = pageMenu;
