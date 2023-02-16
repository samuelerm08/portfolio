const porfolio = [

    {    
        title: "Sistema Web de Empleados",
        description: "Sistema de gestión de empleados (CRUD)",
        tech: "ASP.MVC | C# | HTML | CSS | Azure App Service | Azure SQL",
        github: "https://github.com/samuelerm08/sln-SistemaWeb-Empleados.git",
        demo: "https://sistemawebempleados.azurewebsites.net/"    
        
    },
    {        
        title: "API Provincias",
        description: "Proyecto final",
        github: "https://github.com/samuelerm08/sln_WEBAPI_Final.git",
        demo: ""
    },
    {        
        title: "Sistema de Carga de Pacientes",
        description: "Proyecto para bootcamp",
        github: "https://github.com/samuelerm08/sln-Integrador-Continuacion.git",
        demo: ""
    },
    {        
        title: "Catalogo Web",
        description: "Proyecto académico de Catalogo de Artículos en razor pages",
        github: "https://github.com/samuelerm08/sln-SistemaWeb-Empleados.git",
        demo: ""
    }
]
const s = document.getElementById("side-bar");
const btn = document.getElementById("burger-button");
const m = document.querySelector("main");

function MostrarProyectos() {

    let uList = document.getElementById('ul-projects');

    porfolio.map((item) => {

        let newItem = 
        ` 
            <li id="list-item">
                <div class="div-project">
                        <h4>${item.title}</h4>                    
                        <p>${item.description}</p>
                        <p id="p-tech">${item.tech}</p> 
                    <div>
                        <a href="${item.github}">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="${item.demo}">
                            <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                        </a>   
                    </div>                                                                            
                </div> 
            </li>                                                                                                                                                                    
        `
        uList.innerHTML += newItem;
    });
}

function DesplegarAside() {

    let sn = document.getElementById("side-nav");

    if (!(s.classList.toggle('active'))) {
        btn.style.transform = "rotateZ(0deg)";
        btn.style.transition = "0.3s ease-in";

        m.style.filter = "blur(0px)";
        m.style.overflow = "scroll";
    }

    else {
        btn.style.transform = "rotateZ(-90deg)";
        btn.style.transition = "0.3s ease-in";

        sn.style.display = "flex";

        m.style.position = "relative";
        m.style.filter = "blur(5px)";
        m.style.zIndex = "-2";
        m.style.overflow = "hidden";
    }
}


