# 🎯 Mega Menu Dropdown - Documentación

Sistema de menús desplegables de 3 columnas implementado según el diseño de Figma ZeoMart-Theme.

## 📦 Componentes

### MegaMenu (Organism)

Componente principal que renderiza el menú desplegable completo con overlay y contenedor.

**Props:**

```typescript
interface MegaMenuProps {
  type?: 'pages' | 'shop' | 'home' | 'blog';
  isOpen?: boolean;
  onClose?: () => void;
}
```

**Ubicación:** `src/ui/organisms/MegaMenu.tsx`

### MegaMenuColumn (Molecule)

Componente que renderiza una columna individual del menú con título y lista de enlaces.

**Props:**

```typescript
interface MegaMenuColumnProps {
  title: string;
  items: MenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
}
```

**Ubicación:** `src/ui/molecules/MegaMenuColumn.tsx`

### NavItemWithDropdown (Molecule)

Item de navegación con funcionalidad de dropdown integrada.

**Props:**

```typescript
interface NavItemWithDropdownProps {
  label: string;
  href: Route | string;
  menuType?: 'pages' | 'shop' | 'home' | 'blog';
  isActive?: boolean;
  className?: string;
}
```

**Ubicación:** `src/ui/molecules/NavItemWithDropdown.tsx`

## 🎨 Diseño

### Layout

```
┌─────────────────────────────────────────────────────┐
│  Header (height: 145px)                             │
└─────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────┐
│  Overlay (semi-transparent dark)                    │
│  ┌───────────────────────────────────────────────┐  │
│  │  MegaMenu Container                           │  │
│  │  ┌──────────┬──────────┬──────────┐          │  │
│  │  │ Column 1 │ Column 2 │ Column 3 │          │  │
│  │  │          │          │          │          │  │
│  │  │ • Link   │ • Link   │ • Link   │          │  │
│  │  │ • Link   │ • Link   │ • Link   │          │  │
│  │  │ • Link   │ • Link   │ • Link   │          │  │
│  │  └──────────┴──────────┴──────────┘          │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Dimensiones

- **Container Max Width:** 1920px
- **Horizontal Padding:** 260px (each side)
- **Vertical Padding:** 40px
- **Horizontal Padding (internal):** 50px
- **Column Gap:** 187px
- **Top Position:** 145px (debajo del header)

### Colores

- **Background:** `#FFFFFF` (white)
- **Overlay:** `#041E42` con opacity 50%
- **Text:** `#041E42` (textDark)
- **Text Hover:** `#F5C34B` (primary-500)
- **Border Radius:** `0 0 6px 6px` (solo abajo)

### Tipografía

- **Column Title:** Jost 18px Medium (line-height: 1.445)
- **Menu Links:** Jost 16px Regular (line-height: 35px / 2.1875)

## 📋 Contenido de Menús

### Pages Menu (según diseño de Figma)

**Columna 1 - Basic Pages:**

- About
- Become Vendor
- Contact
- Login
- Register
- Faq
- Brands
- Terms
- Help
- Coming Soon
- 404
- Invoice
- UI Elements

**Columna 2 - Vendor Pages:**

- Vendor List
- Vendor Single
- Dashboard
- Products
- Order
- Customer
- Categories
- Settings

**Columna 3 - Account Dashboard:**

- Account Details
- Order
- Address
- Wishlist
- Invoice

### Shop Menu

**Columna 1 - Shop Categories:**

- All Products
- Sport Equipment
- Yoga & Fitness
- Weights & Dumbbells
- Cardio Equipment
- Accessories

**Columna 2 - Popular Products:**

- Best Sellers
- New Arrivals
- Hot Deals
- Deal of the Day
- Clearance Sale

**Columna 3 - Shopping Tools:**

- My Cart
- Wishlist
- Compare
- Track Order

### Home Menu

**Columna 1 - Quick Links:**

- Home
- Shop
- About Us
- Contact

**Columna 2 - Categories:**

- Browse All
- Sport Equipment
- Fitness
- Accessories

**Columna 3 - Support:**

- Help Center
- FAQ
- Shipping Info
- Returns

### Blog Menu

**Columna 1 - Blog Categories:**

- All Posts
- Fitness Tips
- Product Reviews
- Workout Guides
- Nutrition

**Columna 2 - Popular Posts:**

- Top 10 Yoga Mats
- Home Gym Setup
- Beginner Guide

**Columna 3 - Resources:**

- Video Tutorials
- Downloadable Guides
- Expert Interviews

## 💻 Uso

### Básico

```tsx
import { NavItemWithDropdown } from '@/ui/molecules';

<NavItemWithDropdown label="Pages" href="/pages" menuType="pages" />;
```

### Con Estado Activo

```tsx
<NavItemWithDropdown
  label="Shop"
  href="/products"
  menuType="shop"
  isActive={true}
/>
```

### En el Header

```tsx
<nav className="flex items-center gap-[103px]">
  <NavItemWithDropdown label="Home" href="/" menuType="home" />
  <NavItemWithDropdown label="Shop" href="/products" menuType="shop" />
  <NavItemWithDropdown label="Pages" href="/pages" menuType="pages" />
  <NavItemWithDropdown label="Blog" href="/blog" menuType="blog" />
</nav>
```

## ⚡ Funcionalidad

### Comportamiento

1. **Hover In:** El menú aparece cuando el cursor entra en el `NavItemWithDropdown`
2. **Hover Out:** El menú desaparece cuando el cursor sale del área
3. **Click en Overlay:** Cierra el menú al hacer clic en el fondo oscuro
4. **Icono Animado:** El icono dropdown rota 180° cuando está abierto

### Estados

- `isOpen`: Controla la visibilidad del menú
- `isActive`: Marca el item de navegación como activo (color amarillo)
- `menuType`: Define qué contenido mostrar en el menú

## 🎯 Características

### ✅ Implementado

- [x] Menú desplegable de 3 columnas
- [x] 4 tipos de menú (Home, Shop, Pages, Blog)
- [x] Overlay semi-transparente
- [x] Animación del icono dropdown
- [x] Hover interactivo
- [x] Click para cerrar en overlay
- [x] Diseño responsive con max-width
- [x] Tipografía y colores del diseño Figma
- [x] Espaciado exacto según diseño

### 🔮 Mejoras Futuras (Opcionales)

- [ ] Animación de entrada/salida (fade + slide)
- [ ] Soporte para imágenes en las columnas
- [ ] Menú sticky al hacer scroll
- [ ] Mega menu adaptativo para mobile
- [ ] Iconos junto a cada link
- [ ] Destacados o featured items
- [ ] Submenu de segundo nivel

## 📱 Responsividad

Actualmente el diseño está optimizado para desktop (1920px). Para implementar responsive:

1. Ajustar padding lateral en breakpoints menores
2. Reducir gap entre columnas en tablets
3. Convertir a accordion o menú móvil en smartphones
4. Stack columnas verticalmente en pantallas pequeñas

## 🧪 Testing

**URL de Demo:** `http://localhost:3001/mega-menu-demo`

**Cómo Probar:**

1. Visita la página demo
2. Pasa el cursor sobre "Home", "Shop", "Pages" o "Blog"
3. Verifica que el menú aparece con 3 columnas
4. Haz clic en cualquier enlace
5. Verifica que el overlay cierra el menú

## 📝 Notas de Implementación

- El menú usa `position: fixed` para el overlay
- El menú usa `position: absolute` para el contenedor
- Z-index: overlay=40, menu=50
- Los enlaces usan `Route` type de Next.js para type-safety
- El estado `isOpen` se maneja con `useState` en cada NavItem
- El hover se controla con `onMouseEnter` y `onMouseLeave`

## 🔗 Referencias

- **Diseño Figma:** ZeoMart-Theme (File Key: `qge65aM5BahVP9i6rcKAt0`)
- **Nodo de referencia:** `open_pages_nav` (262:27524)
- **Componente Figma:** HEADER-1 con menú desplegable

---

**Última actualización:** Basado en implementación del sistema de diseño ZeoMart
