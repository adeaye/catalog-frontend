import * as React from "react";
import { Card, Feed } from "semantic-ui-react";
import Flex from "./Flex";
import Spacer from "./Spacer";
import LineLoader from "./LineLoader";
import BoxLoader from "./BoxLoader";

interface Props {
  style?: React.CSSProperties;
  fluid?: boolean;
}

class CardTestimonialLoader extends React.PureComponent<Props> {
  render() {
    const { ...props } = this.props;
    return (
      <Card {...props}>
        <Card.Content>
          <div style={{ width: "100%" }}>
            <Flex justifyContent={"space-between"}>
              <Card.Header style={{ fontSize: '20px' }}>Testimonial</Card.Header>
            </Flex>
          </div>
          <Spacer height={5} />
          <Card.Description>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <BoxLoader borderRadius={"50%"} width={35} height={35} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <LineLoader width={30} />
                    <Feed.Date>
                      <LineLoader width={20} />{" "}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    <LineLoader width={100} />
                    <LineLoader width={90} />
                    <LineLoader width={40} />
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <LineLoader width={10} />
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <BoxLoader borderRadius={"50%"} width={35} height={35} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <LineLoader width={30} />
                    <Feed.Date>
                      <LineLoader width={20} />{" "}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    <LineLoader width={100} />
                    <LineLoader width={90} />
                    <LineLoader width={40} />
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <LineLoader width={10} />
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <BoxLoader borderRadius={"50%"} width={35} height={35} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <LineLoader width={30} />
                    <Feed.Date>
                      <LineLoader width={20} />{" "}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    <LineLoader width={100} />
                    <LineLoader width={90} />
                    <LineLoader width={40} />
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <LineLoader width={10} />
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default CardTestimonialLoader;
