const steps = (i18n: any) => {
  return [
    {
      element: '#guide-userAction',
      popover: {
        title: i18n.t('msg.guide.actionsTitle'),
        description: i18n.t('msg.guide.actionsDescription'),
        position: 'bottom',
      },
    },
    {
      element: '#guide-collapse',
      popover: {
        title: i18n.t('msg.guide.collapseTitle'),
        description: i18n.t('msg.guide.collapseDescription'),
        position: 'bottom',
      },
    },
    {
      element: '#guide-tabsView',
      popover: {
        title: i18n.t('msg.guide.tabsTitle'),
        description: i18n.t('msg.guide.tabsDescription'),
        position: 'bottom',
      },
    },
    {
      element: '#guide-sidebar',
      popover: {
        title: i18n.t('msg.guide.sidebarTitle'),
        description: i18n.t('msg.guide.sidebarDescription'),
        position: 'right',
      },
    },
  ];
};

export default steps;
