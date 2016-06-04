import React, { Component } from 'react';
import { TAPi18n } from 'meteor/tap:i18n';
//import Task from './Example.jsx';

export const Layout = () => (
    <div className="container">
        <div className="page">
            <h1>{TAPi18n.__("mainpage.title")}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis, lectus quis faucibus ultricies, neque tortor mattis elit, a lobortis turpis ante non erat. Nam mauris mauris, vestibulum nec diam id, consectetur hendrerit ante. Quisque enim erat, vulputate non bibendum ac, facilisis in nisi. Proin molestie urna ut quam tincidunt, non imperdiet nisi facilisis. Suspendisse molestie magna vel sodales vulputate. Nullam in libero consequat, maximus nisl blandit, euismod quam. Sed eget gravida sem, nec blandit ex. Aliquam porttitor at elit nec aliquam. Vivamus imperdiet maximus ante a vulputate. Cras erat nisi, condimentum pretium fermentum in, venenatis id lectus. Ut quis lorem eget leo volutpat faucibus at efficitur nulla. Cras rutrum pharetra enim, iaculis aliquet nisl luctus sit amet. Morbi turpis eros, fringilla id ullamcorper ut, volutpat in sem. Vestibulum erat lorem, dignissim quis elementum et, luctus id diam. Cras vitae urna a neque vehicula eleifend. Duis porta massa ac maximus elementum.
            </p>
            <p>Created by <a href="http://www.karpusa.lv" title="Link" target="_blank">karpusa.lv</a></p>
        </div>
    </div>
);