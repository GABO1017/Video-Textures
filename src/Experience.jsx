import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Wall1 from './Wall1'
import Wall2 from './Wall2'
import Floor from './Floor'
import { useRef } from 'react'
import { RectAreaLight } from 'three'


export default function Experience() {

    //RectAreaLight
    const RectAreaLightRef1 = useRef()
    const RectAreaLightRef2 = useRef()
    
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <rectAreaLight ref={RectAreaLightRef1} castShadow position={[0, 10, -5]} intensity={2.5} width={10}/>
        <rectAreaLight ref={RectAreaLightRef2} castShadow position={[0, 10, 5]} rotation-y={-Math.PI * 0.5} intensity={2.5} width={10}/>
        <ambientLight intensity={0.5} />

        <Wall1/>
        <Wall2/>
        <Floor/>
    </>
}