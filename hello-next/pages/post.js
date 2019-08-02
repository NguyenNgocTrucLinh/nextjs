import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post

//sử dụng function withRouter của "next/router" và inject component với prop "router". 
//Từ đó ta lấy ra được object query và data được truyền vào
//useRouter cho phép bạn truy cập vào đối tượng bộ định tuyến bên trong trang, đó là React Hook và nó hoạt động với các thành phần chức năng.