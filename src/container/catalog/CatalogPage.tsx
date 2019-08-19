import * as React from 'react';
import { fetchProducts } from './CatalogActions';
import { connect } from 'react-redux';
import { ProductRequestUriParams } from './CatalogInterfaces';
import { 
  Grid, 
  Container, 
  // Card 
} from 'semantic-ui-react';
// import CatalogCard from './components/CatalogCard';
import CardWrapper from './components/CardWrapper';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {
  isLoading: boolean;
  page: number;
  entities: any;
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
    number: 0,
  };
  
  async componentDidMount() {
    await this.props.dispatchFetchProducts();
    console.log('props', this.props);
  }
  loadNextPage = () => {
    const {page, dispatchFetchProducts} = this.props;
    dispatchFetchProducts({page: page + 1});
  }
  goToDetailPage = (productId: number) => {
    const {history} = this.props;
    history.push(`catalog/${productId}`);
  }
  render() {
    // const { hasNextPage, isNextPageLoading, items } = this.state;
    const {isLoading, page, totalPages, byIds, entities} = this.props;
    return(
      // <CardWrapper
      //         hasNextPage={hasNextPage}
      //         isNextPageLoading={isNextPageLoading}
      //         items={items}
      //         loadNextPage={this._loadNextPage}
      //       />
      <Container fluid={true} style={{height: '100%'}}>
        <Grid style={{height: '100%'}}>
          {/* <Grid.Row style={{height: '100%'}} centered={true} columns={3}> */}
            {/* <Grid.Column>
              <CatalogCard/>
              <CatalogCard/>
              <CatalogCard/>
            </Grid.Column> */}
            <Grid.Column>
            <CardWrapper
              hasNextPage={page < totalPages}
              isNextPageLoading={isLoading}
              items={entities}
              itemIds={byIds}
              loadNextPage={this.loadNextPage}
              goToDetail={this.goToDetailPage}
            />
            </Grid.Column>
          {/* </Grid.Row> */}
        </Grid>
      </Container>
    );
  }
}

const MSTP = (state) => {
  const {isLoading, page, byIds, entities, itemsPerPage, totalPages} = state.catalog;

  return {isLoading, page, byIds, entities, itemsPerPage, totalPages};
};

const MDTP = {
  dispatchFetchProducts: fetchProducts
};

export default connect(MSTP, MDTP)(CatalogPage);