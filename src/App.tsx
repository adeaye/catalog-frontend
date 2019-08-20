import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TopMenu from './components/TopMenu';
const Catalog = React.lazy(() => import("./container/catalog/CatalogPage"));
const CatalogDetail = React.lazy(() => import("./container/catalog/CatalogDetailPage"));
const NotFound = React.lazy(() => import('./container/NotFound'));

class App extends React.Component<any, any> {
  public render() {
    return (
        <React.Fragment>
          <BrowserRouter>
            <React.Fragment>
            <TopMenu/>
            <React.Suspense fallback={<p>Please wait...</p>}>
            <Switch>
              <Route path="/" exact={true} render={() => (
                <Redirect to={'/catalog'} />
              )} />
              <Route path="/catalog" exact={true} component={Catalog} />
              <Route path="/catalog/:productId" exact={true} component={CatalogDetail} />
              <Route component={NotFound} />
            </Switch>
            </React.Suspense>
            </React.Fragment>
          </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default App;
