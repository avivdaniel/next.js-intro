// ✍️ import the Image component from 'next/image'
import Image from "next/image";
// ✍️ import "lazar.png" statically
import lazar from '../lazar.png';

const DUA_IMAGE_URL = 'https://assets.vogue.com/photos/642c579f38d6f760cd23e8a1/4:3/w_1635,h_1226,c_limit/BARBIE_Character_DUA_InstaVert_1638x2048_DOM.jpg'
const Home = () => {
    return <>
        <Image src={lazar} alt="Lazar picture"/>
        <Image src={DUA_IMAGE_URL} alt="dua lipa image" width={250} height={250}/>
    </>
}

export default Home
