export const backToTop = {
  icon: 'eject',
  topDistance: 10,
  timing: 'easeIn',
  background: 'rgba(73, 73, 73, 1)',
  hover: { background: 'rgba(43, 43, 43, 1)' },
  position: {
    bottom: '10%',
    right: '40px'
  }
}

export const nav = [{
  'icon': 'docs-icon-space-rocket',
  'path': 'start',
  'name': 'start',
  'cn': '开始',
  'tabs': [
    {
      'label': '使用',
      'doc': 'usage'
    },
    {
      'label': '配置',
      'doc': 'config'
    },
    {
      'label': '开发',
      'doc': 'develop'
    }
  ]
}, {
  'icon': 'docs-icon-paint-palette',
  'path': 'design',
  'name': 'design',
  'cn': '设计',
  'tabs': [{
    'label': '颜色',
    'doc': 'color'
  }, {
    'label': '字体',
    'doc': 'font'
  }]
}, {
  'icon': 'docs-icon-window-application-6',
  'path': 'components',
  'name': 'Layout Components',
  'cn': '布局型组件',
  'defaultOpen': false,
  'components': [{
    'icon': 'retweet',
    'name': 'Layout',
    'cn': '布局'
  }, {
    'icon': 'retweet',
    'name': 'HeaderBar',
    'cn': '顶栏'
  }, {
    'icon': 'retweet',
    'name': 'ToolBar',
    'cn': '工具栏'
  }, {
    'icon': 'retweet',
    'name': 'FooterBar',
    'cn': '底栏'
  }, {
    'name': 'Nav',
    'cn': '导航栏'
  }, {
    'icon': 'retweet',
    'name': 'SideBar',
    'cn': '侧栏'
  }]
}, {
  'icon': 'docs-icon-video-games-space-invaders-1',
  'path': 'components',
  'name': 'Programmatic Declarative Components',
  'cn': '函数声明组件',
  'defaultOpen': true,
  'components': [{
    'name': 'dialog',
    'cn': '对话框'
  }, {
    'name': 'notification',
    'cn': '通知提醒框'
  }]
}, {
  'icon': 'docs-icon-modules-1',
  'path': 'components',
  'name': 'Markup Declarative Components',
  'cn': '标记声明组件',
  'defaultOpen': true,
  'components': [{
    'icon': 'retweet',
    'name': 'Icon',
    'cn': '图标',
    'tabs': [{
      'label': 'Usage',
      'doc': 'Icon-usage'
    }, {
      'label': 'All Icons',
      'doc': 'Icon-all-icons'
    }]
  }, {
    'icon': 'retweet',
    'name': 'Board',
    'cn': '面板'
  }, {
    'name': 'Tabs',
    'cn': '选项卡'
  }, {
    'name': 'Button',
    'cn': '按钮'
  }, {
    'name': 'Switch',
    'cn': '开关'
  }, {
    'name': 'Tooltip',
    'cn': '提示框'
  }, {
    'name': 'TextOverflow',
    'cn': '文字溢出'
  }, {
    'name': 'Spinner',
    'cn': '加载中'
  }, {
    'name': 'Dropdown',
    'cn': '下拉菜单'
  }, {
    'name': 'Upload',
    'cn': '上传'
  }, {
    'name': 'Form',
    'cn': '表单'
  }, {
    'name': 'Select',
    'cn': '下拉选择'
  }, {
    'name': 'Input',
    'cn': '输入框'
  }, {
    'name': 'ClearableInput',
    'cn': '清空输入框'
  }, {
    'name': 'BackToTop',
    'cn': '回到顶部'
  }, {
    'name': 'Avatar',
    'cn': '头像',
    'icon': 'edit'
  }, {
    'name': 'AvatarUpload',
    'cn': '上传头像'
  }, {
    'name': 'AvatarClip',
    'cn': '裁剪头像'
  }]
}]
