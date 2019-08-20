import * as React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";
import Spacer from "src/components/Spacer";

interface Props {
  style?: React.CSSProperties;
}

class CatalogDetailTestimonial extends React.PureComponent<Props> {
  render() {
    const { ...props } = this.props;
    return (
      <Card {...props}>
        <Card.Content>
          <Card.Header style={{ fontSize: "20px" }}>Testimonial</Card.Header>
          <Spacer height={20} />
          <Card.Description>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://picsum.photos/35/35?grayscale" />
                <Feed.Content>
                  <Feed.Summary>
                    <a>Joe Henderson</a>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    Ours is a life of constant reruns. We're always circling
                    back to where we'd we started, then starting all over again.
                    Even if we don't run extra laps that day, we surely will
                    come back for more of the same another day soon.
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />5 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://picsum.photos/35/35?grayscale" />
                <Feed.Content>
                  <Feed.Summary>
                    <a>Joe Henderson</a>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    Ours is a life of constant reruns. We're always circling
                    back to where we'd we started, then starting all over again.
                    Even if we don't run extra laps that day, we surely will
                    come back for more of the same another day soon.
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />5 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://picsum.photos/35/35?grayscale" />
                <Feed.Content>
                  <Feed.Summary>
                    <a>Joe Henderson</a>
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text={true}>
                    Ours is a life of constant reruns. We're always circling
                    back to where we'd we started, then starting all over again.
                    Even if we don't run extra laps that day, we surely will
                    come back for more of the same another day soon.
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />5 Likes
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

export default CatalogDetailTestimonial;
