import Header from "../../components/header/Header";
import "./Home.css";
import hourgold from "../../assets/icon/hourgold.png";
import extra from "../../assets/icon/extra.png";
import freeship from "../../assets/icon/freeship.png";
import freevoucher from "../../assets/icon/freevoucher.png";
import hangquocste from "../../assets/icon/hangquocste.png";
import outlet from "../../assets/icon/outlet.png";
import salecode from "../../assets/icon/salecode.png";
import shoppesieure from "../../assets/icon/shoppesieure.png";
import trend from "../../assets/icon/trend.png";
import card from "../../assets/icon/card.png";
import carousel from "../../assets/banner/vn-50009109-83bc013bfa6415d4df461bb53c626e80_xxhdpi.jpg";
import bannerright1 from "../../assets/banner/bannerright1.jpg";
import bannerright2 from "../../assets/banner/bannerright2.jpg";
import category1 from "../../assets/category/1.png";
import category2 from "../../assets/category/2.png";
import category3 from "../../assets/category/3.png";
import category4 from "../../assets/category/4.png";
import category5 from "../../assets/category/5.png";
import category6 from "../../assets/category/6.png";
import category7 from "../../assets/category/7.png";
import category8 from "../../assets/category/8.png";
import category9 from "../../assets/category/9.png";
import category10 from "../../assets/category/10.png";
import category11 from "../../assets/category/11.png";
import category12 from "../../assets/category/12.png";
import category13 from "../../assets/category/13.png";
import category14 from "../../assets/category/14.png";
import category15 from "../../assets/category/15.png";
import category16 from "../../assets/category/16.png";
import category17 from "../../assets/category/17.png";
import category18 from "../../assets/category/18.png";
import category19 from "../../assets/category/19.png";
import category20 from "../../assets/category/20.png";
import flashSale from "../../assets/flashSale.png";
import flahseImg1 from "../../assets/flashSale/vn-50009109-e4b1323a5de993b48f2de5e747c767ee_tn.png";
import thuonghieulon from "../../assets/thuonghieulon.png";
import back7day from "../../assets/shopMall/6c502a2641457578b0d5f5153b53dd5d.png";
import protect from "../../assets/shopMall/protected.png";
import shipMall from "../../assets/shopMall/shipMall.png";
import itemMall1 from "../../assets/shopMall/vn-50009109-06fb832ef52b45481158c26831cc459b_xhdpi.jpg";
import Footer from "../../components/footer/Footer";

export default function Home() {

  return (
    <>
      <Header></Header>
      <div id="home">
        <div className="banner">
          <div className="banner__show">
            <div className="banner__show--qc">
              <div className="banner__show--carousel">
                <img src={carousel} alt="" />
              </div>
              <div className="banner__show--img">
                <div className="banner__show--img--top">
                  <img src={bannerright1} alt="" />
                </div>
                <div className="banner__show--img--bot">
                  <img src={bannerright2} alt="" />
                </div>
              </div>
            </div>
            <div className="banner__show--icon">
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={hourgold} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Khung Giờ Săn Sale</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={extra} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Voucher Giảm Đến</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={freeship} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Miễn Hết Phí Ship</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={freevoucher} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Nhận Free Voucher</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={hangquocste} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Hàng Quốc Tế</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={outlet} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Hàng Hiệu Giảm 50%</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={card} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>
                    Nạp Thẻ,
                    <br /> Dịch Vụ
                  </p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={salecode} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Mã Giảm Giá</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={shoppesieure} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Shopee Siêu Rẻ</p>
                </div>
              </div>
              <div className="banner__show--icon--one icon__banner">
                <div className="icon__banner--img">
                  <img src={trend} alt="" />
                </div>
                <div className="icon__banner--text">
                  <p>Bắt Trend -Giá Sốc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__main">
          <div className="home__category">
            <div className="home__category--text">
              <p>Danh mục</p>
            </div>
            <div className="home__category--item">
                <div
                  className="home__category--item--category1"
                  style={{ cursor: "pointer" }}
                >
                  <div className="home__category--item--category1--img">
                    <img src={category1} alt="" />
                  </div>
                  <div className="home__category--item--category1--text">
                    <p>Thời trang nữ</p>
                  </div>
                </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category8} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Sắc Đẹp</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category9} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Máy Ảnh</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category10} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Y Tế</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category11} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Đồng Hồ</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category15} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Thời Trang Nam</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category16} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Gia Dụng</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category17} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Bóng Đá</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category18} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Đồ Ăn</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category19} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Phương Tiện</p>
                </div>
              </div>
              <div className="home__category--item--category1">
                <div className="home__category--item--category1--img">
                  <img src={category20} alt="" />
                </div>
                <div className="home__category--item--category1--text">
                  <p>Sách</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home__flashSale">
            <div className="home__flashSale--timeShow">
              <div className="home__flashSale--timeShow--time">
                <img src={flashSale} alt="" />
              </div>
              <div className="home__flashSale--timeShow--showAll">
                <p>Xem tất cả</p>
              </div>
            </div>
            <div className="home__flashSale--item">
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
              <div className="home__flashSale--item--sale1">
                <div className="home__flashSale--item--sale1--img">
                  <div className="home__flashSale--item--sale1--img--mall">
                    <div className="home__flashSale--item--sale1--img--mall--img"></div>
                  </div>
                  <div className="home__flashSale--item--sale1--img--percent">
                    <p>-38 %</p>
                  </div>
                  <div className="home__flashSale--item--sale1--img--imgSale1"></div>
                </div>
                <div className="home__flashSale--item--sale1--price">
                  <p>17.990.000</p>
                </div>
                <div className="home__flashSale--item--sale1--bought">
                  <div className="home__flashSale--item--sale1--bought1">
                    <p>ĐANG BÁN CHẠY</p>
                  </div>
                  <div className="home__flashSale--item--sale1--pan"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="home__bigShop">
            <img src={thuonghieulon} alt="" />
          </div>
          <div className="home__shopMall">
            <div className="home__shopMall--header">
              <div className="home__shopMall--header--left">
                <div className="home__shopMall--header--left--shoppemall">
                  <p>SHOPPE MALL</p>
                </div>
                <div className="home__shopMall--header--left--back">
                  <div className="home__shopMall--header--left--back--img">
                    <img src={back7day} alt="" />
                  </div>
                  <p>7 Ngày Miễn Phí Trả Hàng</p>
                </div>
                <div className="home__shopMall--header--left--back">
                  <div className="home__shopMall--header--left--back--img">
                    <img src={protect} alt="" />
                  </div>
                  <p>Hàng Chính Hãng 100%</p>
                </div>
                <div className="home__shopMall--header--left--back">
                  <div className="home__shopMall--header--left--back--img">
                    <img src={shipMall} alt="" />
                  </div>
                  <p>Miễn Phí Vận Chuyển</p>
                </div>
              </div>
              <div className="home__shopMall--header--right">
                <p>Xem Tất Cả</p>
              </div>
            </div>
            <div className="home__shopMall--body">
              <div className="home__shopMall--body--left"></div>
              <div className="home__shopMall--body--right">
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
                <div className="home__shopMall--body--right--item">
                  <div className="home__shopMall--body--right--item--img">
                    <p>Giảm đến 50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home__topSearch">
            <div className="home__topSearch--header">
              <div className="home__topSearch--header--text">
                <p>TÌM KIẾM HÀNG ĐẦU</p>
              </div>
              <div className="home__topSearch--header--showAll">
                <p>Xem Tất Cả</p>
              </div>
            </div>
            <div className="home__topSearch--body">
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
              <div className="home__topSearch--body--item">
                <div className="home__topSearch--body--item--img">
                  <div className="home__topSearch--body--item--img--icon"></div>
                  <div className="home__topSearch--body--item--img--text">
                    <p>Bán 29k+ / tháng</p>
                  </div>
                </div>
                <div className="home__topSearch--body--item--text">
                  <p>Đầm Nữ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home__recommend">
            <div className="home__recommend--header">
              <p>GỢI Ý HÔM NAY</p>
            </div>
            <div className="home__recommend--body">
              <div className="home__recommend--body--item">
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home__recommend--body--item--product1">
                  <div className="home__recommend--body--item--product1--img">
                    <div className="home__recommend--body--item--product1--img--iconLike"></div>
                    <div className="home__recommend--body--item--product1--img--iconPercent">
                      <p>-27%</p>
                    </div>
                    <div className="home__recommend--body--item--product1--img--iconSale"></div>
                  </div>
                  <div className="home__recommend--body--item--product1--text">
                    <div className="home__recommend--body--item--product1--text--name">
                      <p>
                        [ Ảnh thật ] Sét nhung phối viền bèo áo kèm chân vá...
                      </p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--sale">
                      <p>20% giảm</p>
                    </div>
                    <div className="home__recommend--body--item--product1--text--price">
                      <div className="home__recommend--body--item--product1--text--price--left">
                        <p>235.000</p>
                      </div>
                      <div className="home__recommend--body--item--product1--text--price--right">
                        <p>Đã bán 25+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__recommend--footer">
              <div className="home__recommend--footer--showMore">
                <button className="btn__showMore">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
