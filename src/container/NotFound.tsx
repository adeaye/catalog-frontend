import * as React from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';

class NotFound extends React.PureComponent {
  render() {
    return(
      <Container style={{marginTop: '100px'}} fluid={true}>
        <Grid>
          <Grid.Column>
          <Card style={{width: '450px', margin: 'auto'}}>
        <Card.Content>
          <Card.Header style={{fontSize: '25px'}}>404</Card.Header>
          <Card.Description>
            Sorry your page doesnt exist please go to another page
          </Card.Description>
        </Card.Content>
      </Card>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default NotFound;