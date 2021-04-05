import React from 'react';
import routes from './routes'
import { Link, Switch, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile"className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Students
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/students/JuniorStudent" className="dropdown-item">Junior High School</Link>
                                <Link className="dropdown-item" href="#">Senior High School</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">Elementary School</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div>
                <Switch>
                    {routes.map((route, i) => {
                        const {
                            path,
                            Component
                        } = route
                        return <Route key={i} path={path}>
                            <Component />
                        </Route>
                    })}
                </Switch>
            </div>
        </div>
        </React.Suspense>
    )
}

export default Navbar