import * as React from "react";
import { Card, Responsive } from "semantic-ui-react";
import Flex from "./Flex";
import Spacer from "./Spacer";
import BoxLoader from "./BoxLoader";
import LineLoader from "./LineLoader";

interface Props {
  style?: React.CSSProperties;
  fluid?: boolean;
}

class CardLoader extends React.PureComponent<Props> {
  render() {
    const { ...props } = this.props;
    return (
      <Card {...props}>
        <BoxLoader height={300} />
        <Card.Content>
          <div style={{ width: "100%" }}>
            <Flex justifyContent={"space-between"}>
              <Card.Header style={{ width: "50%" }}>
                <LineLoader width={100} />
              </Card.Header>
              <Responsive minWidth={768} style={{ width: "30%" }}>
                <BoxLoader height={30} width={60} float={"right"} />
              </Responsive>
            </Flex>
          </div>
          <Spacer height={5} />
          <Card.Meta>
            <LineLoader width={20} />
          </Card.Meta>
          <Card.Description>
            <Flex justifyContent={"space-between"}>
              <LineLoader width={30} />
              <LineLoader width={30} />
            </Flex>
          </Card.Description>
          <Responsive maxWidth={767}>
            <BoxLoader height={30} width={60} float={"right"} />
          </Responsive>
        </Card.Content>
        <Card.Content extra={true}>
          <Flex justifyContent={"space-between"}>
            <LineLoader width={30} />
          </Flex>
        </Card.Content>
      </Card>
    );
  }
}

export default CardLoader;
