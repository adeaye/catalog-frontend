import * as React from "react";

interface Props {
  width: WidthOptions;
}

type WidthOptions = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

class LineLoader extends React.PureComponent<Props> {
  render() {
    const { width } = this.props;
    return <div className={`loading--line loading--width${width}`} />;
  }
}

export default LineLoader;
