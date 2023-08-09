import styles from './Main.module.css'
import banner from "../../../media/banner/banner.png";
import MainContent from "./MainContent/MainContent";

function Main() {


    return (
        <div className={styles.item}>

            <img src={banner} className={styles.banner} alt="banner"/>

            <MainContent side={1} header={'Info:'} body={{
                1: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                2: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                3: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                4: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
            }}/>
            <MainContent side={2} header={'Preparation and research:'} body={{
                1: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                2: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                3: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                4: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
            }}/>
            <MainContent side={3} header={'Workshop and posy-production:'} body={{
                1: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                2: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                3: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                4: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
            }}/>
            <MainContent side={4} header={'Formulation of the tools:'} body={{
                1: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                2: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                3: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
                4: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments ' +
                    'designed to guide and facilitate the development and transformation of cities on multiple scales. With a' +
                    ' clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster' +
                    ' sustainable and resilient urban environments.',
            }}/>

        </div>
    );
}

export default Main