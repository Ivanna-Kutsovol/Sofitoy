import { promises as fs } from 'fs';
import CatalogySlides from "./CatalogySlides/CatalogySlides";

const CatalogySlider = async () => {
    const file = await fs.readFile(process.cwd() + '/src/components/forMain/Catalogy/CatalogySlider/catalogySliderInfo.json', 'utf8');
    const data = [JSON.parse(file)];

    return (
        <>
            <CatalogySlides data={data} />
        </>
    )
}

export default CatalogySlider;