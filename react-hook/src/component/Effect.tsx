import {useEffect, useState} from 'react';

const Effect = () => {
    // Dùng useEffect khi muốn thực hiện các side effects
    // Side Effect: khi có một tác động xảy ra , dữ liệu bị thay đổi
    // Ví dụ: update DOM, callAPI, Listen DOM event: scroll/resize, Cleanup: Remove listener/ Unsubscribe, Clear timer
    // useEffect(callback, [deps])
    //      callback bắt buộc , [deps] không bắt buộc
    // Callback luôn luôn đc gọi sau khi component mount
    // 1. useEffect(callback)
    //      - Gọi callback mỗi khi component re-render
    //      - Ít dùng
    //      - Gọi callback sau khi component thêm element vào DOM:
    //             + Thực thi return ( thêm element vào DOM) ròi mới chạy useEffect
    //             + Tuy nhiên chạy thì UseEffect chạy trc , r nó để dành, nó chờ

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    // Set lại title tab browser
    /*
    useEffect(() => {
        document.title = title;
    });
    */
    // Không dùng useEffect vẫn đc nhưng phải dùng vì
    // Về nguyên tắc, useEffect xử lý side Effect nên cần đặt trong useEffect
    // Gây trễ nếu logic xử lý phức tạp
    // Ưu tiên return giao diện người dùng trước

    //API để ở ngoài này nó sẽ bắn ra 02 lần trong Network
    //Do ReactStrictMode , sau này build ra sẽ ko có nữa
    // Mỗi hki component re-render lại, nó sẽ gọi lại API
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((posts) => {
            console.log(posts);
        });
    */
    // Đưa vào useEffect
    //Tuy nhiên đưa dô vẫn bị render lại
    // *** Kiểu dữ liệu trả về là gì thi2 nên dùng useState là đó

    //Đưa dô nó vẫn call API cả ngàn lần => Nên phải học thg số 2
    // 2. useEffect(callback, [])
    // Chỉ gọi callback 01 lần sau khi component mount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    //3. useEffect(callback,[depens])

    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>

            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Effect;
