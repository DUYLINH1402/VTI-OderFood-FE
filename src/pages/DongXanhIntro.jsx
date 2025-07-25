import React, { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import LazyImage from "../components/LazyImage";

const DongXanhIntro = () => {
  // refs cho hiệu ứng scroll reveal
  const boxRef = useRef();
  const imgRefs = useRef([]);
  const h2Ref = useRef();
  const h3Refs = useRef([]);
  useScrollReveal(boxRef);
  useScrollReveal(imgRefs);
  useScrollReveal(h2Ref);
  useScrollReveal(h3Refs);
  const setImgRef = (el, idx) => {
    imgRefs.current[idx] = el;
  };
  const setH3Ref = (el, idx) => {
    h3Refs.current[idx] = el;
  };

  return (
    <div className="wrap-page px-8 sm:px-8" style={{ position: "relative", overflow: "hidden" }}>
      {/* Blob background elements, always at bottom, never break layout */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <div className="bg-blob bg-blob-4" />
      <div className="bg-blob bg-blob-5" />
      <div className="bg-blob bg-blob-6" />
      <div
        className="scroll-reveal glass-box max-w-6xl mx-auto p-4 sm:p-10 mx-[10px] sm:mx-[30px] sm:px-6 md:px-16 text-justify"
        ref={boxRef}
        style={{ position: "relative", zIndex: 1, padding: "30px" }}>
        <h2
          className="scroll-reveal text-3xl font-bold mb-6 text-[#fff] dongxanh-section-title"
          ref={h2Ref}>
          Giới thiệu về Đồng Xanh
        </h2>

        <p className="mb-4 leading-relaxed text-sm sm:text-base">
          Đồng Xanh là tâm huyết của chúng tôi với mong muốn được mang đến cho quý khách hàng nơi
          họp mặt ăn uống, trò chuyện mang hương vị ấm áp của gia đình.
        </p>

        <p className="mb-4 leading-relaxed text-sm sm:text-base">
          <strong className="text-[#199b7e]">Đồng Xanh</strong> là quán ăn gia đình tại Cần Thơ, nơi
          mang đến cho thực khách không gian ấm cúng và thực đơn đậm đà hương vị miền Tây. Với sứ
          mệnh phục vụ bằng cả trái tim, Đồng Xanh mong muốn mỗi bữa ăn đều trở thành kỷ niệm đáng
          nhớ cho khách hàng.
        </p>

        <LazyImage
          src="https://bizweb.dktcdn.net/thumb/grande/100/400/734/files/1-min-c0e165b2-0da5-4035-bfb4-5208cf3cd019.png?v=1697257755167"
          alt="Hình ảnh Đồng Xanh"
          className="scroll-reveal-img w-full h-[180px] sm:h-[300px] md:h-[380px] lg:h-[440px] object-cover rounded-2xl shadow-md mt-6 mb-6"
          ref={(el) => setImgRef(el, 0)}
        />

        <div className="mb-6">
          <h3 className="scroll-reveal dongxanh-section-title" ref={(el) => setH3Ref(el, 0)}>
            🌿 Không gian và trải nghiệm
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed pl-4">
            <li>
              Không gian ấm áp, phù hợp cho gia đình, bạn bè, cặp đôi, sinh viên và doanh nghiệp.
            </li>
            <li>
              Thực đơn phong phú: bánh tráng phơi sương, cá lóc nướng lá sen, lẩu gà lá é, gỏi tép
              trấu bông điên điển...
            </li>
            <li>Rau sạch tự trồng từ vườn và từ núi Cấm.</li>
          </ul>
        </div>

        <LazyImage
          src="https://bizweb.dktcdn.net/thumb/grande/100/400/734/files/1-min-c0e165b2-0da5-4035-bfb4-5208cf3cd019.png?v=1697257755167"
          alt="Hình ảnh Đồng Xanh"
          className="scroll-reveal-img w-full h-[180px] sm:h-[300px] md:h-[380px] lg:h-[440px] object-cover rounded-2xl shadow-md mt-6 mb-6"
          ref={(el) => setImgRef(el, 1)}
        />

        <div className="mb-6">
          <h3 className="scroll-reveal dongxanh-section-title" ref={(el) => setH3Ref(el, 1)}>
            🎉 Dịch vụ và ưu đãi
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed pl-4">
            <li>Đãi tiệc tận nhà với giá chỉ từ 1.300.000đ.</li>
            <li>Ưu đãi: giảm giá HSSV, quà sinh nhật, tích điểm đổi quà.</li>
            <li>Cho phép khách du lịch đặt món theo khẩu vị vùng miền.</li>
          </ul>
        </div>

        <LazyImage
          src="https://bizweb.dktcdn.net/thumb/grande/100/400/734/files/1-min-c0e165b2-0da5-4035-bfb4-5208cf3cd019.png?v=1697257755167"
          alt="Hình ảnh Đồng Xanh"
          className="scroll-reveal-img w-full h-[180px] sm:h-[300px] md:h-[380px] lg:h-[440px] object-cover rounded-2xl shadow-md mt-6 mb-6"
          ref={(el) => setImgRef(el, 2)}
        />

        <div>
          <h3 className="scroll-reveal dongxanh-section-title" ref={(el) => setH3Ref(el, 2)}>
            📍 Thông tin liên hệ
          </h3>
          <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
            <li>
              <strong>Địa chỉ:</strong> 211 Nguyễn Văn Linh, P. Hưng Lợi, Q. Ninh Kiều, TP. Cần Thơ
            </li>
            <li>
              <strong>Hotline:</strong>{" "}
              <a href="tel:0988626600" className="text-blue-600 hover:underline">
                0988 62 66 00
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://dongxanhcantho.com"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer">
                dongxanhcantho.com
              </a>
            </li>
            <li>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://www.facebook.com/dongxanh2"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer">
                facebook.com/dongxanh2
              </a>
            </li>
            <li>
              <strong>Zalo OA:</strong>{" "}
              <a
                href="https://zalo.me/1982210598080912218"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer">
                zalo.me/1982210598080912218
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DongXanhIntro;
