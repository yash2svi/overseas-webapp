import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/community.jpg';
import imgDetail2 from '../assets/scuba.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                    
                }}
                >
                    <Title
                    text={
                        'We run thousands of international cleanups'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Our plastic cleanups provides a fun and easy way for everyone to engage with our mission to protect our oceans.   <br />
                    Volunteers of all ages, local community groups, visitors, clubs, local and corporate businesses around the<br />
                    contribute to the success of our plastic cleanups which is vital to keeping the oceans clean.<br/>
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                    
                }}
                >
                    <Title
                    text={
                        'Join our underwater mission'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    At least 14 million tons of plastic end up in the ocean every year, and plastic makes up 80% of all marine debris found from surface waters to deep-sea sediments. <br /> 
                    Dive into our underwater plastic cleanup mission !
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;