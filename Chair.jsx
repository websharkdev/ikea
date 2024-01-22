/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/chair.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/chair.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Silllon.geometry} material={materials.Cuero} />
      <mesh geometry={nodes.Silllon_1.geometry} material={materials.Acero} />
    </group>
  )
}

useGLTF.preload('/chair.glb')