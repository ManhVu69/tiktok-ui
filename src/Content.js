import { useEffect, useState, useLayoutEffect, memo } from 'react'

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render UI
// 4. Gọi lại Cleanup nếu deps thay đổi
// 5. Gọi useEffect callack

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi lại Cleanup nếu deps thay đổi (sync)
// 4. Gọi useEffect callack (sync)
// 5. Render UI


/*
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
*/

// 53. 
/*
    I. useEffect(callback)
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element 
        vào DOM (console.log Render trc Mounted)
*/
// function Content() {
//     const [title, setTitle] = useState('');

//     useEffect(() => {
//         console.log('Mounted')
//         document.title = title
//     })

//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {console.log('Render')}
//         </div>
//     )
// }

//     II. useEffect(callback, [])
//         - Chỉ gọi callback 1 lần sau khi component mounted

// // Muốn thực hiện logic 1 lần sau khi component đc mounted và k muốn nó gọi lại khi component đc render
// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then(res => res.json())
//         .then(posts => {
//             setPosts(posts)
//         })
//     }, [])
//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


/*    III. useEffect(callback, [deps])
        - Callback sẽ được gọi lại mỗi khi dependencies thay đổi
*/
// const tabs = ['posts', 'comments', 'albums']
// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     console.log(type)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//         }, [type])
//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button key={tab}
//                     onClick={() => setType(tab)}
//                     style={type === tab ? {
//                         color: 'white',
//                         background: 'black'
//                         } : {}}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
/* ------------------
- Callback luôn được gọi sau khi component mounted
- Cleanup function luôn được gọi trước khi component unmounted
*/




// 57. useEffect() with DOM events

// Dom event: Scroll, Resize

// // BT khi cuộn xuống thì hiện 1 nút đi đến đầu trang
// const tabs = ['posts', 'comments', 'albums']
// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     const [showGoToTop, setShowGoToTop] = useState(false) // Quy ước showGoToTop = false là ẩn, ngược lại là hiện

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             console.log(window.scrollY)
//             if (window.scrollY >= 200) {
//                 // Show biểu tượng
//                 setShowGoToTop(true)
//             } else {
//                 // Hide biểu tượng
//                 setShowGoToTop(false)
//             }
//         }

//         window.addEventListener('scroll', handleScroll)

//         // Cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button key={tab}
//                     onClick={() => setType(tab)}
//                     style={type === tab ? {
//                         color: 'white',
//                         background: 'black'
//                         } : {}}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             </ul>
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20,
//                     }}
//                 >
//                     Goto Top
//                 </button>
//             )}
//         </div>
//     )
// }


// // BT hiển thị chiều ngang cửa sổ khi thay đổi
// function Content() {
//     const [width, setWidth] = useState(window.innerWidth)


//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }
//         window.addEventListener('resize', handleResize)

//         // Cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     }, [])


//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )
// }




// 58. useEffect() with timer functions

// BT đếm ngược đồng hồ từ 180

// function Content() {
//     const [countdown, setCountdown] = useState(180)

//     useEffect(() => {
//         const timeId = setInterval(() => {
//             setCountdown(prev => prev - 1)
//             // console.log('Countdown')
//         }, 1000)

//         return () => {
//             clearInterval(timeId)
//         }
//     }, [])

//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }


// 60. useEffect with preview avatar
// // BT chọn ảnh đại diện thì hiện lên ngay

// function Content() {
//     const [avatar, setAvatar] = useState()

//     // Chống rò rỉ bộ nhớ
//     useEffect(() => {
//         // Cleanup
//         return () => {
//             // Nếu có avatar thì xoá
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)
//         setAvatar(file)
//     }

//     return (
//         <div>
//             <input
//                 type="file"
//                 onChange={handlePreviewAvatar}
//             />
//             {avatar && (
//                 <img src={avatar.preview} alt="" width="200" />
//             )}
//         </div>
//     )
// }




// 61. useEffect() with fake Chat App

// const lessons = [
//     {
//         id: 1,
//         name: 'ReactJS là gì? Tại sao nên học ReactJS?'
//     },
//     {
//         id: 2,
//         name: 'SPA/NPA là gì?'
//     },
//     {
//         id: 3,
//         name: 'Arrow functions'
//     }
// ]


// function Content() {
//     const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {
        
//         const handleComment = ( {detail} ) => {
//             console.log(detail)
//         }


//         window.addEventListener(`lesson-${lessonId}`, handleComment)

//         return (() => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         })

//     }, [lessonId])

//     return (
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color: lessonId === lesson.id ? 
//                                 'red' : '#333'
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// 62. useLayoutEffect hook

/* So sánh useEffect ~ useLayoutEffect
useEffect:
    1. cập nhật lại state
    2. Cập nhật DOM (mutated)
    3. Render lại UI
    4. Gọi cleanup nếu deps thay đổi
    5. Gọi useEffect callback

useLayoutEffect:
    1. Cập nhật lại state
    2. Cập nhật lại DOM (mutated)
    3. Gọi cleanup nếu deps thay đổi
    4. Gọi useLayoutEffect Callback
    5. Render lại UI
*/


// // Bt đếm số đến 3 thì quay trở lại 0


// function Content() {
//     const [count, setCount] = useState(0)

//     useLayoutEffect(() => {
//         if (count > 3) {
//             setCount(0)
//         }
//     }, [count])

//     const handleRun = () => {
//         setCount(prevCount => prevCount + 1)
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleRun}>Run</button>
//         </div>
//     )
// }



// 64. useRef() (App.js)



// 66. React.memo (App.js)
// function Content() {
    
//     console.log('Re-render')

//     return (
//         <div>
//             <h2>Hello ae</h2>
//         </div>
//     )
// }


// // 68. useCallback
// function Content({ onIncrease }) {
    
//     console.log('Re-render')

//     return (
//         <div>
//             <h2>Hello ae</h2>
//             <button onClick={onIncrease}>Click me!</button>
//         </div>
//     )
// }



// 76. useContext hook

import Paragraph from './Paragraph'

function Content({ theme }) {
    return (
        <div>
            {/* <Paragraph theme={theme} /> */}
            <Paragraph /> {/* Bỏ luôn cái props trung gian kia đi*/}
        </div>
    )
}

export default memo(Content)



// export default Content