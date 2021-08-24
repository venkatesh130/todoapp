import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default props =>
    <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
    
    <div 
    onClick={props.toggleComplete}>
     <Typography>
     {props.todo.text}
    </Typography>
    </div>
    <Button color='secondary' onClick={props.onDelete}>x</Button>
    </div>