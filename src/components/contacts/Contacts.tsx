import { Card, CardActionArea, CardContent, CardMedia, Grid2, Paper, Typography } from '@mui/material';
interface ContactsList {
    icon: any
    name: string
    email: string
    number: string
}

export default function Contacts({icon,name,email,number}:ContactsList){
    
    return(
      <Grid2 padding={2}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {icon}{name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {email}
        </Typography>
        <Typography variant={'h6'}  sx={{ color: 'text.secondary' }}>
         {number}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </Grid2>
  ) 
}


     
    

    