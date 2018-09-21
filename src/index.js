import "./less/all.less";

import data from "./data";

const tpl = (data)=>`
<div class="main">
  <section class="column">
    <div class="link layout-gird">
      <div class="link-head">
        <h2>标题</h2>
        <a href="">setting</a>
      </div>
      <ul class="link-list clearfix">
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">百度</span>
            <span class="url">baidu.com</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
      </ul>
      <div class="link-foot">
      </div>
    </div>
  </section>
  <section class="column">
    <div class="link layout-list">
      <div class="link-head">
        <h2>标题</h2>
        <a href="">setting</a>
      </div>
      <ul class="link-list clearfix">
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">百度</span>
            <span class="url">baidu.com</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="icon"></span>
            <span class="name">网址</span>
          </a>
        </li>
      </ul>
      <div class="link-foot">
      </div>
    </div>
  </section>
  <section class="column">
  </section>
</div>
`

function init() {
  document.body.innerHTML = tpl(data);
}

export default {
  init
};
