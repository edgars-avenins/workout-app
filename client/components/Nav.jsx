import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
    };

    render(){
        let { workouts, showAdd, name } = this.props
        return (
    
                    <ul className={classnames(
                        "navbar navbar-nav flex-row mr-auto bg-light fixed-top",{
                            'navbar--hidden': !this.state.visible
                        }
                    )}>
                        <li className='nav-item'>
                            <Link className="navbar-brand border px-1" to='/'><i className="fas fa-dumbbell fa-3x"></i></Link>
    
                        </li>
                    {   
                        workouts &&
                        <li className='nav-item' >
                            <Link className="nav-link" to='/stats'><i className="fas fa-chart-bar fa-2x"></i></Link>
                        </li>
                    }
                    {   (showAdd && name != 'Anonymous') &&
                        <li className="nav-item" >
                            <Link className="nav-link" to='/add'><i className="fas fa-plus fa-2x"></i></Link>
                        </li>
                    }
                        <li className="nav-item" >
                            <Link className="nav-link" to='/how'><i className="fas fa-question fa-2x"></i></Link>
                        </li>
                    </ul>
    
        )
    }
}
export default Nav