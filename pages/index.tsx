import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

import Heading from '../components/Heading';
import Layout from '../components/Layout';

// TODO: Issue templates

export default function IndexPage() {
  return (
    <Layout>
      <Box textAlign='center'>
        <Heading>Welcome</Heading>
        <Typography paragraph>
          Choose a tool from the menu to get started!
        </Typography>
        <Typography paragraph>
          Don&apos;t see the tool you need?{' '}
          <a
            href='https://github.com/dlford/utils.dlford.io/issues/new'
            target='_blank'
            rel='noopener noreferrer'
          >
            Request it here
          </a>
        </Typography>
      </Box>
    </Layout>
  );
}
