import React from 'react';
import { Container, Typography, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
  const examples = ['neovim/neovim', 'nestjs/nest', 'denoland/deno'];

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" align="center">
        GitHub Pull Requests Viewer
      </Typography>
      <Typography variant="subtitle1" align="center">
        Type the repository in the URL or checkout some examples:
      </Typography>
      <List>
        {examples.map(path => (
          <ListItem key={path}>
            <Link to={path}>{path}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
