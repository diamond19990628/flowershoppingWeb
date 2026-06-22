import Header from "../components/Header/Header";
import "./LoginForm.css";

export default function LoginForm() {
  return (
    <>
      <Header/>
      <div className="login-page">
        <div className="login-card">
          <div className="login-left">
            <span className="login-tag">Flower Shop</span>

            <h1>欢迎来到鲜花商城</h1>

            <p>
              登录后可以查看订单、管理收货地址，并购买你喜欢的鲜花。
            </p>
          </div>

          <div className="login-form">
            <h2>用户登录</h2>

            <div className="form-item">
              <label>用户名</label>
              <input
                type="text"
                placeholder="请输入用户名"
              />
            </div>

            <div className="form-item">
              <label>手机号</label>
              <input
                type="tel"
                placeholder="请输入手机号"
              />
            </div>

            <div className="form-item">
              <label>密码</label>
              <input
                type="password"
                placeholder="请输入密码"
              />
            </div>

            <button className="login-button">
              登录
            </button>

            <p className="login-tip">
              还没有账号？立即注册
            </p>
          </div>
        </div>
      </div>
    </>
    
  );
}