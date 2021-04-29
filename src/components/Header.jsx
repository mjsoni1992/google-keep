import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header({ handleClickMenuOpen, handleRefresh, setGrid, grid }) {

    const menuClick = () => {
        handleClickMenuOpen();
    }
    console.log(grid);
    const handleRefreshClick = (e) => {
        e.preventDefault();

        handleRefresh();
    }

    const handleGrid = () => {
        setGrid("col-md-12");

    }

    const handleGridToggle = () => {
        setGrid("col-md-3");

    }


    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2 col-sm-6 col-5">

                        <div className="logo">
                            <MenuIcon className="mobileMenu" onClick={menuClick} />
                            <a href="/" className="text-decoration-none"><img alt="Keep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" /><span>Keep</span></a>
                        </div>
                    </div>
                    <div className="col-md-6 searchInput col-sm-6 col-7">
                        <span><SearchIcon /></span><input type="text" placeholder="Search" name="searchNote" />
                    </div>
                    <div className="col-md-2 d-none-sm">
                        <ul className="headerIcons headerIcons list-style-none d-inline-block m-0 p-0">
                            <li className="list-style-none d-inline-block ml-3">
                                <a href="#" onClick={handleRefreshClick}><RefreshIcon /></a>
                            </li>

                            <li className="list-style-none d-inline-block ml-3">
                                {grid == "col-md-3" ? <a href="#" className="listIcon" onClick={handleGrid}><ListIcon /></a> : ""}

                                {grid == "col-md-12" ? <a href="#" className="listIcon" onClick={handleGridToggle}><AppsIcon /></a> : ""}
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-2 text-right d-none-sm">
                        <ul className="headerIcons headerIcons list-style-none d-inline-block m-0 p-0">

                            <li className="list-style-none d-inline-block ml-3">
                                <a href="javascript;"><AccountCircleIcon /></a>
                            </li>
                            <li className="list-style-none d-inline-block ml-3">
                                <a href="javascript;"><AppsIcon /></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}
