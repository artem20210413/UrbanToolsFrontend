import styles from './Main.module.css'
import banner from "../../../media/banner/banner.png";
import MainContent from "./MainContent/MainContent";

function Main() {


    return (
        <div className={styles.item}>

            <img src={banner} className={styles.banner} alt="banner"/>

            <MainContent side={1} header={'Info:'} body={{
                1: 'The Urban Transformation Toolbox is a comprehensive and innovative set of interactive instruments designed to guide and facilitate the development and transformation of cities on multiple scales. With a clear vision in mind, this powerful toolbox aims to address pressing urban challenges and foster sustainable and resilient urban environments.',
                2: 'The primary goal of the Urban Transformation Toolbox is to promote social sustainability, climate resilience, security, and adaptation to changes. By providing practical and user-friendly real-life cases, the toolbox empowers city planners, policymakers, and stakeholders to make informed decisions and implement effective strategies.',
                3: 'This cutting-edge platform allows cities to explore and analyze diverse urban development scenarios, assess the impact of various interventions, and visualize potential outcomes. By taking into account the social, economic, and environmental dimensions of urban transformation, cities can devise holistic and future-proof strategies.',
                4: 'As a planning tool and a collaborative platform, the Urban Transformation Toolbox brings together diverse stakeholders to engage in participatory decision-making processes. It serves as a catalyst for inclusive urban development that benefits all residents, encouraging knowledge exchange and fostering a sense of ownership among the city\'s stakeholders.',
                5: 'Emphasizing the importance of preparation and research, the Urban Transformation Toolbox supports data-driven decision-making. By identifying best practices and key cases, cities can optimize resource allocation and design tailored interventions that resonate with their specific context and challenges.',
            }}/>
            <MainContent side={2} header={'Preparation and research:'} body={{
                1: 'Preparation and research are the fundamental first steps when using the Urban Transformation Toolbox to guide and facilitate the development and transformation of cities. This step lays the foundation for an informed and effective process identifying the tools based on the best practices extracted from the cities. Preparation involves clearly defining the objectives and goals of the urban transformation process. ',
                2: 'Thorough research allows for the identification of best practices from cities that have successfully implemented sustainable and resilient urban development strategies. By learning from these success stories, other cities can adopt proven approaches and adapt them to suit their unique context and challenges. Researching key cases that align with the city\'s specific objectives and challenges helps decision-makers understand how similar urban transformations were executed in different contexts. Analyzing these cases provides valuable insights into what worked well, what obstacles were encountered, and the outcomes achieved.',
                3: 'Effective workshop organisation is essential at this stage to give the right focus for determining case studies focus on specific goals and objectives, ensuring that participants actively contribute to the decision-making process. These workshops involve key stakeholders from various sectors, including government agencies, community representatives, businesses, and experts. ',
                4: 'All the insights gained during the preparation and research phase come together to hold a comprehensive and well-prepared workshop on the next stage.',
            }}/>
            <MainContent side={3} header={'Workshop and posy-production:'} body={{
                1: 'After completing the preparation and research phase, the Urban Transformation Toolbox implementation progresses through two vital stages: workshop holding and post-production activities. Engaging stakeholders from the outset is critical for building support, fostering collaboration, and ensuring that the transformation process is inclusive. By involving diverse perspectives, the tools extracted from real-life cases of current trends and urban phenomena are more likely to be holistic, representative, and realistic.',
                2: 'Building on the conducted research during the preparation phase, the discussion during workshop will facilitate the definition of core elements for each case of the city transformation, ensuring that choices align with the city\'s context and challenges. During the workshop, participants will engage in interactive sessions, group exercises, and brainstorming, fostering creativity and innovation in finding practical solutions for the city\'s unique challenges. The resulting comprehensive overview will outline the needs and challenges of city transformation',
                3: 'All the outcomes, discussions, and decisions made during the workshop will be documented in one analytical document. This documentation will serve as a reference point for future stages and case descriptions of selected urban transformation projects. During post-production, lessons learned will be incorporated into the cities cases, creating tools for promoting knowledge exchange in the future.',
                4: 'The Urban Transformation Toolbox remains adaptable and flexible, accommodating changing circumstances and evolving challenges to achieve enduring and positive urban development outcomes.',
            }}/>
            <MainContent side={4} header={'Formulation of the tools:'} body={{
                1: 'Urban transformation processes are dynamic and respond to various factors, shaping the city\'s evolution and complexities. The toolbox captures these multifaceted aspects to grasp the diversity and instability inherent in the contemporary city. The tools, extracted from real case studies defined in the previous stage, provide valuable insights into urban conditions, models, and operational modes. They serve as a basis for understanding how implemented urban design projects shape cities and how these insights can be applied to future urban transformation projects.',
                2: 'The compiled case studies serve as templates for reading and critically reflecting upon the city. The Toolbox compiles a catalog of operational tools, presented through real-life case studies. City authorities can familiarize themselves with these tools to better comprehend cities and apply the insights in the planning of their future urban environment. The analytical cases cover diverse scales, geographies, socio-political, and economic environments, offering a comprehensive perspective on contemporary urban development. The tools are divided into three thematic clusters: peace and security, environment and infrastructure, and innovation technologies and services. ',
                3: 'Through a lens of critical observation, knowledge, and understanding, the Toolbox lays the foundation for informed urban development that reflects the dynamic nature of the cities we inhabit. This knowledge aims to inspire and equip stakeholders with the necessary instruments for making informed decisions during city transformations.',
            }}/>

        </div>
    );
}

export default Main