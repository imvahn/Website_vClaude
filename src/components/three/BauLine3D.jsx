export function BauLine3D({ position, length, thickness = 4, color, rotation = 0, rotationX = 0 }) {
  return (
    <mesh position={position} rotation={[rotationX, 0, rotation * Math.PI / 180]}>
      <boxGeometry args={[length, Math.max(thickness, 6), 6]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0} />
    </mesh>
  )
}
