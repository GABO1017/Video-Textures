import { useTexture } from "@react-three/drei"
import { DoubleSide } from "three"
import { useState } from "react";

export default function Wall2() {

    const PATH = "/static/textures/"
    const imagenes = ["sai.jpg","blurryface.png","vessel.png","trench.jpg","self.jpg"];
    var idImage = 0;
    const [textureUrl, setTextureUrl] = useState(imagenes[idImage]);



    const props = useTexture({
        map: PATH + textureUrl

    })

    const changeImage = () => {
        let idAnterior = textureUrl
        do {
            idImage = Math.floor(Math.random() * imagenes.length);
        } while (idAnterior == imagenes[idImage]);

        console.log(idImage)
        setTextureUrl(imagenes[idImage])
    }
    return (
        <mesh receiveShadow position-y={ 6.5 } position-x={9} rotation-y={ - Math.PI * 0.5 } onPointerOver={changeImage}>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}