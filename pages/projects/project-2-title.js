import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'

const ProjectTwoPage = () => {
    return <Layout>
        <Container>
            <Image 
            src="/images/08.png"
            alt="Book slipcover for Ocean Vuong On Earth We're Briefly Gorgeous"
            width="1500"
            height="1000"
            layout="responsive"
            />
        <Heading level="1">Project 2 Title</Heading>
        <Paragraph>This is a description about my project</Paragraph>
        </Container>
    </Layout>
}

export default ProjectTwoPage;