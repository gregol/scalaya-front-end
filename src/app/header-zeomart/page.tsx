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
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-textDark mb-4">
            ZeoMart Header Showcase
          </h1>
          <p className="text-textLight mb-6">
            Esta página muestra el header completo de ZeoMart basado en el diseño de Figma.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-primary-500 pl-4">
              <h2 className="font-semibold text-textDark">Componentes incluidos:</h2>
              <ul className="list-disc list-inside text-textLight space-y-2 mt-2">
                <li>Logo "Zeomart." con tipografía Poppins</li>
                <li>Barra de búsqueda con dropdown de categorías</li>
                <li>Acciones de usuario: Wishlist, Account, Cart</li>
                <li>Navegación principal: Home, Shop, Pages, Blog</li>
                <li>Browse Categories con menú hamburguesa</li>
                <li>Navegación secundaria: Deal of the Day, Hot Deals, Best Sellers, New Arrivals</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-800 pl-4 mt-6">
              <h2 className="font-semibold text-textDark">Características:</h2>
              <ul className="list-disc list-inside text-textLight space-y-2 mt-2">
                <li>Background púrpura (#443297) del diseño original</li>
                <li>Indicador amarillo debajo del item activo</li>
                <li>Contador de items en el carrito y wishlist</li>
                <li>Iconos SVG del diseño de Figma</li>
                <li>Estados hover con transiciones suaves</li>
                <li>Espaciado y dimensiones exactas del diseño</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

