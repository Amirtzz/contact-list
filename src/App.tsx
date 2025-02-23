import './App.css';
import Header from './components/header/Header';
import Contacts from './components/contacts/Contacts';
import FaceIcon from '@mui/icons-material/Face';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';
import Face3Icon from '@mui/icons-material/Face3';

function App() {
  return (
    <div className="App">
      <Header title='Contacts' />
      <Contacts
      name='Taha'
      email='imtaha.ir@gmail.com'
      number='09112277550'
      icon={<FaceIcon/>}/>
      <Contacts
      name='Nazi'
      email='nazaninsgh9@gmail.com'
      number='09056364770'
      icon={<Face4Icon/>}
      />
      <Contacts
      name='Mehdi'
      email='jigsaw@gmail.com'
      number='09056245615'
      icon={<Face5Icon/>}/>
      <Contacts
      name='Maman'
      email='Mozhganebrahimi@gmail.com'
      number='09195770266'
      icon={<Face3Icon/>}/>
      </div>
  );
}
export default App;