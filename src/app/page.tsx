import Image from 'next/image';
import Link from 'next/link';
import LowPolyBackground from '@/components/LowPolyBackground'; // Importamos nuestro fondo

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* El fondo animado se renderiza aquí, en el fondo */}
      <LowPolyBackground/>

      {/* Contenedor para el contenido del "hero", posicionado encima del fondo */}
      <main className="relative z-10 flex items-center justify-center w-full h-full text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Columna de Información */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider">
                Camilo Cruz
              </h1>
              <p className="mt-4 text-lg md:text-2xl font-light text-gray-300">
                Desarrollador Web Frontend
              </p>
              <p className="mt-4 max-w-md mx-auto md:mx-0 text-gray-400">
                Me especializo en la construcción de interfaces de usuario interactivas y sitios web de alto rendimiento, fusionando código y diseño para crear experiencias digitales memorables.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link href="/#proyectos" className="border-2 border-white text-white font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                  Proyectos
                </Link>
                <Link href="/contacto" className="border-2 border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-gray-500 hover:text-white transition-colors duration-300">
                  Contacto
                </Link>
              </div>
            </div>

            {/* Columna de la Foto de Perfil */}
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Para el efecto "low poly" en la foto, necesitarás una imagen ya procesada.
                      Puedes crearla en Blender, Photoshop o con generadores online.
                      Por ahora, usamos una imagen normal con un borde que simula el estilo. */}
                <div className="absolute inset-0 border-2 border-gray-500 animate-pulse"></div>
                <Image
                  src="/images/foto.png" // Coloca tu foto en /public/images/
                  alt="Foto de perfil de Camilo Cruz"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full p-2"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}