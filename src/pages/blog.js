import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import { css } from '@emotion/core'

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul css={css`
      li:nth-child(even) {
        color: red;
      }
    
    `}>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.slug}/`}>{post.title.rendered}</Link>
        </li>
      ))}
    </ul>
  </div>
))
