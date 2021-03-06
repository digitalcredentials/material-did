import React, { FC, HTMLAttributes } from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QRCode from 'qrcode.react';
import { JSONEditor } from '../JSONEditor';
import { LinkedDataPropertyTable } from '../LinkedDataPropertyTable';

import { CredentialCard } from './CredentialCard';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#bdbdbd',
  },
}));

export interface IVerifiableCredentialPreviewProps
  extends HTMLAttributes<HTMLDivElement> {
  document: any;
}

export const VerifiableCredentialPreview: FC<IVerifiableCredentialPreviewProps> = ({
  document,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'primary'}>
        <Tabs value={value} onChange={handleChange} aria-label="VC Tabs">
          <Tab label="Card" {...a11yProps(0)} />
          <Tab label="Table" {...a11yProps(1)} />
          <Tab label="QR Code" {...a11yProps(2)} />
          <Tab label="Source" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CredentialCard verifiableCredential={document} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LinkedDataPropertyTable document={document} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QRCode value={document.id} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <JSONEditor value={JSON.stringify(document, null, 2)} />
      </TabPanel>
    </div>
  );
};
