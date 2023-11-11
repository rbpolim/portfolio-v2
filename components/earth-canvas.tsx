"use client"

import { Suspense, useEffect, useState } from 'react'
import { useGLTF, OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

type EarthProps = {
  isMobile: boolean
}

export const Earth = ({ isMobile }: EarthProps) => {
  const earth = useGLTF('./earth/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.8 : 2.0}
      position-y={0}
      rotation-y={0}
    />
  )
}

export const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)

    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}