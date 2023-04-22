import { DoubleSide} from "three";
import { useVideoTexture } from "@react-three/drei";
import React, { useRef, useEffect, useState } from 'react';

export default function Wall1() {

    const [pause, setPause] = useState(false)

    const props= {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: pause
      }

    const texture = useVideoTexture("/static/textures/video.mp4" , props)

    const onHandleBanana = () => {
        setPause(true)
    }

    return (
            <mesh receiveShadow position-y={ 6.5 } position-z={-9} onClick={onHandleBanana} >
                <planeGeometry args={[18, 18]} />
                <meshStandardMaterial side={DoubleSide} map={texture} />
            </mesh>  
    )
}
