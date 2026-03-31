import { CameraRig } from '@/components/CameraRig'
import { BauhausWorld } from '@/components/world/BauhausWorld'

export function World() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 3, 4]} intensity={1.4} />
      <directionalLight position={[-3, -2, 1]} intensity={0.35} color="#fff8e8" />
      <BauhausWorld />
    </>
  )
}
