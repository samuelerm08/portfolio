const porfolio = [

    {
        id: 1,
        title: "Sistema de Carga de Pacientes",
        description: "Proyecto para bootcamp",
        github: "https://github.com/samuelerm08/sln-Integrador-Continuacion.git"
    },
    {
        id: 2,
        title: "API Provincias",
        description: "Proyecto final",
        github: "https://github.com/samuelerm08/sln_WEBAPI_Final.git"
    },
    {
        id: 3,
        title: "Sistema de Web Empleados (CRUD)",
        description: "Proyecto para bootcamp",
        github: "https://github.com/samuelerm08/sln-SistemaWeb-Empleados.git"
    },
    {
        id: 4,
        title: "Catalogo Web",
        description: "Proyecto académico de Catalogo de Artículos en razor pages",
        github: "https://github.com/samuelerm08/sln-SistemaWeb-Empleados.git"
    }
]

function MostrarProyectos() {

    let tb = document.getElementById('t-b');

    porfolio.map((item) => {

        let rows = `<tr>                    
                    <td>${item.title}</td>                       
                    <td>${item.description}</td>
                    <td><a href="${item.github}">Ver Repositorio</a></td>
                   <tr>`
        tb.innerHTML += rows;
    });
}

function DesplegarAside() {

    let s = document.getElementById("side-bar");
    let sn = document.getElementById("side-nav");
    let m = document.querySelector("main");
    let b = document.querySelector("html");

    if (s.style.visibility != "visible") {
        
        s.style.visibility = "visible";
        s.style.transform = "translateX(0px)";
        s.style.transition = "cubic-bezier(0.68, -0.55, 0.27, 1.55)";

        m.style.position = "relative";
        m.style.filter = "blur(5px)";
        m.style.zIndex = "-2";

        sn.style.display = "flex";
    }

    else {
        s.style.visibility = "hidden";
        s.style.transform = "translateX(100px)";

        m.style.position = "absolute";
        m.style.filter = "none";

        sn.style.display = "none";
    }
}
