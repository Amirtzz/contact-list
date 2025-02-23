import { AppBar, IconButton, SvgIcon, Toolbar, Typography } from "@mui/material"
import ContactsIcon from '@mui/icons-material/Contacts';
interface HeaderProps{
    title:string
}

export default function Header({title}:HeaderProps){
    return       <AppBar position="sticky">
    <Toolbar>
      <IconButton>
      <ContactsIcon sx={{ color:'white' }}/>
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        {title}
      </Typography>
     
    </Toolbar>
  </AppBar>
}