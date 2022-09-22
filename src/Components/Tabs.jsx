import * as React from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactComponent as PeopleIcon }  from "../Assets/Icons/people.svg"
import {firstDayArray, secondDayArray} from "../Constants"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0078c5',
    },
    secondary: {
      main: '#070706',
    },
  },
});

function TabPanel(props ) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={styles.tabBox} sx={{ width: '60%', margin:"0 0 4rem 0"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="SÁBADO, OCTUBRE 8" {...a11yProps(0)} sx={{ width: '50%'}}/>
            <Tab label="DOMINGO, OCTUBRE 9" {...a11yProps(1)} sx={{ width: '50%' }}/>
          </Tabs>
        </Box>
        <TabPanel  value={value} index={0}  >
          <div className={styles.panel}>
            <h1>SÁBADO, OCT 8</h1>
            <ul>
            {firstDayArray.map((agenda) => (
                <li>
                <h2>{agenda.time}</h2>
                <span></span>
                <div>
                  <h3>{agenda.title}</h3>
                  <div className={styles.author}>
                    <PeopleIcon/> &nbsp;
                    {agenda.speaker}
                  </div>
                </div>
              </li>
              ))}       
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={styles.panel}>
            <h1>DOMINGO, OCT 9</h1>
            <ul>
            {secondDayArray.map((agenda) => (
                <li>
                <h2>{agenda.time}</h2>
                <span></span>
                <div>
                  <h3>{agenda.title}</h3>
                  <div className={styles.author}>
                    <PeopleIcon/>
                    {agenda.speaker}
                  </div>
                </div>
              </li>
              ))}         
            </ul>
          </div>
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}
