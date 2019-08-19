import * as React from "react";
import { Card, Icon, Label, Button, Container, Grid } from "semantic-ui-react";
import { Product } from "./CatalogInterfaces";
import Flex from "src/components/Flex";
import ImageLoad from "src/components/ImageLoad";
import { fetchProduct } from "./CatalogActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
const CatalogDetailModal = React.lazy(() => import("./components/CatalogDetailModal"));

interface Props extends RouteComponentProps<any> {
  isLoading: boolean;
  product: Product;
  dispatchFetchProduct(productId: number): any;
}

class CatalogDetailPage extends React.PureComponent<Props, any> {
  state = {
    isModalOpen: false
  };
  async componentDidMount() {
    const {
      dispatchFetchProduct,
      match: { params }
    } = this.props;

    await dispatchFetchProduct(params.productId);
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };
  render() {
    const { product } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Container style={{ paddingTop: "65px" }}>
        <Grid centered={true} columns={2}>
          <Grid.Column>
            {product ? (
              <Card fluid={true}>
                <ImageLoad
                  customStyle={{ cursor: "pointer" }}
                  url={product.photos[0].url}
                  onClick={this.toggleModal}
                />
                <Card.Content>
                  <Flex justifyContent={"space-between"}>
                    <Card.Header style={{ fontSize: "20px" }}>
                      {product.name}
                    </Card.Header>
                    <Button>Beli</Button>
                  </Flex>
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
            ) : (
              "Loading"
            )}
          </Grid.Column>
        </Grid>
        {isModalOpen && (
          <React.Suspense fallback={<p>Opening modal...</p>}>
            <CatalogDetailModal
            imageUrl={product.photos[0].url}
            isOpen={true}
            onClose={this.toggleModal}
          />
          </React.Suspense>
        )}
      </Container>
    );
  }
}

const MSTP = (state: any) => {
  const { isLoading, entity } = state.catalog;

  return { isLoading, product: entity };
};

const MDTP = {
  dispatchFetchProduct: fetchProduct
};

export default connect(
  MSTP,
  MDTP
)(CatalogDetailPage);
