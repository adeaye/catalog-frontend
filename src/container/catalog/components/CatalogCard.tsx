import * as React from "react";
import { Card, Icon, Label, Button, Responsive } from "semantic-ui-react";
import { Product } from "../CatalogInterfaces";
import Flex from "src/components/Flex";
import ImageLoad from "src/components/ImageLoad";
import Spacer from 'src/components/Spacer';

interface Props {
  product: Product;
  style?: React.CSSProperties;
  fluid?: boolean;
  onClick?(...props: any): any;
}

class CatalogCard extends React.PureComponent<Props, any> {
  render() {
    const { product, onClick, ...props } = this.props;
    return (
      <Card {...props}>
        <ImageLoad
          url={product.photos[0].url}
          onClick={onClick}
          customStyle={{ cursor: "pointer" }}
        />
        <Card.Content>
          <Flex justifyContent={"space-between"}>
            <Card.Header style={{ fontSize: "20px" }}>
              {product.name}
            </Card.Header>
            <Responsive minWidth={768}>
              <Button basic={true} color={"red"}>
                <strong>Beli</strong>
              </Button>
            </Responsive>
          </Flex>
          <Spacer height={5}/>
          <Card.Meta>
            <span className="date">
              Size <Label size={"tiny"}>{product.detail.size}</Label>{" "}
            </span>
          </Card.Meta>
          <Card.Description>
            <Flex justifyContent={"space-between"}>
              <p>Color {product.detail.color}</p>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Rp {product.detail.normalPrice.toLocaleString("de-DE")}
              </span>
            </Flex>
          </Card.Description>
          <Responsive maxWidth={767}>
              <Button basic={true} color={"red"} floated={'right'}>
                <strong>Beli</strong>
              </Button>
              <div style={{clear: 'both'}} />
            </Responsive>
        </Card.Content>
        <Card.Content extra={true}>
          <Flex justifyContent={"space-between"}>
            <a>
              <Icon name="heart" />
              23 orang suka
            </a>

            {product.detail.stock < 5 && (
              <span>
                <Icon name="fire" color={"red"} />
                Tersisa {product.detail.stock}
              </span>
            )}
          </Flex>
        </Card.Content>
      </Card>
    );
  }
}

export default CatalogCard;
