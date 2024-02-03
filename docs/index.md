<script setup>
    import AllDoc from './.vitepress/AllDoc/AllDoc.vue'
</script>

# 首页

## 介绍

这是一个文档站，存放一些我的文档。

这个是用 [VitePress](https://vitepress.dev/) 搭建的，vitepress 可以写 md 文档并自动处理成 html，同时也支持使用 Vue3 来编写自定义的页面。

下面是用 Vue3 提供的自定义开发能力，自动生成的全站文档目录。

:rocket:<AllDoc></AllDoc>

> 你可以查看 `docs/.vitepress/AllDoc` 来观察是如何编写的。

## 如何贡献文档

1. Clone 这个文档
2. 按照 [VitePress 的文档](https://vitepress.dev/) 来编写内容
3. 如果需要加入左边的文档目录，请修改 `docs/.vitepress/config.js`
4. 提交并 push 到 github，稍后 github action 会自动构建完毕，你的内容会自动更新到 [文档地址](https://wordcube-inc.github.io/xtdoc/)。
