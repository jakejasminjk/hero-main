import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'intelligence', headerName: 'Intelligence', width: 150 },
    { field: 'strength', headerName: 'Strength', type: 'number', width: 150 },
    { field: 'speed', headerName: 'Speed', type: 'number', width: 150 },
    { field: 'durability', headerName: 'Durability', type: 'number', width: 150 },
    { field: 'power', headerName: 'Power', type: 'number', width: 130 },
    { field: 'combat', headerName: 'Combat', type: 'number', width: 130 }
    
];

const rows = [
    { id: 1, name: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const createRows = (heros) => {
    let data = [];
    for(let i = 0; i < heros.length; i++){
        data.push({
            id: heros[i].id,
            name: heros[i].name,
            intelligence: heros[i].powerstats.intelligence,
            strength: heros[i].powerstats.strength,
            speed: heros[i].powerstats.speed,
            durability: heros[i].powerstats.durability,
            power: heros[i].powerstats.power,
            combat: heros[i].powerstats.combat,
        })
    }
    return data;
}
export default function ListHero({heros}) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={createRows(heros)} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}