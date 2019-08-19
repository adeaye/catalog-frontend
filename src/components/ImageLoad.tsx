import * as React from "react";
import { Image } from "semantic-ui-react";
const loadingImage = require('../assets/images/loading.png'); //tslint:disable-line
const loadingGif = require('../assets/images/loading.gif'); //tslint:disable-line

interface Props {
  url: string;
  size?: imageSize;
  customStyle?: React.CSSProperties;
  centered?: boolean;
  animate?: boolean;
  onClick?(...props: any): any;
}

type imageSize =
  | 'mini'
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'big'
  | 'huge'
  | 'massive';

interface State {
  isLoaded: boolean;
}

class ImageLoad extends React.PureComponent<Props, State> {
  state = {
    isLoaded: false
  };
  finishLoad = () => {
    this.setState({
      isLoaded: true
    });
  };
  render() {
    const { isLoaded } = this.state;
    const { url, customStyle, animate, ...props } = this.props;
    return (
      <React.Fragment>
        {!isLoaded && <Image src={animate ? loadingGif : loadingImage} />}
        <Image
          style={{ display: isLoaded ? "block" : "none", ...customStyle }}
          src={url}
          onLoad={this.finishLoad}
          {...props}
        />
      </React.Fragment>
    );
  }
}

export default ImageLoad;
