import { promises as fs } from 'fs';
import InitialSliders  from  './Sliders/Sliderpage';

const InitialSlider = async () => {
    const file = await fs.readFile(process.cwd() + '/src/components/forMain/InitialSlide/SlideInfo.json', 'utf8');
    const data = [JSON.parse(file)];

    return (
        <>
            <InitialSliders data={data} />
        </>
    )
}

export default InitialSlider;