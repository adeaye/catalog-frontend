import * as React from "react";
import { Modal } from 'semantic-ui-react';
import ImageLoad from 'src/components/ImageLoad';

interface Props {
  isOpen: boolean;
  imageUrl: string;
  onClose(): any;
}

class CatalogDetailModal extends React.PureComponent<Props> {
  render() {
    const {isOpen, onClose, imageUrl} = this.props;
    return (
      <Modal basic={true} open={isOpen} onClose={onClose} size="small">
        <Modal.Content>
          <ImageLoad url={imageUrl} centered={true} animate={true} />
        </Modal.Content>
      </Modal>
    );
  }
}

export default CatalogDetailModal;