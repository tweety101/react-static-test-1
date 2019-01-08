import axios from 'axios'

export default {
  plugins: ["react-static-plugin-emotion"],
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://cms.smartpettoysreview.com/wp-json/wp/v2/posts?_embed&per_page=100'
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  
}
