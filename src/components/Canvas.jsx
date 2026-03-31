import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useScroll } from '@/contexts/ScrollContext'
import { World } from '@/components/world/World'
import { FOV, FOV_FACTOR } from '@/constants/layout'

export function AppCanvas() {
  const { vh } = useScroll()
  const initialCameraZ = vh / FOV_FACTOR

  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, background: '#F0EBE1' }}
      camera={{ fov: FOV, near: 0.1, far: 10000, position: [0, 0, initialCameraZ] }}
    >
      <Suspense fallback={null}>
        <World />
      </Suspense>
    </Canvas>
  )
}
