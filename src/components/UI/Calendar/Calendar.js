import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import {UserContext,DateContext} from '../../../context'
import Button from '@material-ui/core/Button';
import useStyles from './CalendarStyles.js'

const Calendar = (props) => {
  const classes = useStyles()
  const {user} = React.useContext(UserContext)
  const {active} = React.useContext(DateContext)
  const [view,setView] = React.useState('Day')
  let data = null
  if(active!==null){
    data = [{
                Id: 1,
                Subject: user+":active time",
                StartTime: new Date(active.start_time),
                EndTime: new Date(active.end_time),
            }];
  }

  const onPopupOpen = (args) =>{
     args.cancel = true;
  }

  return (
    <div style={{marginTop:'10px'}}>
    <div className={classes.root}>
    {user!==null?<p>{user}</p>:null}

    <Button variant="outlined" onClick={()=>props.history.goBack() }>Back</Button>
    <Button variant="outlined" color="secondary" onClick={()=>setView('Day') }>Day</Button>
    <Button variant="outlined" color="secondary" onClick={()=>setView('Week') }>Week</Button>
    <Button variant="outlined" color="secondary" onClick={()=>setView('Month') }>Month</Button>
    </div>
    <ScheduleComponent
    height={(window.innerHeight-132)}
    selectedDate={active!==null ?new Date(active.start_time):new Date()}
    eventSettings={{ dataSource: data}}
    popupOpen={onPopupOpen}
    currentView={view}
    showHeaderBar={false}>
    <Inject services={[Day, Week, WorkWeek, Month]}/>
    </ScheduleComponent>;
    </div>
  );
}

export default Calendar
