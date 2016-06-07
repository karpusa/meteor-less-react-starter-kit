import React from 'react';
//import { TAPi18n } from 'meteor/tap:i18n'; //{TAPi18n.__("mainpage.title")}
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';

export const Layout = ({title, content}) => (
    <div>
        <Header />
        <div className="container">
            <div className="page">
                <h1>{title}</h1>
                {content}
            </div>
        </div>
        <Footer />
    </div>
);