var posts=["2025/04/05/hello-world/","2025/04/05/Xboard前端-1Panel部署/","2025/04/05/XrayR 后端脚本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };