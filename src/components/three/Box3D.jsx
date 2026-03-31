export function Box3D({ position, width, height, depth = 8, color, roughness = 0.35 }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} roughness={roughness} />
    </mesh>
  )
}
