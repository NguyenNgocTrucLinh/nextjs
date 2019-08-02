#Lazy Loading Modules
npm run analyze

Chúng ta sẽ sử dụng module "firebase" chỉ khi người dùng chuyển sang page khác bằng cách đơn giản đó là sử dụng tính năng dynamic import của Next.js. Code liên quan đến firebase nằm trong file "lib/load-db.js".

 Khi page Home load lần đầu, module firebase chưa được load về. Khi click vào link post và chuyển đến page Post, module firebase được load về. Khi click vào link Home để quay lại page Home thì module firebase không phải load lại. Ở đây, lần đầu tiên "getIntitialProps" ở page "pages/post.js" import module "firebase" (thông qua "lib/load-db.js"). Do vậy app load về bundle firebase. Ở lần thứ hai, khi quay lại page Home, mặc dù "pages/index.js" cũng import module "firebase" nhưng vì module này đã được load về trước đó nên app sẽ không load lại nữa. Điều này có nghĩa là module này chỉ được load khi cần đến và cũng chỉ cần load một lần cho tất các page.

