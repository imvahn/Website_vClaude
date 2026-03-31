import { useScroll } from '@/contexts/ScrollContext'
import { BauCircle3D } from '@/components/three/BauCircle3D'
import { BauRect3D } from '@/components/three/BauRect3D'
import { BauTriangle3D } from '@/components/three/BauTriangle3D'
import { BauLine3D } from '@/components/three/BauLine3D'
import { COLORS } from '@/constants/colors'

// Kandinsky color-form pairings:
//   Circle   → Blue   (receding, calm, concentrically deep)
//   Triangle → Yellow (dynamic, eccentric, energetic)
//   Rect     → Red    (stable, assertive, grounded)
//   Line     → Black  (structural, architectural)
//
// rotationX: radians (raw)
// rotation:  degrees (component converts × π/180)

export function BauhausWorld() {
  const { vw, vh } = useScroll()

  return (
    <>
      {/* ── HERO ZONE (camera Y: 0 → -vh) ────────────────────── */}

      {/* Large yellow triangle — upper left */}
      <BauTriangle3D
        position={[-0.33 * vw, 0.22 * vh, -95]}
        size={210}
        color={COLORS.YELLOW}
        rotationX={0.32}
        rotation={30}
      />

      {/* Large blue circle — upper right, deep */}
      <BauCircle3D
        position={[0.38 * vw, 0.16 * vh, -260]}
        radius={185}
        color={COLORS.BLUE}
        rotationX={0.18}
      />

      {/* Tall red rect — far left */}
      <BauRect3D
        position={[-0.44 * vw, -0.08 * vh, -55]}
        width={70}
        height={230}
        color={COLORS.RED}
        rotationX={0.08}
        rotation={-10}
      />

      {/* Diagonal black line — center-upper */}
      <BauLine3D
        position={[0.09 * vw, 0.32 * vh, -32]}
        length={320}
        thickness={8}
        color={COLORS.BLACK}
        rotation={37}
      />

      {/* Small yellow triangle — far upper right */}
      <BauTriangle3D
        position={[0.28 * vw, 0.38 * vh, -42]}
        size={75}
        color={COLORS.YELLOW}
        rotationX={0.48}
        rotation={-22}
      />

      {/* Medium blue circle — right, mid-depth */}
      <BauCircle3D
        position={[0.46 * vw, -0.04 * vh, -85]}
        radius={88}
        color={COLORS.BLUE}
        rotationX={0.42}
      />

      {/* Vertical black line — left of center */}
      <BauLine3D
        position={[-0.16 * vw, 0.1 * vh, -22]}
        length={210}
        thickness={7}
        color={COLORS.BLACK}
        rotation={98}
      />

      {/* Wide red rect — lower right, angled */}
      <BauRect3D
        position={[0.32 * vw, -0.38 * vh, -145]}
        width={175}
        height={48}
        color={COLORS.RED}
        rotationX={0.38}
        rotation={16}
      />

      {/* ── TRANSITION BAND (Y: -0.75vh → -1.25vh) ───────────── */}

      {/* Giant red circle — right, very deep */}
      <BauCircle3D
        position={[0.31 * vw, -0.82 * vh, -215]}
        radius={215}
        color={COLORS.RED}
        rotationX={0.22}
      />

      {/* Tilted yellow square — left */}
      <BauRect3D
        position={[-0.27 * vw, -1.02 * vh, -115]}
        width={145}
        height={145}
        color={COLORS.YELLOW}
        rotationX={0.52}
        rotation={25}
      />

      {/* Small yellow triangle — center-right */}
      <BauTriangle3D
        position={[0.12 * vw, -0.92 * vh, -58]}
        size={105}
        color={COLORS.YELLOW}
        rotationX={0.28}
        rotation={-36}
      />

      {/* ── ABOUT ZONE (camera Y: -vh → -2vh) ────────────────── */}

      {/* Tall narrow black column — far right */}
      <BauRect3D
        position={[0.42 * vw, -1.22 * vh, -62]}
        width={42}
        height={340}
        color={COLORS.BLACK}
        rotationX={0.05}
        rotation={-8}
      />

      {/* Large blue triangle — left, multi-axis */}
      <BauTriangle3D
        position={[-0.36 * vw, -1.48 * vh, -175]}
        size={168}
        color={COLORS.BLUE}
        rotationX={0.38}
        rotation={41}
      />

      {/* Medium blue circle — right of center */}
      <BauCircle3D
        position={[0.18 * vw, -1.58 * vh, -95]}
        radius={105}
        color={COLORS.BLUE}
        rotationX={0.58}
      />

      {/* Wide red stripe — angled, mid-depth */}
      <BauRect3D
        position={[0.1 * vw, -1.64 * vh, -42]}
        width={235}
        height={26}
        color={COLORS.RED}
        rotationX={0.22}
        rotation={26}
      />

      {/* Small yellow triangle — far left, deep */}
      <BauTriangle3D
        position={[-0.14 * vw, -1.78 * vh, -295]}
        size={92}
        color={COLORS.YELLOW}
        rotationX={0.72}
        rotation={50}
      />

      {/* Diagonal black line — lower about */}
      <BauLine3D
        position={[-0.04 * vw, -1.88 * vh, -28]}
        length={375}
        thickness={8}
        color={COLORS.BLACK}
        rotation={-19}
      />

      {/* Small blue circle — far right */}
      <BauCircle3D
        position={[0.41 * vw, -1.92 * vh, -125]}
        radius={62}
        color={COLORS.BLUE}
        rotationX={0.15}
      />

      {/* ── TRANSITION BAND (Y: -2vh → -2.3vh) ───────────────── */}

      {/* Huge yellow triangle — center, very deep */}
      <BauTriangle3D
        position={[-0.06 * vw, -2.12 * vh, -240]}
        size={255}
        color={COLORS.YELLOW}
        rotationX={0.18}
        rotation={-30}
      />

      {/* Medium red circle — far right */}
      <BauCircle3D
        position={[0.44 * vw, -2.24 * vh, -65]}
        radius={115}
        color={COLORS.RED}
        rotationX={0.32}
      />

      {/* Near-vertical black line — left */}
      <BauLine3D
        position={[-0.31 * vw, -2.3 * vh, -52]}
        length={265}
        thickness={7}
        color={COLORS.BLACK}
        rotation={72}
      />

      {/* ── PROJECTS ZONE (camera Y: -2vh → -3vh) ────────────── */}

      {/* Large blue circle — far left */}
      <BauCircle3D
        position={[-0.39 * vw, -2.42 * vh, -148]}
        radius={148}
        color={COLORS.BLUE}
        rotationX={0.42}
      />

      {/* Tilted red square — right */}
      <BauRect3D
        position={[0.36 * vw, -2.52 * vh, -88]}
        width={132}
        height={132}
        color={COLORS.RED}
        rotationX={0.68}
        rotation={36}
      />

      {/* Diagonal black line */}
      <BauLine3D
        position={[0.07 * vw, -2.66 * vh, -40]}
        length={305}
        thickness={8}
        color={COLORS.BLACK}
        rotation={14}
      />

      {/* Medium yellow triangle — center-left */}
      <BauTriangle3D
        position={[-0.24 * vw, -2.76 * vh, -180]}
        size={138}
        color={COLORS.YELLOW}
        rotationX={0.82}
        rotation={47}
      />

      {/* Wide red bar — right, deep */}
      <BauRect3D
        position={[0.33 * vw, -2.9 * vh, -225]}
        width={285}
        height={52}
        color={COLORS.RED}
        rotationX={0.28}
        rotation={-33}
      />

      {/* Final large blue circle — center-left */}
      <BauCircle3D
        position={[-0.1 * vw, -3.02 * vh, -115]}
        radius={178}
        color={COLORS.BLUE}
        rotationX={0.48}
      />
    </>
  )
}
