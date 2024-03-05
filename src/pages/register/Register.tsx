import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./Register.css";
import { ChangeEvent, useState } from "react";
import { notification } from "antd";
export default function Register() {
  
  
  return (
    <>
      <div id="container">
        <div className="header">
          <div className="header__logo">
            <div className="header__logo--img">
              <img
                src="https://logospng.org/download/shopee/logo-shopee-icon-1024.png"
                alt=""
              />
            </div>
            <div className="header__logo--text">
              <p>Shoppe</p>
            </div>
            <div className="header__logo--registerText">
              <p>Đăng ký</p>
            </div>
          </div>
          <div className="header__help">
            <a href="">Bạn cần giúp đỡ?</a>
          </div>
        </div>
        <div className="main">
          <div className="background__image">
            <div className="form__register">
              <div className="form__register--text">
                <p>Đăng ký</p>
              </div>
              <div className="form__register--input">
                <div
                  className="form__register--input--email input"
                  style={{ marginTop: "-20px" }}
                >
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="input__Email"
                  />
                  <p id="userName-error" style={{ paddingLeft: 150, color: "red",fontSize:"10px" }}>
              </p>
                </div>
                <div className="form__register--input--email input">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input__Email"
                  />
                  <p id="userName-error" style={{ paddingLeft: 150, color: "red",fontSize:"10px" }}>
              </p>
                </div>
                <div className="form__register--input--email input">
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    className="input__Email"
                  />
                  <p id="userName-error" style={{ paddingLeft: 150, color: "red",fontSize:"10px" }}>
              </p>
                </div>
                <div className="form__register--input--email input">
                  <input
                    type="text"
                    placeholder="Nhập mật khẩu"
                    className="input__Email"
                  />
                  <p id="userName-error" style={{ paddingLeft: 150, color: "red",fontSize:"10px" }}>
              </p>
                </div>
                <div className="form__register--input--email input">
                  <input
                    type="text"
                    placeholder="Nhập lại mật khẩu"
                    className="input__Email"
                  />
                  <p id="userName-error" style={{ paddingLeft: 150, color: "red",fontSize:"10px" }}>
              </p>
                </div>
                <div className="form__register--input--button">
                  <button
                    className="form__register--input--button__register"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>

              <div className="form__register--Or">
                <div className="line"></div>
                <span className="OrMid">Hoặc</span>
                <div className="line"></div>
              </div>
              <div className="form__register--social">
                <div className="form__register--social--facebook">
                  <div className="logo__facebook">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                      alt=""
                    />
                  </div>
                  <div className="fabebook__text">
                    <p>Facebook</p>
                  </div>
                </div>
                <div className="form__register--social--gmail">
                  <div className="logo__google">
                    <img
                      src="https://pngimg.com/uploads/google/google_PNG19635.png"
                      alt=""
                    />
                  </div>
                  <div className="google__text">
                    <p>Google</p>
                  </div>
                </div>
              </div>
              <div className="form__register--acceptLaw">
                <p>Bằng việc đăng kí, bạn đã đồng ý với Shopee về</p>
                <div>
                  <a href="">Điều khoản và dịch vụ</a> và{" "}
                  <a href="">Chính sách bảo mật</a>
                </div>
              </div>
              <div className="form__register--linkRegister">
                <p className="form__register--register__text">
                  Bạn đã có tài khoản?
                </p>
                <Link to={"/dangnhap"} className="form__register--register__link">
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
