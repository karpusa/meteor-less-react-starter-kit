import React from 'react';

let isActive = (name) => {
    return (FlowRouter.getRouteName()===name ? 'top-menu__link is-active' : 'top-menu__link');
};

export const TopMenu = () => (
    <div className="top-menu">
        <a className={ isActive('index') } href={ FlowRouter.path('index') }>Mainpage</a>
        <a className={ isActive('about') } href={ FlowRouter.path('about') }>About</a>
        <a className={ isActive('contact') } href={ FlowRouter.path('contact') }>Contact</a>
    </div>
);