import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';

export default function Header() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <div className="logo">
                            <a href="/" className="text-decoration-none"><img alt="Keep" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" /><span>Keep</span></a>
                        </div>
                    </div>
                    <div className="col-md-6 searchInput">
                        <span><SearchIcon /></span><input type="text" placeholder="Search" name="searchNote" />
                    </div>
                    <div className="col-md-2">
                        <ul className="headerIcons headerIcons list-style-none d-inline-block m-0 p-0">
                            <li className="list-style-none d-inline-block ml-3">
                                <a href="javascript;"><RefreshIcon /></a>
                            </li>
                            <li className="list-style-none d-inline-block ml-3">
                                <a href="javascript;"><SettingsIcon /></a>
                            </li>
                            <li className="list-style-none d-inline-block ml-3">
                                <a href="javascript;"><ListIcon /></a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-2 text-right">
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
