export default function Footer() {
  return (
    <footer className="bg-[#474654]">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 text-white gap-5">
          {/* Giới thiệu */}
          <div>
            <h2 className="mb-[15px]">Giới thiệu</h2>
            <div>
              Sứ mệnh của TUMIE là phục vụ cho thú cưng của bạn luôn khỏe mạnh
              và đáng yêu, khiến cho khách hàng thật sự hài lòng với chất lượng
              sản phẩm và dịch vụ.
            </div>
          </div>
          {/* Liên Kết */}
          <div>
            <ul>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
            </ul>
          </div>
          {/* Sản phẩm */}
          <div>
            <ul>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
              <li className="pb-[10px] border-b border-dashed">Giới thiệu</li>
            </ul>
          </div>
          {/* Thông tin liên hệ */}
          <div>
            <h2>Thông Tin Liên Hệ</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
