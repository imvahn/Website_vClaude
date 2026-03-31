import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export function BauModel3D({ path, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(path)
  const clone = useMemo(() => scene.clone(), [scene])
  return <primitive object={clone} position={position} scale={scale} rotation={rotation} />
}

useGLTF.preload('/models/Nissan-GTR.glb')
useGLTF.preload('/models/Astronaut.glb')
useGLTF.preload('/models/Big_Building.glb')
useGLTF.preload('/models/Bison.glb')
useGLTF.preload('/models/Coin.glb')
useGLTF.preload('/models/Fire_Hydrant.glb')
useGLTF.preload('/models/Flying_saucer.glb')
useGLTF.preload('/models/Guitar.glb')
useGLTF.preload('/models/Paper_airplane.glb')
useGLTF.preload('/models/Shoes.glb')
useGLTF.preload('/models/Tree.glb')
useGLTF.preload('/models/Truck.glb')

