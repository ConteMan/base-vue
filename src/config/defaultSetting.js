export default {
    //site
    siteName: "BaseSiteName",
    beian: '',
    policeBeian: '',
    siteCreateTime: '',
    GA: '',

    //setting
    storageOptions: {
        namespace: 'base_vue__', // key prefix
        name: 'ls', // name variable Vue.[ls] or this.[$ls],
        storage: 'local' // storage name session, local, memory
    },
    defaultRouteName: 'Home',

    //local setting
    layoutVersion: 'v2', //前端布局版本
    widthType: 1, //1 居中，2 宽屏
    menuStatus: true, //展示菜单
}
