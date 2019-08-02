#NextJS là gì?
Next.js giúp ta xây dựng một app tương tự với JavaScript và React. Một số tính năng nổi bật của Next.js:

Mặc định đã được render phía server
Tự động split code để load page nhanh hơn
Đơn giản hóa routing phía client (page based)
Môi trường dev với webpack-based hỗ trợ Hot Module Replacement (HMR)
Có thể implement với Express hoặc những Node.js HTTP server khác
Dễ dàng customize với Babel và Webpack config

#Cài đặt
mkdir project_name
cd project_name
npm init -y
npm install --save react react-dom next
mkdir pages

thêm vào package.json
{
 "scripts": {
   "dev": "next"
   "build": "next build"
   "start": "next start"
 }
}

npm run dev

#Navigate giữa các page
Để hỗ trợ navigate ngay tại client, ta cần dùng Link API của Next.js được export qua "next/link"

#Clean URLs với Route Masking
hiển thị một url khác trên trình duyệt thay vì url thật của app

Ở element "<Link>" ta đã dùng một prop gọi là "as". Đó là URL mà ta muốn hiển thị trên trình duyệt còn URL mà ta muốn app xử lý đặt trong "href".


#Deploy Next.js app
"scripts": {
  "build": "next build"
}

"scripts": {
  "start": "next start -p $PORT"
}


Để hỗ trợ clean URLs phía server, chúng ta sẽ tạo một custom server với express:
Đầu tiên cài đặt express: npm install --save express
Tạo file server.js
Sửa script trong package.json
  {
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}

#Fetch data cho page
Next.js cung cấp API giúp ta fetch data cho page với hàm async "getInitialProps". Next.js có thể sử dụng hàm này ở cả phía client và phía server

npm install --save isomorphic-unfetch:
(thư viện hỗ trợ việc fetch data ở cả client và server)



