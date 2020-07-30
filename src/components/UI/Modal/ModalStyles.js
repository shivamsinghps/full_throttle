import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Box:{
    borderRadius:'10px',
    textAlign:'center',
  },
  Location:{
    margin:3,
    overflow:'hidden'
  },
  paper: {
    fontSize:'24px',
    fontFamily:'Raleway'
  },
  DialogHeader:{
    display:'flex',
    marginLeft:'10px',
    marginTop:'20px',
    minWidth:'370px'
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin:theme.spacing(1),
    backgroundColor:'orange'
  },
  Content:{
    marginRight:theme.spacing(2),
    marginLeft:theme.spacing(2),
    padding:theme.spacing(1),
  },
  Option:{
    paddingRight:theme.spacing(2),
    marginLeft:theme.spacing(11),
    display:'inline',
  },
  OptionText:{
    display:'inline',
    fontFamily:'Apple Color Emoji'
  },
  UserImage:{
    maxHeight:'100px',
    maxWigth:'100px',
    padding:theme.spacing(2),
    marginBottom:theme.spacing(2)
  }
}));


export default useStyles
