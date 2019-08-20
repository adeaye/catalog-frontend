import * as React from "react";
import { Card } from "semantic-ui-react";
import Flex from "./Flex";
import Spacer from "./Spacer";
import LineLoader from "./LineLoader";

interface Props {
  style?: React.CSSProperties;
  fluid?: boolean;
}

class CardDescriptionLoader extends React.PureComponent<Props> {
  render() {
    const { ...props } = this.props;
    return (
      <Card {...props}>
        <Card.Content>
          <div style={{ width: "100%" }}>
            <Flex justifyContent={"space-between"}>
              <Card.Header style={{ fontSize: '20px' }}>
                Description
              </Card.Header>
            </Flex>
          </div>
          <Spacer height={5} />
          <Card.Description>
            <Flex justifyContent={"space-between"}>
              <LineLoader width={90} />
              <LineLoader width={70} />
              <LineLoader width={80} />
            </Flex>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CardDescriptionLoader;
