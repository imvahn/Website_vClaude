import { useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useScroll } from '@/contexts/ScrollContext'
import { FOV_FACTOR } from '@/constants/layout'

export function CameraRig() {
  const { camera } = useThree()
  const { vh, p } = useScroll()

  useEffect(() => {
    camera.position.z = vh / FOV_FACTOR
    camera.updateProjectionMatrix()
  }, [vh, camera])

  useFrame(() => {
    camera.position.y = -p * vh
  })

  return null
}
