export function BauCircle3D({ position, radius, color, rotationX = 0 }) {
  return (
    <mesh position={position} rotation={[-Math.PI / 2 + rotationX, 0, 0]}>
      <cylinderGeometry args={[radius, radius, 12, 64]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0} />
    </mesh>
  )
}
