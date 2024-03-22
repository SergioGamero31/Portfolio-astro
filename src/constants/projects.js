import TOOLS from "./tools"

const PROJECTS = [
    {
        title: "Tasky",
        description: "Es una aplicación de gestión de proyectos. Su interfaz intuitiva permite crear tableros personalizados, asignar tareas y colaborar con los miembros de tu equipo de manera eficiente.",
        image: {
            src: "/assets/tasky.avif",
            alt: "Imagen del proyecto Tasky",
            loading: "eager",
            order: "md:order-2"
        },
        demo: "https://tasky-ochre.vercel.app/",
        github: "",
        tags: [TOOLS.REACT, TOOLS.NODE, TOOLS.EXPRESS, TOOLS.MONGO, TOOLS.TAILWIND] 
    },
    {
        title: "Symphony",
        description: "Un reproductor de música que ofrece una interfaz moderna y fácil de usar, permite a los usuarios explorar y reproducir canciones de sus artistas favoritos.",
        image: {
            src: "/assets/symphony.avif",
            alt: "Imagen del proyecto Symphony",
            loading: "lazy",
            order: ""
        },
        demo: "https://symphony-nine.vercel.app/",
        github: "https://github.com/SergioGamero31/Symphony",
        tags: [TOOLS.VUE, TOOLS.PINIA, TOOLS.TAILWIND]
    },
    {
        title: "Timeless",
        description: "Timeless es una tienda de ropa en línea que permite a los usuarios explorar y simular el proceso de compra de moda desde la comodidad de sus dispositivos. Desde la selección de productos hasta la simulación de pago.",
        image: {
            src: "/assets/timeless.avif",
            alt: "Imagen del proyecto Timeless",
            loading: "lazy",
            order: "md:order-2"
        }, 
        demo: "https://timeless-navy.vercel.app/",
        github: "https://github.com/SergioGamero31/Timeless",
        tags: [TOOLS.VUE, TOOLS.PINIA, TOOLS.TAILWIND]
    }
]

export default PROJECTS