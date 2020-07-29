import React, { useEffect, useState } from 'react'
import { Section, Grid, Header, Column, ProfilePic } from '../components/styled/elements';
import avi from '../assets/avi.jpg';

function Home() {
    const [timeOfDay, setTimeOfDay] = useState(null);

    useEffect(()=> {
        let date = new Date().toLocaleTimeString('en-US');
        let hour = date.match(/[^:]*/m);
    
        if (date.includes('AM') && parseInt(hour) > 4) return setTimeOfDay('morning!');
        if (date.includes('AM') && parseInt(hour) <= 4) return setTimeOfDay('morning?');
        if (date.includes('PM') && parseInt(hour) <= 3) return setTimeOfDay('afternoon!');
        if (date.includes('PM') && parseInt(hour) > 3) return setTimeOfDay('evening!');
    }, []);

    return (
        <Section>
            <Grid>
                <Column>
                    <ProfilePic src={avi}/>
                </Column>
                <Column>
                    <Header alignText="left">
                        Good {timeOfDay} I'm John DeLaGarza. I'm a web developer from Allen, TX. <br/><br/>
                        Enjoy your stay & <a href="mailto:me@johndelagarza.com">say hello</a> if you have some time.
                    </Header>
                </Column>
            </Grid>
        </Section>
    )
}

export default Home;