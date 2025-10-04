# Figma Assets

Este directorio contiene todos los assets exportados del diseño de Figma **ZeoMart-Theme**.

## Archivo de Figma

- **Nombre**: ZeoMart-Theme
- **File Key**: `qge65aM5BahVP9i6rcKAt0`
- **Última modificación**: 2 de octubre, 2025

## Assets Disponibles

### Iconos de Navegación (SVG)

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `icon-arrow-prev.svg` | 8x14px | Botón anterior del slider |
| `icon-arrow-next.svg` | 8x14px | Botón siguiente del slider |
| `icon-dropdown.svg` | 9x5px | Indicador dropdown genérico |
| `icon-dropdown-home.svg` | 9x5px | Dropdown menú Home |
| `icon-dropdown-shop.svg` | 9x5px | Dropdown menú Shop |
| `icon-dropdown-pages.svg` | 9x5px | Dropdown menú Pages |
| `icon-dropdown-blog.svg` | 9x5px | Dropdown menú Blog |

### Iconos de Usuario (SVG)

| Archivo | Tamaño | Uso |
|---------|--------|-----|
| `icon-heart.svg` | 18x16px | Wishlist / Favoritos |
| `icon-profile.svg` | 15x19px | Perfil de usuario |
| `icon-search.svg` | 17x17px | Búsqueda |
| `icon-shopping-cart-1.svg` | 20x20px | Carrito de compras (variante 1) |
| `icon-shopping-cart-2.svg` | 20x20px | Carrito de compras (variante 2) |
| `icon-shopping-cart-3.svg` | 20x20px | Carrito de compras (variante 3) |

### Imágenes (PNG)

| Archivo | Dimensiones | Uso |
|---------|-------------|-----|
| `hero-sport-equipment.png` | 1956x976px | Imagen hero del slider principal |

## Uso en el Código

### Importar iconos en React/Next.js

```tsx
import Image from 'next/image';

<Image
  src="/assets/figma/icon-heart.svg"
  alt="Wishlist"
  width={18}
  height={16}
/>
```

### Importar la imagen hero

```tsx
import Image from 'next/image';

<Image
  src="/assets/figma/hero-sport-equipment.png"
  alt="Sport Equipment"
  fill
  className="object-cover"
  priority
/>
```

## Actualización de Assets

Para actualizar los assets desde Figma:

1. Asegúrate de tener acceso al archivo de Figma
2. Usa las herramientas MCP de Figma en Cursor
3. Ejecuta `mcp_Framelink_Figma_MCP_download_figma_images` con el file key

## Notas

- Todos los SVG están optimizados para web
- Las imágenes PNG están exportadas a 2x para pantallas retina
- Los iconos mantienen las proporciones originales del diseño de Figma
- Colores y estilos deben aplicarse via CSS/Tailwind cuando sea necesario

---

Para más información sobre el sistema de diseño completo, consulta `/DESIGN_SYSTEM.md`

