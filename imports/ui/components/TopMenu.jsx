import React from 'react';

export const TopMenu = () => (
    <div className="top-menu">
        <a className="top-menu__link" href={ FlowRouter.path('index') }>Mainpage</a>
        <a className="top-menu__link" href={ FlowRouter.path('about') }>About</a>
        <a className="top-menu__link" href={ FlowRouter.path('contact') }>Contact</a>
    </div>
);