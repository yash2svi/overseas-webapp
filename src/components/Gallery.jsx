import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://cdn.shopify.com/s/files/1/0996/1022/files/Jembrana.Clean.River.5.jpg?v=1710355265'
        },
        {
            alt: 'image2',
            url: 'https://cdn.shopify.com/s/files/1/0996/1022/files/JL__DSC2739.jpg?v=1710356622'
        },
        {
            alt: "image3",
            url: 'https://cdn.shopify.com/s/files/1/0996/1022/files/Photo_6553768_DJI_168_jpg_10431419_0_20203793840_photo_original-_1.jpg?v=1710354546'
        },
        {
            alt: "image4",
            url: 'https://cdn.shopify.com/s/files/1/0996/1022/files/DSC6538.jpg?v=1710354965'
        
        },  
        {
            alt: "image5",
            url: 'https://cdn.shopify.com/s/files/1/0996/1022/files/GOPR4763-_1_-_4.jpg?v=1710355264'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Past events '
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                Glimpse of drives conducted in various countries 
                </Typography>
                <Paragraph text={
                    ' Thanks to millions of volunteers around the world, the Overseas has become a beacon of hope, \
                      leading and inspiring action in support of our ocean.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery