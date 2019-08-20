import * as React from "react";
import { Card } from 'semantic-ui-react';

interface Props {
  text: string;
  style?: React.CSSProperties;
}

class CardDescription extends React.PureComponent<Props> {
  render() {
    const {text} = this.props;
    return (
      <Card {...this.props}>
        <Card.Content>
          <Card.Header>Description</Card.Header>
          <Card.Description>
            {text}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CardDescription;