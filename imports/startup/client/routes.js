import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { DocHead } from 'meteor/kadira:dochead';
import { mount } from 'react-mounter';
import { TAPi18n } from 'meteor/tap:i18n';

import { Layout } from '../../ui/appLayout.jsx';
import { IndexPage } from '../../ui/pages/index.jsx';
import { AboutPage } from '../../ui/pages/about.jsx';
import { ContactPage } from '../../ui/pages/contact.jsx';
import { TopMenu } from '../../ui//components/TopMenu.jsx';

FlowRouter.route('/', {
  name: 'index',
  action() {
    DocHead.setTitle(TAPi18n.__('mainpage.metatitle'));
    mount(Layout, {
      title: TAPi18n.__("mainpage.title"),
      content: <IndexPage />
    });
  },
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    DocHead.setTitle(TAPi18n.__('about.metatitle'));
    mount(Layout, {
      title: TAPi18n.__("about.title"),
      content: <AboutPage />
    });
  },
});

FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    DocHead.setTitle(TAPi18n.__('contact.metatitle'));
    mount(Layout, {
      title: TAPi18n.__("contact.title"),
      content: <ContactPage/>
    });
  },
});