import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import whyGive from '../../../Images/hush-naidoo-jade-photography-Zp7ebyti3MU-unsplash.jpg'
const WhyGiveBlood = () => {
    return (
        <div>
            <Container sx={{py:5}}>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <img style={{width : '100%'}} src={whyGive} alt="" />
                </Grid>
                <Grid item sx={{alignItems : 'center'}} xs={5}>
                    <Typography variant='h4'>
                        Why You Should Donate Blood ?
                    </Typography>
                    <Typography variant='body1' sx={{my:3}}>
                    About 328 million people currently live in the U.S. Each year, approximately 6.8 million people in the U.S donate blood. Annually, this adds up to about 13.6 million units of whole blood collected for donation in the U.S. The Red Cross provides about 40% of our nation’s blood and blood cell components to donors. Your blood donations are used for patients in need of surgery, cancer treatment and transfusions for blood loss from traumatic injuries. Want to know more about the blood supply in the U.S.? Visit the Facts About Blood Supply page.
                    </Typography>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default WhyGiveBlood;