import React, {useState} from "react";
import { Button, Grid, Typography, CircularProgress, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Geolocation from 'react-native-geolocation-service';


const useStyles = makeStyles({
  root: {
    marginBottom: '20px'
  },
});


function Emergency() {

  const classes = useStyles()
  const [notification, setNotification] = useState('Time to be a hero');
  const [progress, setProgress] = useState(false)
  const [victim, setVictim] = useState('')


  const imageHandleUpload = () => {
    const body ={'file1': image, 'email':email}
    console.log(body)

    fetch(upload_base_url +'/fetchuseronimage', {
      method: 'POST',
      body: body,
      headers: {
         'Content-Type': 'application/json',
        }
    })
      .then(res => console.log(res))
      .then(json => console.log("error"))
   
}
  

  const putBloodRequest = (event)=>{
    setProgress(true)
    Geolocation.getCurrentPosition(
      (position) => {
        const body = {
          anonymous: true,
          face_signature: null,
          victim_id: victim,
          timestamp: new Date().getTime(),
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        fetch('https://us-central1-bloodbankasaservice.cloudfunctions.net/get_user_by_request',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
        }).then(response =>{
          return response.text();
        }).then(data =>{
          setProgress(false)
          setNotification(data)
        }).catch(error => {
          setProgress(false)
          console.log(error)
        });

      },  
      (error) => {
        setProgress(false)
        setNotification('Network Error. Try Again!')
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 100000
      }
    );
  }

  return (
    <Grid container justify="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }}>
      <TextField value={victim} className={classes.root} onChange={(e) => {
        setVictim(e.currentTarget.value)
      }}></TextField>
      <TextField type="file" onChange={imageHandleChange} />
      <Button onClick={imageHandleUpload}>Upload Image</Button>
        <Button variant="contained" className={classes.root} size="large" color="secondary" onClick = {(event) => {putBloodRequest(event)}}>
          Emergency!
        </Button>
        {
          progress ? <CircularProgress size={30} />: <Typography  gutterBottom>{notification}</Typography>
        }
    </Grid>
    
  );
}

export default Emergency;
