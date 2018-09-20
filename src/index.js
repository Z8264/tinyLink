import "./less/all.less";

import data from "./data";

const tpl = (data)=>`
  <ul>
    <li>
      <a href="">
        <span class="icon"><span>
        <span>name</span>
      </a>
    </li>
    <li>
      <a href="">
        <span class="icon"><span>
        <span class="name">百度</span>
        <span class="url">baidu.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <span class="icon"><span>
        <span>name</span>
      </a>
    </li>
    <li>
      <a href="">
        <span class="icon"><span>
        <span>name</span>
      </a>
    </li>
  </ul>
`

function init() {
  document.body.innerHTML = tpl(data);
}

export default {
  init
};
