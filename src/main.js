function getELE(id) {
  return document.getElementById(id);
}

function chonLoaiXe() {
  const grabX = getELE("grabX");
  const grabSUV = getELE("grabSUV");
  const grabBlack = getELE("grabBlack");
  let chonLoai;
  if (grabX.checked) {
    chonLoai = "grabX";
  } else if (grabSUV.checked) {
    chonLoai = "grabSUV";
  } else if (grabBlack.checked) {
    chonLoai = "grabBlack";
  }
  return chonLoai;
}

function soKM_1(giaTien, soKM) {
  return soKM * giaTien;
}
function soKM_2(giaTien, soKM) {
  return (soKM - 1) * giaTien;
}
function soKM_3(giaTien, soKM) {
  return (soKM - 19) * giaTien;
}
function tinhTienCho(giaTien, thoiGian) {
  let tinhTien = 0;
  if (thoiGian >= 3) {
    tinhTien = Math.floor(thoiGian / 3) * giaTien;
  }
  return tinhTien;
}

getELE("btnTinhTien").onclick = function () {
  const soKM = getELE("soKM").value * 1;
  const thoiGian = getELE("thoiGian").value * 1;
  console.log(soKM, thoiGian);

  const chonLoai = chonLoaiXe();
  console.log(chonLoai);
  let tongTien = 0;
  switch (chonLoai) {
    case "grabX":
      if (0 <= soKM && soKM <= 1) {
        const tongGD1 = soKM_1(8000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD1 + tinhThoiGian;
      } else if (1 < soKM && soKM <= 19) {
        const tongGD1 = soKM_1(8000, 1);
        const tongGD2 = soKM_2(7500, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD2 + tinhThoiGian + tongGD1;
      } else if (soKM > 19) {
        const tongGD1 = soKM_1(8000, 1);
        const tongGD2 = soKM_2(7500, 19);
        const tongGD3 = soKM_3(7000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD3 + tinhThoiGian + tongGD1 + tongGD2;
      }
      console.log(tongTien);
      return tongTien;

      break;

    case "grabSUV":
      if (0 <= soKM && soKM <= 1) {
        const tongGD1 = soKM_1(8000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD1 + tinhThoiGian;
      } else if (1 < soKM && soKM <= 19) {
        const tongGD1 = soKM_1(8000, soKM);
        const tongGD2 = soKM_2(7500, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD2 + tinhThoiGian + tongGD1;
      } else if (soKM > 19) {
        const tongGD1 = soKM_1(8000, soKM);
        const tongGD2 = soKM_2(7500, soKM);
        const tongGD3 = soKM_3(7000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD3 + tinhThoiGian + tongGD1 + tongGD2;
      }
      console.log(tongTien);
      return tongTien;
      break;

    case "grabBlack":
      if (0 <= soKM && soKM <= 1) {
        const tongGD1 = soKM_1(8000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD1 + tinhThoiGian;
      } else if (1 < soKM && soKM <= 19) {
        const tongGD1 = soKM_1(8000, soKM);
        const tongGD2 = soKM_2(7500, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD2 + tinhThoiGian + tongGD1;
      } else if (soKM > 19) {
        const tongGD1 = soKM_1(8000, soKM);
        const tongGD2 = soKM_2(7500, soKM);
        const tongGD3 = soKM_3(7000, soKM);
        const tinhThoiGian = tinhTienCho(2000, thoiGian);
        tongTien = tongGD3 + tinhThoiGian + tongGD1 + tongGD2;
      }
      console.log(tongTien);
      return tongTien;
      break;

    default:
      break;
  }
  getEle("divThanhTien").style.display = "block";
  getEle("xuatTien").innerHTML = tongTien;
};
