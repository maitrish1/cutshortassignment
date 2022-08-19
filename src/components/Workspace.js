import React from 'react'
import { Button } from '@mui/material'
function Workspace() {
  return (
    <Button sx={{ bgcolor: "#664de5", width:{xs:"80vw", sm:'50vw', md:'30vw'}, textTransform:'none' }} type="submit" variant="contained">
            {" "}
            Create Workspace
          </Button>
  )
}

export default Workspace