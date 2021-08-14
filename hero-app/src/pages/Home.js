import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Button, FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';
import HeroCard from '../components/HeroCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        background: "linear-gradient(45deg, #89cff0 30%, #ff2052 90%)",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Home = () => {
    const classes = useStyles();
    const [items, setItems] = useState(1)
    const [limit, setLimit] = useState(10)
    const [heros, setHeros] = useState([])

    useEffect(() => {
        const getHeros = async () => {
            const allHeros = await fetchHeros()
            setHeros(allHeros)
        }
        getHeros()
    }, [items,limit])

    const fetchHeros = async () => {
        //`http://localhost:5000/hero/${items}/${limit}`
        const res = await fetch(`/backend/hero/${items}/${limit}`)
        console.log('response', res)
        //waits for response to turn into json 
        const data = await res.json()
        console.log('data', data)
        return data
    }

    const increaseLimit = () => {
        setLimit(limit+10)
    }
   
    const decreaseLimit = () => {
        if(limit-10 > 1){
            setLimit(limit - 10)
        }
        
    }

    const changeItems = (e) => {
        setItems(Number(e.target.value))
    }

    const changeLimit = (e) => {
        setLimit(Number(e.target.value))
    }
    let foo = new Array(5);
    let bar = new Array(366)
    for(let i = 1; i < foo.length; i++){
        foo[i] = i
    }
    for (let i = 1; i < bar.length; i++) {
        bar[i] = 366+i
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Hero Time</Paper>
                </Grid>
                {heros.map((hero) => {
                    return (<Grid item xs={6} sm={3} key={hero.id}>
                                <HeroCard className={classes.paper} hero={hero}/>
                            </Grid>)
                })}
            </Grid>
            <Button variant="contained" onClick={increaseLimit} color="primary">
                Show More
            </Button>
            <Button variant="contained" onClick={decreaseLimit} color="secondary">
                Show Less
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="items-select-label">Age</InputLabel>
                <Select
                    labelId="items-label"
                    id="items-select"
                    value={items}
                    onChange={changeItems}
                >
                    {foo.map((one) => {
                        return (<MenuItem value={one}>{one}</MenuItem>)
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="limit-select-label">Age</InputLabel>
                <Select
                    labelId="limit-label"
                    id="limit-select"
                    value={limit}
                    onChange={changeLimit}
                >
                    {bar.map((one) => {
                        return (<MenuItem value={one}>{one}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default Home
