import * as React from "react";
import { Container, Grid } from "semantic-ui-react";
import { Product } from "./CatalogInterfaces";
import { fetchProduct, clearProduct } from "./CatalogActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import CatalogCard from "./components/CatalogCard";
import CardLoader from "src/components/CardLoader";
import CatalogDetailDescription from "./components/CatalogDetailDescription";
import Spacer from 'src/components/Spacer';
import CatalogDetailTestimonial from './components/CatalogDetailTestimonial';
import CardDescriptionLoader from 'src/components/CardDescriptionLoader';
import CardTestimonialLoader from 'src/components/CardTestimonialLoader';
const CatalogDetailModal = React.lazy(() =>
  import("./components/CatalogDetailModal")
);

interface Props extends RouteComponentProps<any> {
  isLoading: boolean;
  product: Product;
  dispatchFetchProduct(productId: number): any;
  dispatchClearProduct(): any;
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
  componentWillUnmount() {
    this.props.dispatchClearProduct();
  }
  render() {
    const { product } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Container style={{ paddingTop: "65px" }}>
        <Grid>
          <Grid.Column>
            {product ? (
              <React.Fragment>
                <CatalogCard
                  onClick={this.toggleModal}
                  product={product}
                  style={{ margin: "auto", width: "450px" }}
                />
                <Spacer height={20}/>
                <CatalogDetailDescription
                  style={{ width: "450px", margin: "auto" }}
                  text={product.detail.description}
                />
                <Spacer height={20} />
                <CatalogDetailTestimonial style={{ width: "450px", margin: "auto" }}/>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <CardLoader style={{ width: "450px", margin: "auto" }} />
                <Spacer height={20}/>
                <CardDescriptionLoader style={{ width: "450px", margin: "auto" }}/>
                <Spacer height={20}/>
                <CardTestimonialLoader style={{ width: "450px", margin: "auto" }}/>
              </React.Fragment>
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
  dispatchFetchProduct: fetchProduct,
  dispatchClearProduct: clearProduct
};

export default connect(
  MSTP,
  MDTP
)(CatalogDetailPage);
