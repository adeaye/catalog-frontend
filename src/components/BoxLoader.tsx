import * as React from "react";

interface Props {
  height: number;
  width?: number;
  float?: Float;
  borderRadius?: string;
}

type Float = "right" | "left";

class BoxLoader extends React.PureComponent<Props> {
  render() {
    const { height, width, float, borderRadius } = this.props;

    const style: React.CSSProperties = {};

    if (height) {
      style.height = height;
    }
    if (width) {
      style.width = width;
    } else {
      style.width = "100%";
    }
    if (float) {
      style.float = float;
    }
    if (borderRadius) {
      style.borderRadius = borderRadius;
    }

    return <div style={style} className={"loading--box"} />;
  }
}

export default BoxLoader;
