import "./Header.css";
import logo from "../../assets/logo-full-white.png";
import { Button, Dropdown, notification } from "antd";
import { Avatar } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import avatar from "../../assets/avatarBlack.jpg";

export default function Header() {
  return (
    <>
      <div id="header">
        <div className="header__navbar">
          <div className="header__navbar--left">
            <div className="nav__left textNav textNavShop">
              <div style={{ cursor: "pointer", color: "#fff" }}>
               {" "}
               <p style={{ color: "#fff" }}>
                 Kênh Người Bán
               </p>
             </div> 
            </div>
            <div className="nav__left textNav textNavBecameShop">
              <p>Trở thành Người bán Shoppe</p>
            </div>
            <div className="nav__left textNav textNavDown">
              <p>Tải ứng dụng</p>
            </div>
            <div
              className="nav__left textNav textNavConnect"
              style={{ display: "flex", gap: "3px", width: "100px" }}
            >
              <p style={{ border: "none" }}>
                Kết nối
                <i
                  className="fa-brands fa-facebook"
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                ></i>
                <i
                  className="fa-brands fa-instagram"
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                ></i>
              </p>
            </div>
          </div>
          <div className="header__navbar--right">
            <div className="nav__right textNav textNavNoti">
              <i className="fa-regular fa-bell" style={{ color: "#fff" }}></i>
              <p style={{ marginLeft: "5px" }}>Thông Báo</p>
            </div>
            <div className="nav__right textNav textNavSupport">
              <i
                className="fa-regular fa-circle-question"
                style={{ color: "#fff" }}
              ></i>
              <p style={{ marginLeft: "5px" }}>Hỗ Trợ</p>
            </div>
            <div className="nav__right textNav textNavLanguage">
              <i
                className="fa-solid fa-earth-americas"
                style={{ color: "#fff" }}
              ></i>
              <p style={{ marginLeft: "5px" }}>Tiếng Việt</p>
            </div>
                <div className="nav__right textNav textNavRegister">
                  <p className="nav__right--register">
                    Đăng ký{" "}
                  </p>
                </div>
                <div className="nav__right textNav textNavLogin">
                  <p
                    
                    className="nav__right--register"
                    style={{ border: "none" }}
                  >
                    Đăng nhập{" "}
                  </p>
                </div>
          </div>
        </div>
        <div className="header__bot">
          <p className="header__bot--logo">
            <img src={logo} alt="" />
          </p>
          <div className="header__bot--search">
            <div className="header__bot--search--input">
              <div className="header__bot--search--input--box">
                <input
                  className="input__search"
                  placeholder="TRỌN BỘ LÌ XÌ TỪ SHOPPE"
                  type="text"
                  style={{ outline: "none" }}
                />
              </div>
              <div className="header__bot--search--input--button">
                <button className="btn__search">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#fff", cursor: "pointer" }}
                  ></i>
                </button>
              </div>
            </div>
            <div className="header__bot--search--text">
              <p>Peripera Water Bare Tint</p>
              <p>Romand Glasting Water Tint</p>
              <p>Hoodie Stussy</p>
              <p>City Cycle</p>
              <p>Áo Thun Nocturnal</p>
              <p>Levents</p>
              <p>Thuốc Nhuộm Tóc</p>
              <p>Móc Khoá</p>
            </div>
          </div>
          <div className="header__bot--cart">
            <p
              className="fa-solid fa-cart-shopping"
              style={{ color: "#fff", fontSize: "25px" }}
            ></p>
            <div className="header__bot--cart--number">0</div>
          </div>
        </div>
      </div>
    </>
  );
}
