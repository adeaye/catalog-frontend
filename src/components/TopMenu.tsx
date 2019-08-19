import * as React from 'react';
import { Menu, Image, Dropdown, Icon, Label } from "semantic-ui-react";
// import Flex from './Flex';
// import Spacer from './Spacer';
// import Txt from './Txt';
import { Link } from 'react-router-dom';
import * as logo from '../assets/images/logo.jpeg';

class TopMenu extends React.PureComponent {
  render() {
    return (
      <Menu icon={true} borderless={true} fixed="top">
        <Menu.Menu position="left">
          <Menu.Item as={Link} to="/">
            <Image src={logo} size={'mini'}/>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          {/* <Menu.Item
            as={Responsive}
            maxWidth={990}
            icon="bars"
            onClick={this.toggleSideMenu}
          /> */}
          {/* <Menu.Item as={Responsive} {...Responsive.onlyComputer}> */}
          <Menu.Item as={'a'}>
            <Icon name='cart' />
            <Label color='red'>
              2
            </Label>
          </Menu.Item>
          <Menu.Item as={'a'}>
            <Icon name='heart' />
            <Label color='red'>
              6
            </Label>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text={'Hello, John'}>
              <Dropdown.Menu>
                <Dropdown.Item text={"Profile"} />
                <Dropdown.Item text={"Logout"} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu;
