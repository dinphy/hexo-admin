
var React = require('react/addons')
var Link = require('react-router').Link
var SettingsCheckbox = require('./settings-checkbox')
var SettingsTextbox = require('./settings-textbox')

var divStyle = {
  whiteSpace: 'nowrap'
};

var Settings = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function () {
    var LineNumbers = SettingsCheckbox({
      name: 'lineNumbers',
      enableOptions: {editor: {lineNumbers: true}},
      disableOptions: {editor: {lineNumbers: false}},
      label: '启用行号'
    });

    var SpellCheck = SettingsCheckbox({
      name: 'spellcheck',
      enableOptions: {editor: {inputStyle: 'contenteditable', spellcheck: true}},
      disableOptions: {editor: {inputStyle: null, spellcheck: false}},
      label: '开启拼写检查。 （在旧版浏览器上的越野车）'
    });

    var AskImageFilename = SettingsCheckbox({
      name: 'askImageFilename',
      label: '总是询问文件名。',
      style: {width: '300px', display: 'inline-block'}
    });

    var OverwriteImages = SettingsCheckbox({
      name: 'overwriteImages',
      label: '如果文件已经存在，则覆盖图像。',
      style: {width: '425px', display: 'inline-block'}
    })

    var ImagePath = SettingsTextbox({
      name: 'imagePath',
      defaultValue: '/images',
      label: '图像目录'
    });

    var ImagePrefix = SettingsTextbox({
      name: 'imagePrefix',
      defaultValue: 'pasted-',
      label: '图像文件名前缀'
    });

    return (
      <div className="settings" style={divStyle}>
        <h1>设置</h1>
        <p>
          为管理面板和编辑器设置各种设置。
        </p>
        <p>
          Hexo管理员可以使用密码进行保护。
          {' '}<Link to='auth-setup'>在此设置认证。</Link>
        </p>
        <hr />

        <h2>编辑器设置</h2>
        {LineNumbers}
        {SpellCheck}
        <hr />

        <h2>图像粘贴设置</h2>
        <p>
          Hexo-admin允许您粘贴从网络或其他地方直接复制的图像进入编辑器。 决定你想如何处理粘贴的图像。
        </p>
        {AskImageFilename}
        {OverwriteImages}
        {ImagePath}
        {ImagePrefix}
      </div>
    );
  }
})

module.exports = Settings
