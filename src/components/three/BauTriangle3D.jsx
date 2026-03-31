// Equilateral triangle prism: CylinderGeometry with 3 radial segments.
// circumradius = side / sqrt(3)
export function BauTriangle3D({ position, size, color, rotation = 0, rotationX = 0 }) {
  const circumradius = size / Math.sqrt(3)
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2 + rotationX, 0, Math.PI / 2 + (rotation * Math.PI / 180)]}
    >
      <cylinderGeometry args={[circumradius, circumradius, 12, 3]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0} />
    </mesh>
  )
}
