import { useImperativeHandle, useRef } from 'react'
import { forwardRef } from 'react'
import video1 from './video/video_ThuHa1.mp4'

function Video(props, ref) {

    const videoRef = useRef()

    // Vấn đề khi k sử dụng useImperativeHandle:
    // Khi đó bên file app.js: bên ngoài phạm vi Videos vẫn
    // thể toàn quyền truy cập đc vào video kia
    // => Chỉ muốn play và pause thì dùng useImperativeHandle
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video 
            ref={videoRef}
            src={video1}
            width={200}
            // controls // không dùng controls mặc định
        />
    )
}

export default forwardRef(Video)