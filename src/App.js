import { useState, useEffect, useRef, memo, useCallback, useMemo, useReducer } from 'react'
import Content from './Content'
import TodoApp from './Todo'

// // 50. Two-way binding trong React

// // Bài toán Randoms Gift
// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB keyboard'
// ]

// function App() {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }

//   return (
//     <div style={{padding: 32}}>
//         <h1>{gift || 'Chưa có thưởng'}</h1>
//         <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }


// // Two-way binding
// function App() {
//     const [name, setName] = useState('');

//     console.log(name)
//     return (
//         <div style={{padding: 32}}>
//             <input
//                 value={name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => setName('Nguyen Van B')}>Change</button>
//         </div>
//     )
// }



// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JS'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {


//   // 
//   const [name, setName] = useState('')
//   console.log(name)

//   const [email, setEmail] = useState('')

//   const handleSubmit = () => {
//     console.log({ name, email })
//   }

//   // 
//   const [checked, setChecked] = useState([])
//   console.log(checked)
//   const submit = () => {
//     // Call API
//     console.log({id: checked})
//   }

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }


//   return (
//     <div>
//       <br></br>
//       <h1>Form Đăng ký</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Đăng ký</button>

//       <br></br>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={submit}>Đăng ký</button>

//       <br></br>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={submit}>Đăng ký</button>
//     </div>
//   );
// }


// // 51. Todolist with useState()


// function App() {

//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs)
//     return storageJobs
//   })

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to localStorage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <input 
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map(function (job, index) {
//           return (
//             <li key={index}>{job}</li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// // 52. Mounted / Unmounted
// function App() {
//   const [show, setShow] = useState(false)
//   // Khi bấm vào show mà hiện lên thẻ h1 thì đó là mounted, bấm tiếp để tắt đi thì đó là unmounted
//   return (
//     <div style={ { padding: 20 } }>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// // 53.  useEffect hook (content.js)

// 64. useRef
// Lưu các giá trị qua một tham chiếu bên ngoài 
// function component

// // Bấm Start thì bắt đầu đếm ngược, stop thì dừng lại
// function App() {
//   const [count, setCount] = useState(60)

//   const timeId = useRef() 
//   // Nếu k dùng useRef thì vấn đề xuất hiện
//   // Nếu bấm Start và bấm ngay Stop thì biến timeId vẫn
//   // trong hàm App
//   // Nếu bấm Start và đợi >= 1s sau mới bấm Stop thì khi
//   // đó setCount(prevCount => prevCount + 1) đc chạy =>
//   // hàm app lại được gọi lại và tạo ra 1 phạm vi mới. 
//   // Lúc này thì biến timeId = undefined

//   // Có thể khai báo biến timeId ra bên ngoài. Tuy nhiên
//   // nó là biến chỉ muốn sd trong logic này mà để ngoài
//   // sẽ không họp lý vì thế useRef đc sinh ra

  

//   const prevCount = useRef()
//   useEffect(() => {
//     prevCount.current = count
//   }, [count])


//   const handleStart = () => {
//     timeId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1)
//     }, 1000)

//     console.log('Start -> ' + timeId.current)
//   }

//   const handleStop = () => {
//     clearInterval(timeId.current)

//     console.log('Stop -> ' + timeId.current)
//   }

//   console.log(count, prevCount.current)


//   return (
//     <div style={ {padding: 20} }>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }


// 66. React.memo HOC
// Khi 1 component dùng nhiều props trong 1 cái chức 
// năng ==> dùng memo
// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props


// Đây là 1 ứng dụng khi bấm vào Clickme thì sẽ tăng số
// Tuy nhiên trong đây chứa cả Content, mà Content thì
// k dùng đến
// Nên khi bấm thì component con cx sẽ bị re render
// function App() {
//   const [count, setCount] = useState(0)

//   const increase = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div style={ { padding: 20 } }>
//       <Content />
//       <h1>{count}</h1>
//       <button onClick={increase}>Click me!</button>
//     </div>
//   )
// }

// // 68. useCallback() hook
// // --> tránh tạo ra hàm mới k cần thiết trong 
// // function component
// /*
//   Nhớ
//   1. memo()
//   2. useCallback()
//     - Reference types
//     - React memo()
// */

// function App() {
//   const [count, setCount] = useState(0)


//   // Khi không sd useCallback thì có vấn đề
//   // Hàm setCount đc gọi => App đc gọi lại
//   // Khi đó handleIncrease bị thay đổi
//   // => memo thấy rằng có sự khác nhau của handleIncrease
//   // Dẫn tới việc Re-render
//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount + 1)
//   }, [])

//   return (
//     <div style={{ padding: 20 }}>
//       <Content onIncrease={handleIncrease}/>
//       <h1>{count}</h1>
//     </div>
//   )
// }


// 70. useMemo() hook
// --> tránh thực hiện lại 1 logic k cần thiết
// BT tính tổng giá tiền các sản phẩm
// function App() {
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])

//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       price: +price
//     }])

//     setName('')
//     setPrice('')

//     nameRef.current.focus() // focus vào khi bấm Add
//   }

//   console.log(products)

//   // Khi k sd useMemo thì có vấn đề xh
//   // Khi mình chỉ nhập tên hay giá trị mà chưa bấm Add
//   // thì cái thằng reduce kia vẫn thực hiện => k cần thiết
  
//   // Nếu products thay đổi thì useMemo mới tính toán lại
//   const total = useMemo(() => {

//     const result = products.reduce((result, prod) => {

//       console.log('Tính toán lại ...')

//       return result + prod.price
//     }, 0)

//     return result
//   }, [products])

//   return (
//     <div style={ { padding: 20 } }>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter name"
//         onChange={e => setName(e.target.value)}
//       />
//       <br></br>

//       <input
//         value={price}
//         placeholder="Enter price"
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br></br>

//       <button onClick={handleSubmit}>Add</button>
//       <br />

//       Total: {total}
//       <ul>
//         {products.map(function (product, index) {
//           return (
//             <li key={index}>{product.name} - {product.price}</li>
//           )
//         })}
//       </ul>

//     </div>
//   )
// }

// 72. useReducer hook
// Bất cứ bài toán nào dùng useState giải quyết đc thì
// useReducer cx có thể, và ngược lại
// Hầu hết mọi trường hợp thì dùng useState để tạo ra
// trạng thái cho component, phù hợp hơn cho component có
// state đơn giản có thể state kiểu DL nguyên thuỷ hoặc
// array obj ít cấp
// - useReducer thì phù hợp vs các state phức tạp hơn

//BT: Tăng giảm số
// CÁCH TRIỂN KHAI
/* useState
  - init state: 0
  - Actions Up(state + 1), Down(state - 1)
*/
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div style={ { padding: 20 } }>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count - 1)}>Down</button>
//       <button onClick={() => setCount(count+1)}>Up</button>
//     </div>
//   )
// }



// /* useReducer
//   - init state: 0
//   - Actions Up(state + 1), Down(state - 1)
//   - Reducer
//   - Dispatch
// */
// // Init state
// const initState = 0

// // Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// // Reducer
// const reducer = (state, action) => {

//   console.log('reducer running...')

//   switch (action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Unknown action')
//   }
// }

// // Dispatch: hành động giúp Action được kích hoạt để
// // State thay đổi

// // Khi mà chạy thì useReducer nhận reducer nhưng chưa chạy
// // dispatch(UP_ACTION)
// // useReducer lấy cái action kia và gọi hàm reducer
// // với initState lấy làm state
// function App() {

//   const [count, dispatch] = useReducer(reducer, initState)

//   return (
//     <div style={{ padding: 20 }}>

//       <h1>{count}</h1>

//       <button
//         onClick={() => dispatch(UP_ACTION)}
//       >
//         Down
//       </button>


//       <button
//         onClick={() => dispatch(DOWN_ACTION)}
//       >
//         Up
//       </button>
//     </div>
//   )
// }



// 74. Todo App with useReducer hook
/* useReducer
  - init state: 0
  - Actions Up(state + 1), Down(state - 1)
  - Reducer
  - Dispatch
*/

// // Init state
// const initState = {
//   job: '',
//   jobs: []
// }

// // Action
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

// // payload: dữ liệu mang đi
// const setJob = payload => {
//   return {
//     type: SET_JOB,
//     payload
//   }
// }

// const addJob = payload => {
//   return {
//     type: ADD_JOB,
//     payload
//   }
// }

// const deleteJob = payload => {
//   return {
//     type: DELETE_JOB,
//     payload
//   }
// }
// // Reducer
// const reducer = (state, action) => {

//   switch (action.type) {

//     case SET_JOB:
//       return {
//         ...state,
//         job: action.payload
//       }

//     case ADD_JOB:
//       return {
//         ...state,
//         jobs: [...state.jobs, action.payload]
//       }

//     case DELETE_JOB:
//       const newJobs = [...state.jobs]
//       newJobs.splice(action.payload, 1) // xoá đi 1 ptu của jobs
//       return {
//         ...state,
//         jobs: newJobs
//       }

//     default:
//       throw new Error('Unknown action')
//   }
// }

// // Dispatch

// function App() {
//   const [state, dispatch] = useReducer(reducer, initState)
//   const { job, jobs } = state
//   const inputRef = useRef() // focus thẻ input

//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob(''))

//     inputRef.current.focus()
//   }
//   return (
//     <div style={{ padding: 20 }}>
//       <h3>Todo</h3>

//       <input
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo ..."
//         onChange={e => {
//           dispatch(setJob(e.target.value))
//         }}
//       />

//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map(function (job, index) {

//           return (
//             <li key={index}>
//               {job}
//               <span onClick={() => dispatch(deleteJob(index))}>
//                 &times;
//               </span>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }


// // 75. useReducer recap
// function App() {
//   return <TodoApp />
// }


// // 76. useContext() hook
// // Context: bỏ đi 1 thằng khớp nối trung gian cũng không
// // ảnh hưởng gì
// // CompA => CompB => CompC

// // Vấn đề đang gặp phải:
// // Hàm App có component con là Content, props là {theme}
// // Hàm Content có component con là Paragraph
// // Hàm Paragraph có props là {theme}. Tuy nhiên
// // thằng Content thì k cần đến {theme} nhưng vẫn phải gọi

// import { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'
// // import Content from './Content'
// import './App.css'

// // 1. Create context
// // 2. Provider: có 1 props là value=... thì tất cả các
// // children đều có thể nhận được dữ liệu theme này
// // 3. Consumer
// // Cả Provider và consumer đều là các component

// // Theme: Dark / Light
// function App() {

//   const themeContext = useContext(ThemeContext)
//   console.log('themeContext', themeContext)

//   return (
//       <div style={{ padding: 20 }}>
//         <button onClick={themeContext.toggleTheme}>Toggle theme</button>

//         {/* <Content theme={theme}/> */}
//         <Content />
//       </div>
//   )
// }


// // 78. Context + useReducer
// import { actions, useStore } from './store'
// function App() {

//     const [state, dispatch] = useStore()
//     const { todos, todoInput } = state
//     console.log('todoInput: ', todoInput)


//     const handleAdd = () => {
//         dispatch(actions.addTodo(todoInput))
//     }

//     return (
//         <div>
//             <h1>Hello</h1>

//             <input
//                 value={state.todoInput}
//                 placeholder="Enter todo ..."
//                 onChange={e => {
//                     dispatch(actions.setTodoInput(e.target.value))
//                 }}
//             />

//             <button onClick={handleAdd}>Add</button>
//             {todos.map((todo, todoId) => (
//                 <li key={todoId}>{todo}</li>
//             ))}
//         </div>
//     )
// }

// // 79. useImperativeHandle hook
// // Tuỳ chỉnh đc ref của 1 function component

// // import { useRef } from 'react'
// import Video from './Videos'

// // BT dừng phát video

// function App() {

//     const videoRef = useRef()

//     useEffect(() => {
//         console.log(videoRef.current)
//     })

//     const handlePlay = () => {
//         videoRef.current.play()
//     }

//     const handlePause = () => {
//         videoRef.current.pause()
//     }

//     return (
//         <div>
//             <h1>Thu Hà</h1>
//             <Video ref={videoRef}/>
//             <button onClick={handlePlay}>Play</button>
//             <button onClick={handlePause}>Pause</button>
//         </div>
//     )
// }



// // 82. Sử dụng CSS
// import Heading from './components/Heading'
// function App() {
//     return (
//         <div style={{padding: '0 32px'}}>
//             <Heading />
//         </div>
//     )
// }



// 83. CSS module
// Khi các component trùng class thì k sợ lỗi
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'

function App() {
    return (
        <div style={{padding: '0 32px'}}>
            <Heading />
            <Paragraph />
        </div>
    )
}

// // 84. Thư viện clsx và classnames

// import Button from './components/Button'
// import GlobalStyles from './components/GlobalStyles'

// function App() {
//   <GlobalStyles>
//     <div style={{ padding: '10px 32px' }}>
//       <Button />
//     </div>
//   </GlobalStyles>
// }



// 86. Install SASS để dùng SCSS



// Chương 8. React rounter v6
// 88. Cài đặt và tạo router
// function App() {
//   return (
//     <div className="app">
//       <nav>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/">News</a>
//           </li>
//           <li>
//             <a href="/">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

export default App;
