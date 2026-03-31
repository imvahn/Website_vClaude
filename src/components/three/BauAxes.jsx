import { AxesHelper } from 'three'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

export function BauAxes({ size = 200 }) {
  const { scene } = useThree()
  useEffect(() => {
    const axesHelper = new AxesHelper(size)
    scene.add(axesHelper)
    return () => scene.remove(axesHelper)
  }, [scene, size])
  return null
}
