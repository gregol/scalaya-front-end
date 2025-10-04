import { ZeoMartHeader } from '@/ui/organisms/ZeoMartHeader';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ZeoMartHeader 
        cartCount={2}
        cartTotal="$200.99"
        wishlistCount={5}
        isSignedIn={false}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-16 mt-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-textDark mb-4">
            🎯 Mega Menu Dropdown Demo
          </h1>
          <p className="text-textLight mb-8 text-lg">
            Pasa el cursor sobre los items de navegación (Home, Shop, Pages, Blog) para ver el mega menú desplegable.
          </p>
          
          <div className="space-y-6">
            {/* Features */}
            <div className="border-l-4 border-primary-500 pl-4">
              <h2 className="font-semibold text-textDark text-xl mb-3">✨ Características Implementadas</h2>
              <ul className="list-disc list-inside text-textLight space-y-2">
                <li><strong>4 tipos de menú</strong>: Home, Shop, Pages, Blog - cada uno con contenido específico</li>
                <li><strong>3 columnas por menú</strong> con títulos y listas de enlaces</li>
                <li><strong>Hover interactivo</strong>: Aparece al pasar el cursor y desaparece al salir</li>
                <li><strong>Overlay semi-transparente</strong> oscuro detrás del menú</li>
                <li><strong>Animación del icono</strong>: El icono dropdown rota 180° cuando el menú está abierto</li>
                <li><strong>Diseño fiel a Figma</strong>: Espaciado, colores y tipografía exactos</li>
              </ul>
            </div>

            {/* Menu Types */}
            <div className="border-l-4 border-purple-800 pl-4">
              <h2 className="font-semibold text-textDark text-xl mb-3">📋 Contenido de Cada Menú</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-textDark mb-2">🏠 Home Menu</h3>
                  <p className="text-sm text-textLight">
                    Quick Links • Categories • Support
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-textDark mb-2">🛒 Shop Menu</h3>
                  <p className="text-sm text-textLight">
                    Shop Categories • Popular Products • Shopping Tools
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-textDark mb-2">📄 Pages Menu (según Figma)</h3>
                  <p className="text-sm text-textLight">
                    Basic Pages • Vendor Pages • Account Dashboard
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-textDark mb-2">📝 Blog Menu</h3>
                  <p className="text-sm text-textLight">
                    Blog Categories • Popular Posts • Resources
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="border-l-4 border-accent-mint pl-4">
              <h2 className="font-semibold text-textDark text-xl mb-3">⚙️ Detalles Técnicos</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-textDark mb-1">Componentes Creados:</h4>
                  <ul className="list-disc list-inside text-textLight space-y-1">
                    <li><code>MegaMenu</code> (organism)</li>
                    <li><code>MegaMenuColumn</code> (molecule)</li>
                    <li><code>NavItemWithDropdown</code> (molecule)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-textDark mb-1">Tipografía:</h4>
                  <ul className="list-disc list-inside text-textLight space-y-1">
                    <li>Títulos: Jost 18px Medium</li>
                    <li>Links: Jost 16px Regular</li>
                    <li>Line height: 35px (2.1875)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-textDark mb-1">Layout:</h4>
                  <ul className="list-disc list-inside text-textLight space-y-1">
                    <li>Grid de 3 columnas</li>
                    <li>Gap de 187px entre columnas</li>
                    <li>Padding: 40px vertical, 50px horizontal</li>
                    <li>Max width: 1920px con padding lateral de 260px</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-textDark mb-1">Estados:</h4>
                  <ul className="list-disc list-inside text-textLight space-y-1">
                    <li>Hover: texto cambia a primary-500</li>
                    <li>Background overlay: textDark/50</li>
                    <li>Posición: fixed desde top: 145px</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="font-semibold text-textDark text-xl mb-3">💻 Ejemplo de Uso</h2>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
{`import { NavItemWithDropdown } from '@/ui/molecules';

<NavItemWithDropdown 
  label="Pages" 
  href="/pages" 
  menuType="pages"
  isActive={true}
/>

// menuType: 'home' | 'shop' | 'pages' | 'blog'`}
              </pre>
            </div>

            {/* Instructions */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h2 className="font-semibold text-textDark text-xl mb-3">👆 Instrucciones</h2>
              <ol className="list-decimal list-inside text-textLight space-y-2">
                <li>Pasa el cursor sobre cualquiera de los 4 items de navegación principal</li>
                <li>El mega menú aparecerá con 3 columnas de contenido</li>
                <li>Haz clic en cualquier enlace para navegar</li>
                <li>El menú se cerrará automáticamente al mover el cursor fuera</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

