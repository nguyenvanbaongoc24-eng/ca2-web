"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Store, ArrowLeft, Info } from 'lucide-react';

// Thuế suất theo ngành nghề cho HKD (Thuế GTGT + Thuế TNCN)
const NGANH_NGHE = [
  { label: 'Phân phối, cung cấp hàng hóa', vatRate: 0.01, pitRate: 0.005 },
  { label: 'Dịch vụ, xây dựng (không bao thầu NVL)', vatRate: 0.05, pitRate: 0.02 },
  { label: 'Sản xuất, vận tải, dịch vụ có gắn với hàng hóa, xây dựng (có bao thầu NVL)', vatRate: 0.03, pitRate: 0.015 },
  { label: 'Hoạt động kinh doanh khác', vatRate: 0.02, pitRate: 0.01 },
];

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' đ';
}

export default function TinhThueHKDPage() {
  const [doanhThu, setDoanhThu] = useState('');
  const [nganhNghe, setNganhNghe] = useState(0);
  const [chiPhi, setChiPhi] = useState('');
  const [tinhTheoPP, setTinhTheoPP] = useState<'doanhthu' | 'loinhuan'>('doanhthu');
  const [result, setResult] = useState<{
    doanhThuNum: number;
    thueGTGT: number;
    thueTNCN: number;
    tongThue: number;
    loiNhuan?: number;
    ppLabel: string;
    // So sánh
    thueTheoDT: number;
    thueTheoLN: number;
    ppToiUu: string;
  } | null>(null);

  const handleCalculate = () => {
    const dt = parseFloat(doanhThu.replace(/,/g, '')) || 0;
    const cp = parseFloat(chiPhi.replace(/,/g, '')) || 0;
    const selected = NGANH_NGHE[nganhNghe];

    // Phương pháp 1: Theo doanh thu
    const thueGTGT_DT = dt * selected.vatRate;
    const thueTNCN_DT = dt * selected.pitRate;
    const tongThue_DT = thueGTGT_DT + thueTNCN_DT;

    // Phương pháp 2: Theo lợi nhuận (doanh thu - chi phí)
    const loiNhuan = Math.max(0, dt - cp);
    const thueGTGT_LN = dt * selected.vatRate; // GTGT luôn tính trên doanh thu
    const thueTNCN_LN = loiNhuan * selected.pitRate;
    const tongThue_LN = thueGTGT_LN + thueTNCN_LN;

    // Xác định tối ưu
    const ppToiUu = tongThue_DT <= tongThue_LN ? 'Theo doanh thu' : 'Theo lợi nhuận';

    if (tinhTheoPP === 'doanhthu') {
      setResult({
        doanhThuNum: dt,
        thueGTGT: thueGTGT_DT,
        thueTNCN: thueTNCN_DT,
        tongThue: tongThue_DT,
        ppLabel: 'Theo doanh thu',
        thueTheoDT: tongThue_DT,
        thueTheoLN: tongThue_LN,
        ppToiUu,
      });
    } else {
      setResult({
        doanhThuNum: dt,
        thueGTGT: thueGTGT_LN,
        thueTNCN: thueTNCN_LN,
        tongThue: tongThue_LN,
        loiNhuan,
        ppLabel: 'Theo lợi nhuận',
        thueTheoDT: tongThue_DT,
        thueTheoLN: tongThue_LN,
        ppToiUu,
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link href="/tien-ich" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-orange-600 mb-6 transition-colors">
            <ArrowLeft size={16} /> Quay lại Tiện ích
          </Link>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Store size={16} /> Hộ kinh doanh
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Tính thuế <span className="text-orange-600">Hộ kinh doanh</span>
            </h1>
            <p className="text-slate-500">Ước tính thuế GTGT và thuế TNCN dành cho Hộ kinh doanh cá thể theo ngành nghề</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="p-8">
              {/* PP Toggle */}
              <div className="flex bg-slate-100 rounded-xl p-1 mb-8 max-w-md mx-auto">
                <button
                  onClick={() => setTinhTheoPP('doanhthu')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${tinhTheoPP === 'doanhthu' ? 'bg-white shadow-md text-orange-600' : 'text-slate-500'}`}
                >
                  Theo doanh thu
                </button>
                <button
                  onClick={() => setTinhTheoPP('loinhuan')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${tinhTheoPP === 'loinhuan' ? 'bg-white shadow-md text-orange-600' : 'text-slate-500'}`}
                >
                  Theo lợi nhuận
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Doanh thu / năm (VNĐ)</label>
                  <input
                    type="text"
                    value={doanhThu}
                    onChange={(e) => setDoanhThu(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Ví dụ: 500000000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Ngành nghề kinh doanh</label>
                  <select
                    value={nganhNghe}
                    onChange={(e) => setNganhNghe(parseInt(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-900 font-bold transition-all"
                  >
                    {NGANH_NGHE.map((nn, i) => (
                      <option key={i} value={i}>{nn.label}</option>
                    ))}
                  </select>
                </div>

                {tinhTheoPP === 'loinhuan' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Chi phí hợp lý / năm (VNĐ)</label>
                    <input
                      type="text"
                      value={chiPhi}
                      onChange={(e) => setChiPhi(e.target.value.replace(/[^0-9,]/g, ''))}
                      placeholder="Chi phí mua hàng, vận chuyển, lương NV..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-slate-900 font-bold text-lg transition-all"
                    />
                  </div>
                )}
              </div>

              {/* Tax Rate Reference */}
              <div className="mt-6 bg-orange-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-orange-800 mb-2">Thuế suất ngành đang chọn:</p>
                <div className="flex gap-6 text-sm">
                  <span className="text-slate-700">Thuế GTGT: <strong className="text-orange-600">{(NGANH_NGHE[nganhNghe].vatRate * 100)}%</strong></span>
                  <span className="text-slate-700">Thuế TNCN: <strong className="text-orange-600">{(NGANH_NGHE[nganhNghe].pitRate * 100)}%</strong></span>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg shadow-lg hover:shadow-orange-300/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Tính thuế HKD
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="border-t border-slate-100 bg-gradient-to-br from-orange-50 to-red-50 p-8">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Info size={20} className="text-orange-600" /> Kết quả tính thuế ({result.ppLabel})
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Doanh thu / năm</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.doanhThuNum)}</span>
                  </div>
                  {result.loiNhuan !== undefined && (
                    <div className="flex justify-between py-3 border-b border-slate-200">
                      <span className="text-slate-600">Lợi nhuận (Doanh thu – Chi phí)</span>
                      <span className="font-bold text-slate-900">{formatCurrency(result.loiNhuan)}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thuế GTGT phải nộp</span>
                    <span className="font-bold text-red-500">{formatCurrency(result.thueGTGT)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thuế TNCN phải nộp</span>
                    <span className="font-bold text-red-500">{formatCurrency(result.thueTNCN)}</span>
                  </div>
                  <div className="flex justify-between py-4 bg-red-100 rounded-xl px-4 -mx-2">
                    <span className="text-red-800 font-semibold">Tổng thuế phải nộp</span>
                    <span className="font-extrabold text-red-700 text-xl">{formatCurrency(result.tongThue)}</span>
                  </div>
                </div>

                {/* Comparison */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-4">📊 So sánh 2 phương pháp</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl border-2 ${result.ppToiUu === 'Theo doanh thu' ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
                      <div className="text-sm font-medium text-slate-500 mb-1">Theo doanh thu</div>
                      <div className="font-extrabold text-lg text-slate-900">{formatCurrency(result.thueTheoDT)}</div>
                      {result.ppToiUu === 'Theo doanh thu' && <span className="text-xs font-semibold text-emerald-600">✓ Tối ưu</span>}
                    </div>
                    <div className={`p-4 rounded-xl border-2 ${result.ppToiUu === 'Theo lợi nhuận' ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-slate-50'}`}>
                      <div className="text-sm font-medium text-slate-500 mb-1">Theo lợi nhuận</div>
                      <div className="font-extrabold text-lg text-slate-900">{formatCurrency(result.thueTheoLN)}</div>
                      {result.ppToiUu === 'Theo lợi nhuận' && <span className="text-xs font-semibold text-emerald-600">✓ Tối ưu</span>}
                    </div>
                  </div>
                </div>

                {/* Tax Rate Table */}
                <div className="mt-8">
                  <h4 className="font-bold text-slate-700 mb-3">Bảng thuế suất theo ngành nghề</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-slate-600">Ngành nghề</th>
                          <th className="text-center py-2.5 px-3 font-semibold text-slate-600">GTGT</th>
                          <th className="text-center py-2.5 px-3 rounded-tr-lg font-semibold text-slate-600">TNCN</th>
                        </tr>
                      </thead>
                      <tbody>
                        {NGANH_NGHE.map((nn, i) => (
                          <tr key={i} className={`border-b border-slate-100 ${i === nganhNghe ? 'bg-orange-50 font-bold' : 'hover:bg-slate-50'}`}>
                            <td className="py-2.5 px-3 text-slate-700">{nn.label}</td>
                            <td className="py-2.5 px-3 text-center text-orange-600 font-semibold">{(nn.vatRate * 100)}%</td>
                            <td className="py-2.5 px-3 text-center text-orange-600 font-semibold">{(nn.pitRate * 100)}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
