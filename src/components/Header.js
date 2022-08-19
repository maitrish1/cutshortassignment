import { Typography } from '@mui/material'
import React from 'react'

function Header({ desc}) {
  return (
    <Typography variant='h4'>{desc}</Typography>
  )
}

export default Header