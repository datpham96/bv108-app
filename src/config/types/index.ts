const configTypes = {
  form: {
    ChiDinh: {
      name: 'Chỉ Định',
      code: 'ChiDinh',
      options: [
        {name: 'Tiêu sợi huyết', code: 'TieuSoiHuyet'},
        {name: 'Lấy huyết khối bằng dụng cụ cơ học', code: 'LayHuyetKhoiCoHoc'},
        {name: 'Phối hợp cả hai', code: 'PhoiHopCaHai'},
        {name: 'Điều trị nội khoa', code: 'DieuTriNoiKhoa'},
      ],
    },
  },
  listConsulationStatus: [
    {
      code: 'open',
      name: 'Đang theo dõi',
    },
    {
      code: 'close',
      name: 'Hết theo dõi',
    },
  ],
  timeKhoiPhatList: [
    {
      code: 'normal',
      value: {
        khoiPhatMinutesStart: 0,
        khoiPhatMinutesEnd: 3 * 60,
      },
      name: 'Thường',
      note: '(0h-3h)',
    },
    {
      code: 'emergency',
      value: {
        khoiPhatMinutesStart: 3 * 60,
        khoiPhatMinutesEnd: 4.5 * 60,
      },
      name: 'Khẩn cấp',
      note: '(3h-4.5h)',
    },
    {
      code: 'veryUrgent',
      value: {
        khoiPhatMinutesStart: 4.5 * 60,
        khoiPhatMinutesEnd: 8 * 60,
      },
      name: 'Rất khẩn cấp',
      note: '(4.5h-8h)',
    },
    {
      code: '24h',
      value: {
        khoiPhatMinutesStart: 0,
        khoiPhatMinutesEnd: 24 * 60,
      },
      name: '24h',
    },
  ],
  gender: {
    male: {
      code: 'male',
      name: 'Nam',
    },
    female: {
      code: 'female',
      name: 'Nữ',
    },
  },

  formList: [
    {
      code: 'KhoiPhat',
      name: 'Khởi phát',
    },
    {
      code: 'NhapVien',
      name: 'Nhập viện',
    },
    {
      code: 'LamSang',
      name: 'Lâm sàng',
    },
    {
      code: 'CanLamSang',
      name: 'Cận lâm sàng',
    },
    {
      code: 'ChiDinh',
      name: 'Chỉ định',
    },
    {
      code: 'TaiThongMachMau',
      name: 'Tái thông mạch máu',
    },
    {
      code: 'HetTheoDoi',
      name: 'Hết theo dõi',
    },
    {
      code: 'ChuyenVien',
      name: 'Chuyển viện',
    },
    {
      code: 'HoiChan',
      name: 'Hội chẩn',
    },
    {
      code: 'TieuSoiHuyet',
      name: 'Tiêu sợi huyết',
    },
    {
      code: 'LayHuyetKhoiBangDungCuCoHoc',
      name: 'Lấy huyết khối bằng dụng cụ cơ học',
    },
    {
      code: 'ChanDoanHinhAnh',
      name: 'Chẩn đoán hình ảnh',
    },
  ],
};

export default configTypes;
