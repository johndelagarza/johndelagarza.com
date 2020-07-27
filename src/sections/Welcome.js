import React, { useEffect, useState } from 'react'
import { Section, Grid } from '../components/styled/elements';
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
                <column>
                    <img class="profile-pic" src={avi}/>
                </column>
                <column>
                    <h1>
                        Good {timeOfDay} I'm John DeLaGarza. I'm a web developer from Allen, TX. <br/><br/>
                        Enjoy your stay & <a href="mailto:thejdela@gmail.com">say hello</a> if you have some time.
                    </h1>
                </column>
            </Grid>
        </Section>
    )
}

export default Home;