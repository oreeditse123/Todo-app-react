import { Button } from "@mui/material";


export default function RemoveButtonComponent() {
    return <Button
        onClick={() => { console.log('Something will go here!') }}
        sx={{
            border: '2px solid aqua',
            marginLeft: '15px',
            color: "black"
        }}>Remove</Button>
}