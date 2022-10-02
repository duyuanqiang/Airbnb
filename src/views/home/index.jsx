import hmgRequest from '@/services';
import React, { memo, useEffect} from 'react'

const Home = memo(() => {
  useEffect(() => {
    hmgRequest.get({url:"/home/highscore"}).then(res => {
        console.log(res);
    })
  })
  return (
    <div>
        <h2>Home Page</h2>
        
    </div>
  )
})

export default Home