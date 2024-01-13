import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Stack, ThemeProvider } from '@mui/material';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import { createTheme } from '@mui/material';

function App() {
  // Hook for managing the dark and light mode
  const [mode, setMode] = useState("light");
  // for Dark Mode
  const darkTheme = createTheme ({
    palette:{
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
         <Box bgcolor={"background.default"} color={"text.primary"}>
           <Navbar />
             <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
                <Feed />
                <Rightbar />
             </Stack>
             <Add />
         </Box>
    </ThemeProvider>
  );
}

export default App;
