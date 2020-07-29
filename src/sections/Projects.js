import React from 'react';
import { Section, Grid, Header, FluidImg, Column } from '../components/styled/elements';
import fbscrape from '../assets/fbscrape.png';

function Projects() {
    
    return (
        <Section id="projects" class="asdasd">
            <Header>Projects</Header>
            <Grid>
                <Column>
                    <Header size="small" style={{marginTop: "20px"}}>FB-Scrape</Header>
                    <FluidImg src={fbscrape} maxWidth="600px" maxHeight="600px"/>
                    <p>A desktop application that alerts you of new Facebook Marketplace listings that contain a specific keyword. <br/>-------<br/> Built using Electron, React, and Puppeteer.</p>
                </Column>
            </Grid>
        </Section>
    )
};

export default Projects;