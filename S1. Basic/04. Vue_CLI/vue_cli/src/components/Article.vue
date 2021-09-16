<script>
export default {};
</script>

<template>
  <article>
    <div>
      <h3>Responsive Web Design</h3>
      <p>
        選用對的html5標籤除了在閱讀 html
        原始碼更加順暢外，也有助於google搜尋引擎排名順序，SEO效果的提升
      </p>
    </div>
  </article>
</template>

<style>
article {
  width: 100%;
  height: 578px;
  /* 
    圖片不建議用相對路徑
    background-image: url("../assets/images/banner.png"); 
  */
  /* 
    波浪符 ~ 是 CSS 專用
    小老鼠 @ 是 src 資料夾
  */
  background-image: url("~@/assets/images/banner.png");
  background-size: cover;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
article > div > h3 {
  text-align: center;
  font-size: 48px;
  color: #fff;
}
article > div > p {
  text-align: center;
  font-size: 14px;
  color: #fff;
  line-height: 3em;
}
</style>
