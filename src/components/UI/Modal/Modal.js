import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from './ModalStyles'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import {UserContext,DateContext} from '../../../context'
import user_image from '../../../images/60111.jpg'

const Modal = (props) => {
  const classes = useStyles()
  const {setUser} = React.useContext(UserContext)
  const {setActive} = React.useContext(DateContext)
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = (item) => {
    setOpen(true)
    setUser(item.real_name)
  }

  const handleClose = () => {
    setOpen(false)
    setUser(null)
  }
  const handleCalendar = (date) =>{
    setActive(date)
    props.history.push('/active')
  }

  const activities = props.item.activity_periods.map((date,index)=>{
    let start_time = new Date(date.start_time).toLocaleTimeString()
    let end_time = new Date(date.end_time).toLocaleTimeString()
    return (
      <Box className={classes.Content} key={index} textAlign="left" m={1}>
    <Typography variant="h6" gutterBottom>
    {date.start_time.substring(0,11)} from: {start_time} - to: {end_time}
    </Typography>
    <div className={classes.Option}>
    <Typography variant="subtitle1" className={classes.OptionText}>
    Check on</Typography>
    </div>
    <Button onClick={()=>handleCalendar(date)} color="default">
      <CalendarTodayIcon />
    </Button>
    </Box>
  )})

  return (
    <div>
      <Box className={classes.Box} p={1} m={3} bgcolor="grey.300" onClick={()=>handleClickOpen(props.item)}>
        <Box>
        <img className={classes.UserImage} src={user_image} alt={props.item.real_name}/>
        </Box>
        <em>{props.item.real_name}</em>
        <div className={classes.Location}>
        Location:{props.item.tz}
        </div>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <div className={classes.DialogHeader}>
        <Avatar className={classes.large}>
          {props.item.real_name[0]}
        </Avatar>
        <DialogTitle id="alert-dialog-title">
          {props.item.real_name}
        </DialogTitle>
      </div>
      <DialogTitle id="alert-dialog-title">
        Active On:
      </DialogTitle>
            {activities}

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal
