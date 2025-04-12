


export default function Header() {
    return (
        <>
            <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center" 
                style={
                    { 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#175207',
                        color: '#FFFFFF',
                        height: '100px',
                        padding: '0 50px'

                    }
                }
            >
                <h1 className="text-2xl font-bold">Mi Aplicación</h1>
                <nav>
                    <ul className="flex space-x-4"
                        style={
                            { 
                                display: 'flex',
                                gap: '16px',
                                listStyleType: 'none',
                                margin: 0,
                                padding: 0,
                                boxSizing: "border-box",
                                flexDirection: 'row',
                                textDecoration: 'none',

                            }
                        }
                    >
                        <li><a style={{textDecoration: 'none', color: 'white'}} href="#" className="hover:text-gray-400">Inicio</a></li>
                        <li><a style={{textDecoration: 'none', color: 'white'}} href="#" className="hover:text-gray-400">Servicios</a></li>
                        <li><a style={{textDecoration: 'none', color: 'white'}} href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}