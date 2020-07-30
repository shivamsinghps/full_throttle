import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
   '& > *': {
     margin: theme.spacing(1),
   },
   '& > p':{
     fontFamily:'BlinkMacSystemFont',
     fontSize:'24px',
     padding: theme.spacing(1),
     backgroundColor:'#888888',
     color:'white',
     borderRadius:3

   }
 },
}));


export default useStyles
