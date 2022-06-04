import { RectNode, RectNodeModel } from '@logicflow/core';

class UserTaskModel extends RectNodeModel {
  getNodeStyle() {
    const style = super.getNodeStyle();
    style.stroke = '#42b883';
    style.strokeDasharray = '0 0'; // 虚线间隔
    return style;
  }
  getTextStyle() {
    const style = super.getTextStyle();
    style.fontSize = 16; // 文字大小
    style.color = '#000'; // 文字颜色
    style.overflowMode = 'autoWrap'; // 文字超出自动换行
    return style;
  }
  getAnchorStyle(anchorInfo) {
    const style = super.getAnchorStyle(anchorInfo);
    style.stroke = 'blue'; // 四个连接点的颜色
    style.r = 3;
    style.hover.r = 8;
    style.hover.fill = 'red'; // 锚点背景色
    style.hover.stroke = 'rgb(24, 125, 255)';
    return style;
  }
  getAnchorLineStyle() {
    const style = super.getAnchorLineStyle(); // 节点连接线的颜色
    style.stroke = 'red';
    return style;
  }
  getOutlineStyle() {
    const style = super.getOutlineStyle(); // 选中和hover时外边框的颜色
    style.stroke = 'red';
    style.hover.stroke = 'red';
    return style;
  }
  setAttributes() {
    const size = this.properties.scale || 1; // 设置大小
    this.width = 200 * size;
    this.height = 130 * size;
  }
}

class UserTaskView extends RectNode {}

export default {
  type: 'UserTask',
  view: UserTaskView,
  model: UserTaskModel,
};
