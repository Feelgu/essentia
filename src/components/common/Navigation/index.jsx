import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./style.scss";

const CLASS_NAME = "Navigation";

class Navigation extends React.PureComponent {
  menuRef = React.createRef();

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    return (
      <div className={CLASS_NAME}>
        <div className={`${CLASS_NAME}title`}>
          <NavLink 
            to="/"
            activeClassName={`${CLASS_NAME}title-entry--active`}
          > 
            essentia 
          </NavLink>
        </div>
        <div className={`${CLASS_NAME}menu`} ref={this.menuRef}>
          <NavLink
            to="/community"
            activeClassName={`${CLASS_NAME}menu-entry--active`}
            className={`${CLASS_NAME}menu-entry`}
          >
            community
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName={`${CLASS_NAME}menu-entry--active`}
            className={`${CLASS_NAME}menu-entry`}
          >            
            portfolio
          </NavLink>
         <div className={`${CLASS_NAME}menu-button`}>
            <NavLink 
              to="/profile"
              activeClassName={`${CLASS_NAME}menu-button--active`}
            >
              profile
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);
