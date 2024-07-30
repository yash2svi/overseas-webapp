import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#04143F',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'15th Louis St, london 92382, eng'} 
        />
        <FooterLink 
        text={'25 999-345-10800'} 
        />
        <FooterLink 
        text={'info@overseas.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Help'} />
        <FooterLink text={'Donate'} />
        <FooterLink text={'Merchandise'} />
        <FooterLink text={'Citizen Science'} />
        <FooterLink text={'Contact'} />
        <FooterLink text={'FAQ'} />
      </StackColumn>
      <StackColumn>    
        <FooterTitle text={'About'} />
        <FooterLink text={'Rivers'} />
        <FooterLink text={'Impact Dashboard'} />
        <FooterLink text={'Milestones'} />
        <FooterLink text={'Media Gallery'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Overseas'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#FDFDFD',
            "&:hover": {
              color: '#EC6E11',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#FDFDFD',
            "&:hover": {
              color: '#EC6E11',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; Overseas Inc
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer