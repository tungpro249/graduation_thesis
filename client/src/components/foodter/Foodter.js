import React from 'react'

function Foodter() {
  return (
    <div className="foodter">
      <hr/>
      <br/>
        <div className="foodter-content row">
          <div className="left col-3">
            <h2>Giới thiệu</h2>
            <p style={{paddingBottom: '15px'}}>
              Họ & tên: Đoàn Thanh Tùng <br/>
              Học vấn: Đại học Công Nghệ giao Thông Vận Tải <br/>
              Link github: <a href='https://github.com/tungpro249'>tungpro249</a> <br/>
            </p>
          </div>
          <div className="center col-3">
            <h2>Thông tin liên hệ</h2>
            <p style={{paddingBottom: '15px'}}>
             Facebook: <a href='https://www.facebook.com/profile.php?id=100009061732713'>Đoàn Thanh Tùng</a> <br/>
             Điện thoại: 0981375025 <br/>
             Email: tungt392@gmail.com
            </p>
          </div>
          <div className="rigth col-3">
            <h2>Tài liệu tham khảo</h2>
            <p>Youtobe: <a href='https://www.youtube.com/c/DevATHTML'>devat</a></p>
            <p>Youtobe: <a href='https://fullstack.edu.vn/'>F8</a></p>
            <p>Reactjs: <a href='https://reactjs.org/'>reactjs.org</a></p>
          </div>
        </div>
        <br/>
        <div className='foodter-bottom'>
          <p>Web design by Bò sữa phê cỏ</p>
        </div>
      </div>
  )
}

export default Foodter