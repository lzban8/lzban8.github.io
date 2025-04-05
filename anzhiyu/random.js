var posts=["2025/04/05/VPS服务器/Xboard前端-1Panel部署/","2025/04/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };