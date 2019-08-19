import * as React from "react";

interface Props {
  childrren?: React.ReactNode;
  inline?: boolean;
  weight?:
    | number
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | undefined;
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
}

class Txt extends React.PureComponent<Props> {
  public render() {
    const {
      children,
      inline,
      color = "#484848",
      size = "1em",
      weight = "normal",
      style: customStyle = {}
    } = this.props;

    const style: React.CSSProperties = {
      fontFamily: "Roboto",
      maxWidth: "100%",
      wordBreak: "break-word",
      lineHeight: "1.2em"
    };

    if (size) {
      style.fontSize = size;
    }
    if (weight) {
      style.fontWeight = weight;
    }
    if (color) {
      style.color = color;
    }
    if (inline) {
      style.display = "inline-block";
    }

    return (
      <div style={customStyle ? { ...style, ...customStyle } : style}>
        {children}
      </div>
    );
  }
}

export default Txt;
