import React from 'react';
import useStyles from './UserStyles'
import Grid from '@material-ui/core/Grid';
import Modal from '../UI/Modal/Modal'
import axios from 'axios'
const UsersList = (props) => {
const classes = useStyles();
const [data,setData] = React.useState(null)


React.useEffect(()=>{

	axios.get('https://fullthrottle-ece03.firebaseio.com/members.json').then(res=>{
		setData(res.data)
	}
).catch(err=>console.log(err.message))
},[])

let users = null

if(data!==null){
users = data.map(item =>{
return (<Grid key={item.id} item xs={12} sm={6} md={2}>
          <Modal {...props} item={item}/>
        </Grid>)
})}

  return (
    <div className={classes.root}>
      <Grid container spacing={1}
      justify="center"
      alignItems="center">
        {users}
        <Grid item xs={12} />
      </Grid>
    </div>
  );
}

export default UsersList
