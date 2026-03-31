export function BauRect3D({ position, width, height, color, rotation = 0, rotationX = 0 }) {
  return (
    <mesh position={position} rotation={[rotationX, 0, rotation * Math.PI / 180]}>
      <boxGeometry args={[width, height, 10]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0} />
    </mesh>
  )
}
