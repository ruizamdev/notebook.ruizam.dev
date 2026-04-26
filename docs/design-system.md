# Sistema de Diseno (Atomic Design)

> Estado: borrador para completar  
> Proyecto: website personal  
> Propietario: [NOMBRE]  
> Ultima actualizacion: [YYYY-MM-DD]

## 1. Vision y Principios

### 1.1 Objetivo del sistema

- Que problemas resuelve:
- Que consistencia debe garantizar:
- Alcance inicial (sitio personal, blog, portfolio, etc.):
- No-alcance (por ahora):

### 1.2 Principios de diseno

- Principio 1:
- Principio 2:
- Principio 3:
- Principio 4:

### 1.3 Audiencia y contexto

- Audiencia principal:
- Necesidades clave:
- Dispositivos prioritarios:
- Idiomas:

## 2. Foundations (Design Tokens)

## 2.1 Color

### Accent principal (marca): Cyan

#### Usarlo para:

- botones principales
- links
- focus
- iconos activos
- elementos interactivos
- highlights importantes

### Accent secundario: Ámbar

#### Usarlo para:

- badges
- etiquetas
- avisos
- métricas
- indicadores
- detalles visuales

### 2.1.1 Palette base

| Token               | Valor | Uso |
| ------------------- | ----- | --- |
| `--color-brand-50`  | `[#E6F8FF]` |     |
| `--color-brand-100` | `[#C2EEFF]` |     |
| `--color-brand-200` | `[#9BE2FF]` |     |
| `--color-brand-300` | `[#69D2FF]` | Hover principal |
| `--color-brand-400` | `[#4FCBFF]` |     |
| `--color-brand-500` | `[#36C2FF]` | Principal |
| `--color-brand-600` | `[#22A5DC]` |     |
| `--color-brand-700` | `[#1C85B0]` |     |
| `--color-brand-800` | `[#17688A]` |     |
| `--color-brand-900` | `[#103247]` | Soft principal |

### 2.1.1.b Palette base secundaria

| Token                | Valor | Uso |
| -------------------- | ----- | --- |
| `--color-accent-50`  | `[#FFF7E8]` |     |
| `--color-accent-100` | `[#FFECC7]` |     |
| `--color-accent-200` | `[#FFDE99]` |     |
| `--color-accent-300` | `[#FFC14D]` | Hover secundario |
| `--color-accent-400` | `[#FFB833]` |     |
| `--color-accent-500` | `[#FFB020]` | Secundario |
| `--color-accent-600` | `[#D89219]` |     |
| `--color-accent-700` | `[#AE7514]` |     |
| `--color-accent-800` | `[#83590F]` |     |
| `--color-accent-900` | `[#3B2A08]` | Soft secundario |

### 2.1.2 Tokens semanticos

| Categoria | Token                    | Valor                     | Uso |
| --------- | ------------------------ | ------------------------- | --- |
| Fondo     | `--color-bg-default`     | `[#0B0F14]`               |     |
| Fondo     | `--color-bg-subtle`      | `[#121821]`               |     |
| Fondo     | `--color-bg-inverse`     | `[#1A2330]`               |     |
| Texto     | `--color-text-default`   | `[#E6EDF3]`               |     |
| Texto     | `--color-text-muted`     | `[#9FB0C3]`               |     |
| Texto     | `--color-text-inverse`   | `[#]`                     |     |
| Borde     | `--color-border-default` | `[#263244]`               |     |
| Borde     | `--color-border-strong`  | `[#3A4A63]`               |     |
| Estado    | `--color-success`        | `[#35D07F]`               |     |
| Estado    | `--color-warning`        | `[#F5B942]`               |     |
| Estado    | `--color-error`          | `[#FF6B6B]`               |     |
| Estado    | `--color-info`           | `[#36C2FF]`               |     |
| Estado    | `--color-info-soft`      | `[#103247]`               |     |
| Accion    | `--color-link`           | `[#36C2FF]`               |     |
| Accion    | `--color-link-hover`     | `[#69D2FF]`               |     |
| Accion    | `--color-focus-ring`     | `[#FFB020]` |     |

### 2.1.3 Reglas de color

- Contraste minimo texto normal: [AA/AAA]
- Contraste minimo texto grande: [AA/AAA]
- Fondos permitidos para texto primario:
- Uso de colores de estado (cuando si/cuando no):

## 2.2 Tipografia

### 2.2.1 Familias tipograficas

| Rol     | Token                   | Valor      |
| ------- | ----------------------- | ---------- |
| Display | `--font-family-display` | `Space Grotesk` |
| Heading | `--font-family-heading` | `Inter Tight` |
| Body    | `--font-family-body`    | `Inter` |
| Mono    | `--font-family-mono`    | `JetBrains Mono` |

### 2.2.2 Escala tipografica

| Token             | Size | Line-height | Weight | Uso |
| ----------------- | ---- | ----------- | ------ | --- |
| `--font-size-2xs` | `0.75rem (12px)` | `1.4` | `500` | Labels pequenos, metadata compacta |
| `--font-size-xs`  | `0.8125rem (13px)` | `1.4` | `500` | Captions, tags, overline |
| `--font-size-sm`  | `0.9375rem (15px)` | `1.5` | `500` | UI text, links en cards, tablas |
| `--font-size-md`  | `1rem (16px)` | `1.6` | `400` | Body base |
| `--font-size-lg`  | `1.125rem (18px)` | `1.6` | `400` | Intro de seccion, parrafo destacado |
| `--font-size-xl`  | `1.375rem (22px)` | `1.35` | `700` | `h3`, subtitulos fuertes |
| `--font-size-2xl` | `1.75rem (28px)` | `1.25` | `700` | `h2` en desktop / `h1` en mobile |
| `--font-size-3xl` | `2.25rem (36px)` | `1.15` | `700` | `h1` en desktop |
| `--font-size-4xl` | `3rem (48px)` | `1.1` | `700` | Display/hero principal |

### 2.2.3 Styles semanticos

| Estilo    | Tokens                                      | Uso              |
| --------- | ------------------------------------------- | ---------------- |
| `display` | `Space Grotesk + --font-size-4xl + 700 + 1.1 + letter-spacing -0.02em` | Hero principal |
| `h1`      | `Inter Tight + --font-size-3xl + 700 + 1.15 + letter-spacing -0.01em` | Titulo de pagina |
| `h2`      | `Inter Tight + --font-size-2xl + 700 + 1.25 + letter-spacing -0.01em` | Secciones |
| `h3`      | `Inter Tight + --font-size-xl + 700 + 1.35 + letter-spacing -0.005em` | Sub-secciones |
| `body-lg` | `Inter + --font-size-lg + 400 + 1.6` | Intro |
| `body`    | `Inter + --font-size-md + 400 + 1.6` | Texto general |
| `caption` | `Inter + --font-size-xs + 500 + 1.4 + letter-spacing 0.01em` | Metadatos |
| `code`    | `JetBrains Mono + --font-size-sm + 500 + 1.55` | Snippets |

### 2.2.4 Reglas tipograficas

- Longitud maxima recomendada por linea: `60-75` caracteres en body y `45-60` en contenido tecnico.
- Tracking por estilo:
  `display/h1/h2/h3` entre `-0.02em` y `-0.005em`, body en `0`, caption en `0.01em`.
- Uso de mayusculas:
  solo en labels cortos (`caption`, tags, overline) con `letter-spacing` positivo.
- Uso de italicas:
  reservado para enfasis editorial, citas y texto en idioma extranjero. No usar en UI critica (botones, labels de formulario).

## 2.3 Espaciado y layout

### 2.3.1 Spacing scale

| Token        | Valor | Equivalencia |
| ------------ | ----- | ------------ |
| `--space-0`  | `0` | `0px` |
| `--space-1`  | `0.25rem` | `4px` |
| `--space-2`  | `0.5rem` | `8px` |
| `--space-3`  | `0.75rem` | `12px` |
| `--space-4`  | `1rem` | `16px` |
| `--space-5`  | `1.25rem` | `20px` |
| `--space-6`  | `1.5rem` | `24px` |
| `--space-8`  | `2rem` | `32px` |
| `--space-10` | `2.5rem` | `40px` |
| `--space-12` | `3rem` | `48px` |
| `--space-16` | `4rem` | `64px` |

### 2.3.2 Grid y breakpoints

| Token             | Valor | Uso |
| ----------------- | ----- | --- |
| `--breakpoint-sm` | `36rem (576px)`  | Mobile grande / phablet |
| `--breakpoint-md` | `48rem (768px)`  | Tablet |
| `--breakpoint-lg` | `64rem (1024px)` | Laptop |
| `--breakpoint-xl` | `80rem (1280px)` | Desktop amplio |
| `--container-sm`  | `36rem (576px)`  | Layout compacto |
| `--container-md`  | `48rem (768px)`  | Layout de lectura media |
| `--container-lg`  | `72rem (1152px)` | Layout principal del sitio |
| `--container-xl`  | `80rem (1280px)` | Landing o grillas amplias |

### 2.3.3 Reglas de composicion

- Margenes de pagina por breakpoint:
  mobile `16px` (`--space-4`), tablet `24px` (`--space-6`), desktop `32px` (`--space-8`).
- Max width de texto:
  cuerpo de articulo en `65ch`; contenedores de contenido denso en `72ch`.
- Separacion vertical entre secciones:
  `--space-12` en desktop y `--space-8` en mobile.
- Regla de columnas (si aplica):
  1 columna en mobile, 2 columnas desde `--breakpoint-md`, 3 columnas desde `--breakpoint-lg` para cards/listados.

## 2.4 Bordes, radios y sombras

| Tipo   | Token              | Valor | Uso |
| ------ | ------------------ | ----- | --- |
| Radius | `--radius-none`    | `0`  | Superficies rectas |
| Radius | `--radius-sm`      | `0.375rem (6px)`  | Inputs, badges, chips |
| Radius | `--radius-md`      | `0.625rem (10px)`  | Cards, botones principales |
| Radius | `--radius-lg`      | `1rem (16px)`  | Hero, paneles destacados |
| Radius | `--radius-full`    | `9999px`  | Pills y avatares circulares |
| Border | `--border-width-1` | `1px`  | Borde default |
| Border | `--border-width-2` | `2px`  | Focus alternativo y separadores fuertes |
| Shadow | `--shadow-sm`      | `0 1px 2px rgb(0 0 0 / 0.07)`  | Elevacion baja (cards planas) |
| Shadow | `--shadow-md`      | `0 6px 16px rgb(15 23 42 / 0.08)`  | Elevacion media (hero, modal liviano) |
| Shadow | `--shadow-lg`      | `0 14px 34px rgb(15 23 42 / 0.14)`  | Elevacion alta (overlays, popover fuerte) |

## 2.5 Motion

| Token               | Valor | Uso                 |
| ------------------- | ----- | ------------------- |
| `--duration-fast`   | `140ms`  | Hover y micro feedback |
| `--duration-base`   | `220ms`  | Transiciones UI generales |
| `--duration-slow`   | `320ms`  | Entradas de seccion |
| `--easing-standard` | `cubic-bezier(0.2, 0.7, 0.2, 1)`  | Interaccion general |
| `--easing-emphasis` | `cubic-bezier(0.16, 1, 0.3, 1)`  | Entradas con mas caracter |

Reglas:

- Respetar `prefers-reduced-motion`: si, desactivar transiciones no esenciales y animaciones decorativas.
- Elementos con animacion:
  botones, links, focus ring, apertura de cards, entrada de secciones.
- Elementos sin animacion:
  texto largo, tablas, formularios durante escritura, contenido critico de lectura.

## 2.6 Iconografia e ilustracion

- Libreria de iconos:
- Grosor de trazo:
- Estilo (outline, filled, duotone):
- Tamano base icono:
- Uso de ilustraciones (si/no, estilo):

## 3. Atomic Design

## 3.1 Atoms

> Componentes indivisibles. Sin layout complejo.

### Inventario de atoms

| Atom      | Variantes | Estados | Tokens dependientes | Accesibilidad |
| --------- | --------- | ------- | ------------------- | ------------- |
| Text      |           |         |                     |               |
| Heading   |           |         |                     |               |
| Link      |           |         |                     |               |
| Button    |           |         |                     |               |
| Input     |           |         |                     |               |
| Textarea  |           |         |                     |               |
| Select    |           |         |                     |               |
| Checkbox  |           |         |                     |               |
| Radio     |           |         |                     |               |
| Switch    |           |         |                     |               |
| Tag/Badge |           |         |                     |               |
| Avatar    |           |         |                     |               |
| Icon      |           |         |                     |               |
| Divider   |           |         |                     |               |
| Spinner   |           |         |                     |               |

### Checklist por atom

- API de props definida
- Variantes documentadas
- Estados (`default`, `hover`, `focus`, `active`, `disabled`, `error`)
- Casos de texto largo
- Navegacion por teclado
- Contraste y focus visible

## 3.2 Molecules

> Combinacion de atoms para una accion o bloque pequeno.

### Inventario de molecules

| Molecule    | Atoms que combina          | Variantes | Estados | Reglas |
| ----------- | -------------------------- | --------- | ------- | ------ |
| Form field  | Label + Input + Help/Error |           |         |        |
| Search box  | Input + Button + Icon      |           |         |        |
| Nav item    | Link + Icon/Badge          |           |         |        |
| Card header | Heading + Meta + Action    |           |         |        |
| CTA block   | Heading + Text + Button    |           |         |        |
| Social link | Icon + Text/Label          |           |         |        |

### Checklist por molecule

- Contrato de composicion claro
- Espaciados internos tokenizados
- Orden de lectura correcto
- Fallback sin iconos/imagenes

## 3.3 Organisms

> Secciones funcionales completas de la interfaz.

### Inventario de organisms

| Organism          | Molecules/Atoms que usa | Variantes | Responsive | Notas |
| ----------------- | ----------------------- | --------- | ---------- | ----- |
| Header            |                         |           |            |       |
| Hero              |                         |           |            |       |
| About section     |                         |           |            |       |
| Projects grid     |                         |           |            |       |
| Project card list |                         |           |            |       |
| Blog list         |                         |           |            |       |
| Contact section   |                         |           |            |       |
| Footer            |                         |           |            |       |

### Checklist por organism

- Jerarquia visual definida
- Responsive en breakpoints clave
- Estado vacio/skeleton/error (si aplica)
- Performance (imagenes, lazy load, peso)

## 3.4 Templates

> Estructuras de pagina sin contenido final.

### Templates objetivo

| Template           | Layout | Slots | Restricciones |
| ------------------ | ------ | ----- | ------------- |
| Home template      |        |       |               |
| Project template   |        |       |               |
| Blog post template |        |       |               |
| About template     |        |       |               |
| 404 template       |        |       |               |

## 3.5 Pages

> Instancias reales con contenido.

### Paginas objetivo

| Pagina             | Template base | Organisms incluidos | Estado |
| ------------------ | ------------- | ------------------- | ------ |
| `/`                |               |                     |        |
| `/projects`        |               |                     |        |
| `/projects/[slug]` |               |                     |        |
| `/blog`            |               |                     |        |
| `/blog/[slug]`     |               |                     |        |
| `/about`           |               |                     |        |
| `/contact`         |               |                     |        |

## 4. Estados y comportamiento

## 4.1 Estados globales

- Loading:
- Empty:
- Error:
- Success:
- Offline (si aplica):

## 4.2 Interacciones

- Reglas de hover:
- Reglas de focus:
- Reglas de active/pressed:
- Reglas de disabled:
- Reglas de feedback (toasts, inline, etc.):

## 5. Accesibilidad

### 5.1 Objetivo de conformidad

- Nivel WCAG objetivo: `[2.2 AA / AAA]`

### 5.2 Criterios obligatorios

- Navegacion completa con teclado
- Focus visible y consistente
- Contraste minimo validado
- Labels y nombres accesibles
- Jerarquia semantica de headings
- Landmarks (`header`, `main`, `footer`, `nav`)
- Soporte para zoom 200%
- Soporte de `prefers-reduced-motion`

### 5.3 QA de accesibilidad

- Herramientas:
- Flujo de pruebas manuales:
- Frecuencia de auditorias:

## 6. Voz y contenido (opcional pero recomendado)

- Tono de voz:
- Convenciones de microcopy:
- Reglas para CTA:
- Formato de fechas:
- Formato de numeros:
- Idioma fallback:

## 7. Implementacion tecnica

## 7.1 Formato de tokens

- Fuente de verdad (JSON/CSS/TS):
- Convencion de nombres:
- Estrategia de versionado:

## 7.2 Estructura de carpetas sugerida

```txt
src/
  styles/
    tokens/
      color.css
      typography.css
      spacing.css
      motion.css
  components/
    atoms/
    molecules/
    organisms/
  layouts/
  pages/
```

## 7.3 Estrategia de estilos

- Metodologia (CSS modules, Tailwind, etc.):
- Como mapear tokens a componentes:
- Politica de overrides:

## 8. Documentacion de componentes

## 8.1 Formato por componente

Para cada componente documentar:

- Proposito
- Anatomia
- Props/API
- Variantes
- Estados
- Do/Don't
- Accesibilidad
- Ejemplos de uso

## 8.2 Herramienta de documentacion

- Storybook / MDX / custom docs:
- Requisitos minimos por story:

## 9. Testing y calidad

### 9.1 Tipos de test

- Unitarios:
- Visual regression:
- Accesibilidad automatizada:
- E2E flujos criticos:

### 9.2 Definition of Done

- Tokens definidos y nombrados
- Componente implementado
- Tests minimos pasando
- Documentacion publicada
- Revisado en desktop/mobile
- Revisado en modo oscuro/claro (si aplica)

## 10. Gobernanza y mantenimiento

- Responsable(s) del sistema:
- Como proponer cambios:
- Flujo de aprobacion:
- Versioning (`major/minor/patch`):
- Politica de deprecacion:
- Cadencia de revision:

## 11. Backlog inicial (priorizado)

| Prioridad | Item | Tipo (Token/Atom/Molecule/Organism) | Estado |
| --------- | ---- | ----------------------------------- | ------ |
| P0        |      |                                     |        |
| P0        |      |                                     |        |
| P1        |      |                                     |        |
| P1        |      |                                     |        |
| P2        |      |                                     |        |

## 12. Checklist final del sistema

- Foundations definidos (color, typo, spacing, motion, radius, shadows)
- Tokens semanticos mapeados a tokens base
- Atoms completados con variantes y estados
- Molecules clave del sitio completadas
- Organisms de paginas principales listos
- Templates definidos y reutilizables
- QA de accesibilidad ejecutado
- Documentacion publica y mantenible
