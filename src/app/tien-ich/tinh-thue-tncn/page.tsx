"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calculator, ArrowLeft, Info } from 'lucide-react';

// Biểu thuế lũy tiến từng phần (đơn vị: triệu đồng / tháng)
const TAX_BRACKETS = [
  { min: 0, max: 5_000_000, rate: 0.05 },
  { min: 5_000_000, max: 10_000_000, rate: 0.10 },
  { min: 10_000_000, max: 18_000_000, rate: 0.15 },
  { min: 18_000_000, max: 32_000_000, rate: 0.20 },
  { min: 32_000_000, max: 52_000_000, rate: 0.25 },
  { min: 52_000_000, max: 80_000_000, rate: 0.30 },
  { min: 80_000_000, max: Infinity, rate: 0.35 },
];

const GIAM_TRU_BAN_THAN = 11_000_000;
const GIAM_TRU_PHU_THUOC = 4_400_000;

// Tỷ lệ đóng bảo hiểm bắt buộc của người lao động
const BHXH_RATE = 0.08;
const BHYT_RATE = 0.015;
const BHTN_RATE = 0.01;
const TOTAL_BH_RATE = BHXH_RATE + BHYT_RATE + BHTN_RATE; // 10.5%

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' đ';
}

function calcProgressiveTax(taxableIncome: number): number {
  let tax = 0;
  let remaining = taxableIncome;
  for (const bracket of TAX_BRACKETS) {
    if (remaining <= 0) break;
    const width = bracket.max === Infinity ? remaining : Math.min(remaining, bracket.max - bracket.min);
    tax += width * bracket.rate;
    remaining -= width;
  }
  return tax;
}

export default function TinhThueTNCNPage() {
  const [salaryType, setSalaryType] = useState<'net' | 'gross'>('gross');
  const [salary, setSalary] = useState('');
  const [dependents, setDependents] = useState('0');
  const [otherDeductions, setOtherDeductions] = useState('0');
  const [dongBH, setDongBH] = useState(true);
  const [result, setResult] = useState<{
    grossSalary: number;
    bhTotal: number;
    thuNhapChiuThue: number;
    tongGiamTru: number;
    thuNhapTinhThue: number;
    thueTNCN: number;
    luongThucNhan: number;
  } | null>(null);

  const handleCalculate = () => {
    const salaryNum = parseFloat(salary.replace(/,/g, '')) || 0;
    const numDeps = parseInt(dependents) || 0;
    const otherDed = parseFloat(otherDeductions.replace(/,/g, '')) || 0;

    let grossSalary: number;
    let bhTotal: number;

    if (salaryType === 'gross') {
      grossSalary = salaryNum;
      bhTotal = dongBH ? grossSalary * TOTAL_BH_RATE : 0;
    } else {
      // NET: cần tính ngược lại GROSS (phần tối giản, không xử lý edge case quy đổi NET->GROSS phức tạp)
      // Ước tính GROSS = NET / (1 - 10.5%) khi không chịu thuế, sau đó tính lại
      grossSalary = dongBH ? salaryNum / (1 - TOTAL_BH_RATE) : salaryNum;
      bhTotal = dongBH ? grossSalary * TOTAL_BH_RATE : 0;
    }

    const thuNhapChiuThue = grossSalary - bhTotal;
    const giamTruGiaCanh = GIAM_TRU_BAN_THAN + numDeps * GIAM_TRU_PHU_THUOC;
    const tongGiamTru = giamTruGiaCanh + otherDed;
    const thuNhapTinhThue = Math.max(0, thuNhapChiuThue - tongGiamTru);
    const thueTNCN = calcProgressiveTax(thuNhapTinhThue);
    const luongThucNhan = grossSalary - bhTotal - thueTNCN;

    setResult({
      grossSalary,
      bhTotal,
      thuNhapChiuThue,
      tongGiamTru,
      thuNhapTinhThue,
      thueTNCN,
      luongThucNhan,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Breadcrumb */}
          <Link href="/tien-ich" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors">
            <ArrowLeft size={16} /> Quay lại Tiện ích
          </Link>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <Calculator size={16} /> Công cụ tính thuế
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Tính thuế <span className="text-blue-600">TNCN</span> cần nộp
            </h1>
            <p className="text-slate-500">Theo biểu thuế lũy tiến từng phần – Thông tư 111/2013/TT-BTC</p>
          </div>

          {/* Calculator Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8">
              {/* Salary Type Toggle */}
              <div className="flex bg-slate-100 rounded-xl p-1 mb-8 max-w-sm mx-auto">
                <button
                  onClick={() => setSalaryType('gross')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${salaryType === 'gross' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Lương GROSS
                </button>
                <button
                  onClick={() => setSalaryType('net')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${salaryType === 'net' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Lương NET
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Salary Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {salaryType === 'gross' ? 'Lương GROSS (VNĐ/tháng)' : 'Lương NET (VNĐ/tháng)'}
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Ví dụ: 25000000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                {/* Dependents */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Số người phụ thuộc
                  </label>
                  <input
                    type="number"
                    value={dependents}
                    onChange={(e) => setDependents(e.target.value)}
                    min="0"
                    max="20"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                {/* Other Deductions */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Giảm trừ khác (VNĐ/tháng)
                  </label>
                  <input
                    type="text"
                    value={otherDeductions}
                    onChange={(e) => setOtherDeductions(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Từ thiện, nhân đạo..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                {/* Insurance Toggle */}
                <div className="flex items-center gap-3 self-end pb-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={dongBH} onChange={(e) => setDongBH(e.target.checked)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                  <span className="text-sm font-medium text-slate-700">Đóng BHXH, BHYT, BHTN (10.5%)</span>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-300/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                 Tính thuế TNCN
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="border-t border-slate-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Info size={20} className="text-blue-600" /> Kết quả tính thuế
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Lương GROSS</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.grossSalary)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Bảo hiểm bắt buộc (10.5%)</span>
                    <span className="font-bold text-red-500">- {formatCurrency(result.bhTotal)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thu nhập chịu thuế</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.thuNhapChiuThue)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Tổng giảm trừ</span>
                    <span className="font-bold text-emerald-600">- {formatCurrency(result.tongGiamTru)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thu nhập tính thuế</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.thuNhapTinhThue)}</span>
                  </div>
                  <div className="flex justify-between py-4 bg-red-50 rounded-xl px-4 -mx-2">
                    <span className="text-red-700 font-semibold">Thuế TNCN phải nộp</span>
                    <span className="font-extrabold text-red-600 text-xl">{formatCurrency(result.thueTNCN)}</span>
                  </div>
                  <div className="flex justify-between py-4 bg-emerald-50 rounded-xl px-4 -mx-2 mt-2">
                    <span className="text-emerald-700 font-semibold">Lương thực nhận</span>
                    <span className="font-extrabold text-emerald-600 text-xl">{formatCurrency(result.luongThucNhan)}</span>
                  </div>
                </div>

                {/* Tax Bracket Table */}
                <div className="mt-8">
                  <h4 className="font-bold text-slate-700 mb-3">Biểu thuế lũy tiến từng phần</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="text-left py-2.5 px-3 rounded-tl-lg font-semibold text-slate-600">Bậc</th>
                          <th className="text-left py-2.5 px-3 font-semibold text-slate-600">Thu nhập tính thuế / tháng</th>
                          <th className="text-right py-2.5 px-3 rounded-tr-lg font-semibold text-slate-600">Thuế suất</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { level: 1, range: 'Đến 5 triệu', rate: '5%' },
                          { level: 2, range: 'Trên 5 – 10 triệu', rate: '10%' },
                          { level: 3, range: 'Trên 10 – 18 triệu', rate: '15%' },
                          { level: 4, range: 'Trên 18 – 32 triệu', rate: '20%' },
                          { level: 5, range: 'Trên 32 – 52 triệu', rate: '25%' },
                          { level: 6, range: 'Trên 52 – 80 triệu', rate: '30%' },
                          { level: 7, range: 'Trên 80 triệu', rate: '35%' },
                        ].map((row) => (
                          <tr key={row.level} className="border-b border-slate-100 hover:bg-blue-50/50">
                            <td className="py-2.5 px-3 font-medium text-slate-700">{row.level}</td>
                            <td className="py-2.5 px-3 text-slate-600">{row.range}</td>
                            <td className="py-2.5 px-3 text-right font-semibold text-blue-600">{row.rate}</td>
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
