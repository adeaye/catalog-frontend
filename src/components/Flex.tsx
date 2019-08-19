import * as React from "react";

interface Props {
  children?: React.ReactNode;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  style?: object;
}

class Flex extends React.PureComponent<Props, any> {
  public render() {
    const {
      children,
      direction,
      alignItems,
      justifyContent,
      style: customStyle = {}
    } = this.props;

    const style: any = {
      display: "flex",
      flexWrap: 'wrap',
      maxWidth: '100%',
    };

    if (direction) {
      style.flexDirection = direction;
    }
    if (alignItems) {
      style.alignItems = alignItems;
    }
    if (justifyContent) {
      style.justifyContent = justifyContent;
    }

    return (
      <div style={customStyle ? { ...style, ...customStyle } : style}>
        {children}
      </div>
    );
  }
}

export default Flex;
