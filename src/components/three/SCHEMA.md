# Three Component Schema

Reference for 3D primitives and model components in the Bauhaus canvas. Use this guide whenever adding or modifying geometry in `BauhausWorld.jsx`.

## Coordinate System

All positions use Three.js world-space units. Viewport-relative values leverage `vw` (viewport width) and `vh` (viewport height) from `useDimensions()`:

- **X-axis**: left (negative) → right (positive), anchored at 0
- **Y-axis**: top (positive) → bottom (negative); camera travels down as user scrolls
- **Z-axis**: near (0) → deep (negative); parallax depth range: 0 to -295

Example: `position={[0.38 * vw, -0.66 * vh, -260]}` places a shape 38% right, 66% down the viewport, and far back in parallax.

## Scroll Zones

The page spans 3 viewport heights. Position shapes within their intended scroll band:

- **Hero**: Y 0 → -1vh (camera at start)
- **Transition**: Y -0.75vh → -1.25vh (mid-scroll dip)
- **About**: Y -1vh → -2vh (first content zone)
- **Transition**: Y -2vh → -2.3vh (mid-scroll dip)
- **Projects**: Y -2vh → -3vh (final content zone)

## Rotation Conventions

**Three primitives** (BauRect3D, BauTriangle3D, BauLine3D):
- `rotation` = **degrees** (converted internally via `× π/180`)
- `rotationX` = **radians** (raw value, tilts the shape off-horizontal)

**Model component** (BauModel3D):
- `rotation` = **radians array** `[x, y, z]` (standard Three.js Euler angles)

## Kandinsky Color-Form Pairings

Shapes follow these semantic associations:

| Shape | Color | Meaning |
|---|---|---|
| Circle | `COLORS.BLUE` | Receding, calm, concentrically deep |
| Triangle | `COLORS.YELLOW` | Dynamic, eccentric, energetic |
| Rect | `COLORS.RED` | Stable, assertive, grounded |
| Line | `COLORS.BLACK` | Structural, architectural |
| Models | Original PBR materials | Naturalistic, contextual |

## Component Props

### BauCircle3D

Flat, circular disc with optional tilt.

```jsx
<BauCircle3D
  position={[x, y, z]}    // center in world space
  radius={number}         // disc radius
  color={COLORS.BLUE}     // fill color
  rotationX={0.18}        // radians; tilt from horizontal
/>
```

| Prop | Type | Unit | Notes |
|---|---|---|---|
| position | [x, y, z] | world units | center point |
| radius | number | world units | disc radius |
| color | string | hex or named | Kandinsky pairing: blue |
| rotationX | number | radians | 0 = flat; π/2 = vertical |

### BauRect3D

Rectangular box, tiltable on X and rotatable around Z.

```jsx
<BauRect3D
  position={[x, y, z]}    // center in world space
  width={70}              // X-extent
  height={230}            // Y-extent
  color={COLORS.RED}      // fill color
  rotation={-10}          // degrees; spin around Z
  rotationX={0.08}        // radians; tilt from horizontal
/>
```

| Prop | Type | Unit | Notes |
|---|---|---|---|
| position | [x, y, z] | world units | center point |
| width | number | world units | local X extent |
| height | number | world units | local Y extent |
| color | string | hex or named | Kandinsky pairing: red |
| rotation | number | degrees | Z-axis spin; converted internally |
| rotationX | number | radians | 0 = flat; π/2 = vertical |

### BauTriangle3D

Equilateral triangle prism, tiltable on X and rotatable around Z.

```jsx
<BauTriangle3D
  position={[x, y, z]}    // center in world space
  size={210}              // side length
  color={COLORS.YELLOW}   // fill color
  rotation={30}           // degrees; spin around Z
  rotationX={0.32}        // radians; tilt from horizontal
/>
```

**Note**: Circumradius = `size / √3`; internal geometry uses CylinderGeometry with 3 radial segments.

| Prop | Type | Unit | Notes |
|---|---|---|---|
| position | [x, y, z] | world units | center point |
| size | number | world units | side length of triangle |
| color | string | hex or named | Kandinsky pairing: yellow |
| rotation | number | degrees | Z-axis spin; converted internally |
| rotationX | number | radians | 0 = flat; π/2 = vertical |

### BauLine3D

Long rectangular bar, tiltable on X and rotatable around Z.

```jsx
<BauLine3D
  position={[x, y, z]}    // center in world space
  length={320}            // bar length
  thickness={8}           // bar height (minimum 6)
  color={COLORS.BLACK}    // fill color
  rotation={37}           // degrees; spin around Z
  rotationX={0}           // radians; tilt from horizontal
/>
```

| Prop | Type | Unit | Notes |
|---|---|---|---|
| position | [x, y, z] | world units | center point |
| length | number | world units | bar length (X-extent) |
| thickness | number | world units | bar height; clamped to min 6 |
| color | string | hex or named | Kandinsky pairing: black |
| rotation | number | degrees | Z-axis spin; converted internally |
| rotationX | number | radians | 0 = flat; π/2 = vertical |

### BauModel3D

Imported .glb mesh with PBR materials preserved.

```jsx
<BauModel3D
  path="/models/Nissan-GTR.glb"      // path to .glb
  position={[0, 0, -50]}              // center in world space
  scale={100}                         // uniform scale
  rotation={[0, Math.PI / 4, 0]}      // radians [x, y, z]
/>
```

| Prop | Type | Unit | Notes |
|---|---|---|---|
| path | string | — | path to `.glb` in `/public/models/` |
| position | [x, y, z] | world units | center point |
| scale | number | — | uniform scale multiplier |
| rotation | [x, y, z] | radians | Three.js Euler angles |

**Preloading**: Add `useGLTF.preload('/models/FileName.glb')` at the bottom of `BauModel3D.jsx` to avoid load delays.

## Adding a New Model

1. **Drop .glb**: Place your model file in `public/models/`
2. **Preload**: Add `useGLTF.preload('/models/FileName.glb')` at the end of [BauModel3D.jsx](BauModel3D.jsx)
3. **Place**: Add a `<BauModel3D>` instance in the correct scroll zone within [BauhausWorld.jsx](../world/BauhausWorld.jsx)
4. **Tune**: Use `vw`/`vh` multiples for viewport-relative positioning; adjust Z for desired parallax depth

## Material Properties

All primitives use `meshStandardMaterial` with:
- **roughness**: 0.35 (matte, light-scattering)
- **metalness**: 0 (non-metallic)

Models retain their original PBR materials from the .glb export.

## Common Positions

Quick reference for layout:

```
Far left:       -0.44 * vw
Left-center:    -0.2 * vw
Center:         0
Right-center:   0.2 * vw
Far right:      0.38–0.46 * vw

Top:            0.38 * vh
Upper-mid:      0.1 * vh
Center:         0
Lower-mid:      -0.8 * vh
Bottom:         -2.9 * vh
```

## Debugging Tips

- **Not visible?** Check Z depth (0 to -295). Shapes at Z = 0 may be clipped by near plane.
- **Rotated wrong?** Verify units: `rotation` = degrees (primitives), radians (models). Check `rotationX` offset.
- **Wrong scroll zone?** Trace Y position against scroll bands above; camera Y = -p * vh where p is scroll progress.
- **Model too large/small?** Tune `scale` prop; try 10–300 for most models.
