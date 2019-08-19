import * as React from "react";

interface Props {
  height?: number;
  width?: number;
}

class Spacer extends React.PureComponent<Props> {
  public render() {
    const { height, width } = this.props;

    const style: React.CSSProperties = {};

    if (height) {
      style.height = height;
    }
    if (width) {
      style.width = width;
    }

    return <div style={style} />;
  }
}

export default Spacer;
