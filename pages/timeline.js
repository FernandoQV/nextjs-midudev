import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Timeline = ({userName='Fernando'}) => {
    return (
        <div>
            <Head>
                <title>Devter || Timeline</title>
            </Head>
            <h1>This is TimeLine of {userName}</h1>
            <Link href='/'><a>Go Home</a>
            </Link>
        </div>
    )
}
Timeline.getInitialProps=()=>{
return fetch('http://localhost:3000/api/hello')
.then(res=>res.json())
.then(r=>{
    console.log(r);
    return r
} 
)
}
export default Timeline
