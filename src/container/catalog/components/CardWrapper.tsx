import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import CatalogCard from "./CatalogCard";

interface Props {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  itemIds: Array<number>;
  items: any;
  loadNextPage(): any;
  goToDetail(productId: number): any;
}

class CardWrapper extends React.PureComponent<Props> {
  itemCount = () => {
    const { hasNextPage, itemIds } = this.props;
    return hasNextPage ? itemIds.length + 1 : itemIds.length;
  };
  loadMoreItems = () => {
    const { isNextPageLoading, loadNextPage } = this.props;
    return isNextPageLoading ? null : loadNextPage;
  };
  isItemLoaded = index => {
    const { hasNextPage, itemIds } = this.props;
    return !hasNextPage || index < itemIds.length;
  };
  renderItem = ({ index, style }) => {
    const { itemIds, items, goToDetail } = this.props;
    if (!this.isItemLoaded(index)) {
      return (
        <div style={{ ...style, top: parseFloat(style.top) + 65 }}>
          Please wait...
        </div>
      );
    } else {
      const selectedId = itemIds[index];
      return (
        <div style={{ ...style, top: parseFloat(style.top) + 65 }}>
          <CatalogCard
            onClick={() => goToDetail(selectedId)}
            style={{ margin: "auto", width: "450px" }}
            product={items[selectedId]}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={this.isItemLoaded}
            itemCount={this.itemCount()}
            loadMoreItems={this.loadMoreItems()}
          >
            {({ onItemsRendered, ref }) => (
              <List
                className="List"
                height={height}
                width={width}
                itemCount={this.itemCount()}
                itemSize={525}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {this.renderItem}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    );
  }
}

export default CardWrapper;
