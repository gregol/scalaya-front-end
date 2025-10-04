# ZeoMart Design System

Sistema de diseño basado en el archivo de Figma **ZeoMart-Theme**

## 🎨 Colores

### Colores Principales

| Color | Variable | Hex | Uso |
|-------|----------|-----|-----|
| **Primary Yellow** | `primary-500` | `#F5C34B` | Botones principales, CTAs, acentos |
| **Navy Dark** | `navy-900` | `#041E42` | Texto principal, headers |
| **Purple Primary** | `purple-800` | `#443297` | Backgrounds, elementos destacados |
| **Text Light** | `textLight` | `#626974` | Texto secundario, placeholders |

### Paleta Extendida

#### Primary (Yellow)
- `primary-50`: `#fefcf3`
- `primary-100`: `#fef9e7`
- `primary-200`: `#fdf2c4`
- `primary-300`: `#fce89d`
- `primary-400`: `#f8d96b`
- `primary-500`: `#f5c34b` ⭐
- `primary-600`: `#eba92f`
- `primary-700`: `#d18a1f`
- `primary-800`: `#a96d1d`
- `primary-900`: `#89591d`

#### Purple
- `purple-50`: `#f5f3fb`
- `purple-800`: `#443297` ⭐
- `purple-950`: `#251b4f`

#### Backgrounds
- `background-white`: `#FFFFFF`
- `background-purple`: `#443297`
- `background-yellow`: `#F5C34B`
- `background-dark`: `#112137`

#### Accents
- `accent-mint`: `#86F1DF` (Tags, badges)
- `accent-gray`: `#D6D6D6` (Borders, dividers)

## 📝 Tipografía

### Familias de Fuentes

```css
--font-jost: 'Jost', sans-serif;
--font-poppins: 'Poppins', sans-serif;
--font-inter: 'Inter', sans-serif;
```

### Escala Tipográfica

| Clase | Fuente | Tamaño | Peso | Line Height | Uso |
|-------|--------|--------|------|-------------|-----|
| `text-hero` | Jost | 50px | 400 | 1.445 | Títulos Hero |
| `text-logo` | Poppins | 24px | 700 | 1.5 | Logo |
| `text-lg` | Jost | 18px | 500 | 1.45 | Títulos de sección |
| `text-nav` | Jost | 16px | 500 | 1.75 | Navegación |
| `text-body` | Jost | 15px | 400 | 1.467 | Texto de cuerpo |
| `text-ui-label` | Inter | 14px | 700 | 1.571 | Labels UI |
| `text-tag` | Jost | 13px | 400 | 1.692 | Tags, badges |
| `text-xs` | Inter | 8px | 700 | 1.21 | UI pequeños |

### Clases Personalizadas

```css
.text-hero { /* Hero headlines */ }
.text-logo { /* Brand logo */ }
.text-nav { /* Navigation items */ }
.text-body { /* Body copy */ }
.text-tag { /* Tags and labels */ }
.text-ui-label { /* UI labels */ }
```

## 🔘 Componentes

### Botones

#### Primary Button
```tsx
<button className="btn-primary">
  Shop Now
</button>
```

**Estilos:**
- Background: `primary-500`
- Padding: `35px` horizontal, `15px` vertical
- Border radius: `6px`
- Font: Jost 15px Medium
- Shadow: `0px 10px 35px rgba(17, 33, 55, 0.1)`

#### Icon Button
```tsx
<button className="btn-icon">
  <Icon />
</button>
```

**Estilos:**
- Size: `50x50px`
- Border radius: `50%` (circular)
- Background: `white`
- Shadow: `button`

### Input Fields

#### Search Input
```tsx
<input className="input-search" placeholder="Search products…" />
```

**Estilos:**
- Height: `50px`
- Border radius: `6px`
- Background: `white`
- Font: Jost 15px Regular
- Placeholder: `textLight`

### Cards

#### Product Card
```tsx
<div className="card">
  {/* Content */}
</div>
```

**Estilos:**
- Background: `white`
- Border radius: `6px`
- Shadow: `button`

## 📐 Spacing

```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
```

## 🎯 Border Radius

```css
--radius-sm: 4px
--radius-md: 6px (default)
--radius-lg: 8px
```

## 🌟 Shadows

```css
--shadow-button: 0px 10px 35px 0px rgba(17, 33, 55, 0.1)
```

## 🖼️ Assets

Todos los assets están en `/public/assets/figma/`:

### Iconos
- `icon-arrow-prev.svg` - Flecha anterior (slider)
- `icon-arrow-next.svg` - Flecha siguiente (slider)
- `icon-dropdown.svg` - Dropdown genérico
- `icon-dropdown-home.svg` - Dropdown menú home
- `icon-dropdown-shop.svg` - Dropdown menú shop
- `icon-dropdown-pages.svg` - Dropdown menú pages
- `icon-dropdown-blog.svg` - Dropdown menú blog
- `icon-heart.svg` - Wishlist
- `icon-profile.svg` - Usuario/Cuenta
- `icon-search.svg` - Búsqueda
- `icon-shopping-cart-1.svg` - Carrito (variante 1)
- `icon-shopping-cart-2.svg` - Carrito (variante 2)
- `icon-shopping-cart-3.svg` - Carrito (variante 3)

### Imágenes
- `hero-sport-equipment.png` - Imagen hero del slider (1956x976)

## 📦 Componentes de Figma

### Header (HEADER-1)
- Logo: "Zeomart."
- Search bar con categorías
- Navegación principal: Home, Shop, Pages, Blog
- Iconos de usuario: Wishlist, Account, Cart
- Navegación secundaria

### Slider
- Hero section con imagen de fondo
- Tag "Limited Edition"
- Título grande
- Descripción promocional
- CTA button "Shop Now"
- Controles de navegación (prev/next)
- Bullet points indicator

### Navigation Dropdown
- Tres columnas:
  - Basic Pages
  - Vendor Pages
  - Account Dashboard

## 🔧 Uso en Tailwind

### Ejemplos de Uso

```tsx
// Botón principal
<button className="bg-primary-500 text-textDark px-[35px] py-[15px] rounded-md shadow-button">
  Shop Now
</button>

// Texto hero
<h1 className="text-2xl text-textDark font-jost font-normal">
  Sport Essentials Yoga Mats, Weights & more
</h1>

// Tag
<span className="bg-accent-mint text-textDark text-sm px-[14px] py-1 rounded-md">
  Limited Edition
</span>

// Card de producto
<div className="card p-4">
  {/* Content */}
</div>
```

## 🎨 Estructura de Componentes Atomic Design

```
ui/
├── atoms/          # Elementos básicos (Button, Input, Badge, etc.)
├── molecules/      # Combinaciones simples (SearchBar, NavItem, etc.)
├── organisms/      # Componentes complejos (Header, Slider, ProductCard)
├── templates/      # Layouts de página
└── pages/          # Páginas completas
```

## 📱 Responsive Breakpoints

Siguiendo las convenciones de Tailwind CSS:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Desktop design width: **1920px**

## ✨ Animaciones

```css
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
```

## 🎯 Estados Interactivos

- **Hover**: Escala de botones, cambios de color
- **Focus**: Ring de color primary en inputs
- **Active**: Bullets activos en slider
- **Disabled**: Opacidad reducida

---

**Última actualización**: Basado en Figma file `qge65aM5BahVP9i6rcKAt0`
**Nodo de referencia**: `open_pages_nav` (262:27524)

