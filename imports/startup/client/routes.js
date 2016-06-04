import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { DocHead } from 'meteor/kadira:dochead';
import { mount } from 'react-mounter';
import { TAPi18n } from 'meteor/tap:i18n';

import { Layout } from '../../ui/appLayout.jsx';

FlowRouter.route('/', {
  name: 'index',
  action() {
    DocHead.setTitle(TAPi18n.__('mainpage.title'));
    mount(Layout);
  },
});
