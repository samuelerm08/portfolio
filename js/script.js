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

const s = document.getElementById("side-bar");
const btn = document.getElementById("burger-button");
var m = document.querySelector("main");

function DesplegarAside() {

    let sn = document.getElementById("side-nav");

    if (!(s.classList.toggle('active'))) {
        btn.style.transform = "rotateZ(0deg)";
        btn.style.transition = "0.5s ease-in";
        
        m.style.filter = "blur(0px)";
    }
    else {
        btn.style.transform = "rotateZ(-90deg)";
        btn.style.transition = "0.5s ease-in";

        sn.style.display = "flex";

        m.style.position = "relative";
        m.style.filter = "blur(5px)";
        m.style.zIndex = "-2";
    }
}

document.onclick = function (e) {
    if (e.target.id !== 'burger-button') {
        s.classList.remove('active');
        btn.style.transform = "rotateZ(0deg)";
        btn.style.transition = "0.5s ease-in";
        m.style.filter = "blur(0px)";
    }
}
