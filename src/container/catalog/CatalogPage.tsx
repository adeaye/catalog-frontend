import * as React from "react";
import { fetchProducts } from "./CatalogActions";
import { connect } from "react-redux";
import { ProductRequestUriParams, Entities } from "./CatalogInterfaces";
import { Grid, Container } from "semantic-ui-react";
import CardWrapper from "./components/CardWrapper";
import { RouteComponentProps } from "react-router";
import CardLoader from "src/components/CardLoader";
import Spacer from "src/components/Spacer";

interface Props extends RouteComponentProps<any> {
  isLoading: boolean;
  page: number;
  entities: Entities;
  byIds: Array<number>;
  itemsPerPage: number;
  totalPages: number;
  dispatchFetchProducts(uriParams?: ProductRequestUriParams): any;
}

class CatalogPage extends React.Component<Props, any> {
  state = {
    hasNextPage: true,
    isNextPageLoading: false,
    items: [],
    number: 0
  };

  async componentDidMount() {
    await this.props.dispatchFetchProducts();
  }
  loadNextPage = () => {
    const { page, dispatchFetchProducts } = this.props;
    dispatchFetchProducts({ page: page + 1 });
  };
  goToDetailPage = (productId: number) => {
    const { history } = this.props;
    history.push(`catalog/${productId}`);
  };
  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextProps.byIds === this.props.byIds) {
      return false;
    }
    return true;
  }
  render() {
    const { isLoading, page, totalPages, byIds, entities } = this.props;
    return (
      <Container fluid={true} style={{ height: "100%" }}>
        <Grid style={{ height: "100%" }}>
          <Grid.Column>
            {entities ? (
              <CardWrapper
                hasNextPage={page < totalPages}
                isNextPageLoading={isLoading}
                items={entities}
                itemIds={byIds}
                loadNextPage={this.loadNextPage}
                goToDetail={this.goToDetailPage}
              />
            ) : (
              <React.Fragment>
                <Spacer height={65} />
                <CardLoader style={{ width: "450px", margin: "auto" }} />
                <Spacer height={20} />
                <CardLoader style={{ width: "450px", margin: "auto" }} />
              </React.Fragment>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const MSTP = state => {
  const {
    isLoading,
    page,
    byIds,
    entities,
    itemsPerPage,
    totalPages
  } = state.catalog;

  return { isLoading, page, byIds, entities, itemsPerPage, totalPages };
};

const MDTP = {
  dispatchFetchProducts: fetchProducts
};

export default connect(
  MSTP,
  MDTP
)(CatalogPage);
