// import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: 'Click Me to visit google'

// }

// function MyApp() {
//     return(
//         <div>
//             <h1>Custom React App</h1>
//         </div>
//     )
// }
// const AnotherElement = (
//     <div>
//       <a href="https://google.com" target="_blank">Visit Google</a>
//     </div>
// )

// const AreactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target: "_blank"},'Visit Google'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    // AnotherElement
    // // <MyApp/>
    // AreactElement
    <App/>
)
