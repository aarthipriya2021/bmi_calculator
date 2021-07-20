import React, { useState} from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        
    },
    image: {
        backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/03/84/15/12/1000_F_384151262_qnF9pHix7Nr03adxkh4F2yLmPbIlFGov.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Form() {
    const classes = useStyles();

    const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState('');

  function CalculateBMI() {
    
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi)

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    else if (bmi >= 25.0 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }
    return (
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        BMI CALCULATOR
                    </Typography>
                        <form className={classes.form} noValidate >
                            <TextField
                                variant='outlined'
                                id="height"
                                margin='normal'
                                required
                                fullWidth
                                placeholder='Height in cm'
                                type="text"
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                            />
                            <TextField
                                variant='outlined'
                                id="weight"
                                margin='normal'
                                required
                                fullWidth
                                placeholder='Weight in kg'
                                type="text"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                            />
                        </form>
                        <div className={classes.button}>
                            <Button 
                                type='submit'
                                variant="contained" 
                                color="primary" 
                                fullWidth
                                className={classes.submit}
                                onClick={CalculateBMI}
                            >Validate
                            </Button>
                        </div>
                        {bmiResult &&
                        <div>
                            <p>Your BMI is: {bmiResult}</p>
                            <p>You are currently: {status}</p>
                        </div>}
                </div>
              </Grid>  
        </Grid>
    );
}
export default Form
