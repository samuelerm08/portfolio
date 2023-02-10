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

    
}
