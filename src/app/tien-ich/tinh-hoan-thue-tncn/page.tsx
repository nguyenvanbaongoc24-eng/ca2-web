"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FileText, ArrowLeft, Info } from 'lucide-react';

// Biểu thuế lũy tiến từng phần (năm = tháng × 12)
const TAX_BRACKETS_YEAR = [
  { min: 0, max: 60_000_000, rate: 0.05 },
  { min: 60_000_000, max: 120_000_000, rate: 0.10 },
  { min: 120_000_000, max: 216_000_000, rate: 0.15 },
  { min: 216_000_000, max: 384_000_000, rate: 0.20 },
  { min: 384_000_000, max: 624_000_000, rate: 0.25 },
  { min: 624_000_000, max: 960_000_000, rate: 0.30 },
  { min: 960_000_000, max: Infinity, rate: 0.35 },
];

const GIAM_TRU_BAN_THAN_NAM = 132_000_000; // 11 tr × 12
const GIAM_TRU_PHU_THUOC_NAM = 52_800_000; // 4.4 tr × 12

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(Math.round(value)) + ' đ';
}

function calcProgressiveTaxYear(taxableIncome: number): number {
  let tax = 0;
  let remaining = taxableIncome;
  for (const bracket of TAX_BRACKETS_YEAR) {
    if (remaining <= 0) break;
    const width = bracket.max === Infinity ? remaining : Math.min(remaining, bracket.max - bracket.min);
    tax += width * bracket.rate;
    remaining -= width;
  }
  return tax;
}

export default function TinhHoanThueTNCNPage() {
  const [incomeType, setIncomeType] = useState<'net' | 'gross'>('net');
  const [totalIncome, setTotalIncome] = useState('');
  const [dependents, setDependents] = useState('0');
  const [months, setMonths] = useState('12');
  const [taxPaid, setTaxPaid] = useState('');
  const [otherDeductions, setOtherDeductions] = useState('0');
  const [dongBH, setDongBH] = useState(true);
  const [result, setResult] = useState<{
    totalIncomeYear: number;
    bhTotal: number;
    thuNhapChiuThue: number;
    tongGiamTru: number;
    thuNhapTinhThue: number;
    thueTNCNPhaiNop: number;
    thueDaNop: number;
    hoanThue: number;
  } | null>(null);

  const handleCalculate = () => {
    const incomeNum = parseFloat(totalIncome.replace(/,/g, '')) || 0;
    const numDeps = parseInt(dependents) || 0;
    const numMonths = parseInt(months) || 12;
    const taxPaidNum = parseFloat(taxPaid.replace(/,/g, '')) || 0;
    const otherDed = parseFloat(otherDeductions.replace(/,/g, '')) || 0;

    let totalIncomeYear: number;
    let bhTotal: number;

    if (incomeType === 'gross') {
      totalIncomeYear = incomeNum;
      bhTotal = dongBH ? totalIncomeYear * 0.105 : 0;
    } else {
      // NET income (đã trừ BH)
      totalIncomeYear = incomeNum;
      bhTotal = 0; // NET nghĩa là đã trừ BH
    }

    const thuNhapChiuThue = totalIncomeYear - bhTotal;
    const giamTruGiaCanh = GIAM_TRU_BAN_THAN_NAM * (numMonths / 12) + numDeps * GIAM_TRU_PHU_THUOC_NAM * (numMonths / 12);
    const tongGiamTru = giamTruGiaCanh + otherDed;
    const thuNhapTinhThue = Math.max(0, thuNhapChiuThue - tongGiamTru);
    const thueTNCNPhaiNop = calcProgressiveTaxYear(thuNhapTinhThue);
    const hoanThue = taxPaidNum - thueTNCNPhaiNop;

    setResult({
      totalIncomeYear,
      bhTotal,
      thuNhapChiuThue,
      tongGiamTru,
      thuNhapTinhThue,
      thueTNCNPhaiNop,
      thueDaNop: taxPaidNum,
      hoanThue,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link href="/tien-ich" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 mb-6 transition-colors">
            <ArrowLeft size={16} /> Quay lại Tiện ích
          </Link>

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <FileText size={16} /> Quyết toán thuế
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Tính <span className="text-emerald-600">hoàn thuế</span> TNCN
            </h1>
            <p className="text-slate-500">Dự toán số tiền thuế TNCN được hoàn hoặc phải đóng thêm theo năm</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            <div className="p-8">
              {/* Income Type */}
              <div className="flex bg-slate-100 rounded-xl p-1 mb-8 max-w-sm mx-auto">
                <button
                  onClick={() => setIncomeType('net')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${incomeType === 'net' ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'}`}
                >
                  Thu nhập NET
                </button>
                <button
                  onClick={() => setIncomeType('gross')}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${incomeType === 'gross' ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500'}`}
                >
                  Thu nhập GROSS
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tổng thu nhập cả năm (VNĐ)
                  </label>
                  <input
                    type="text"
                    value={totalIncome}
                    onChange={(e) => setTotalIncome(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Ví dụ: 300000000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Tổng thuế TNCN đã nộp/khấu trừ (VNĐ)
                  </label>
                  <input
                    type="text"
                    value={taxPaid}
                    onChange={(e) => setTaxPaid(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Ví dụ: 5000000"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Số người phụ thuộc</label>
                  <input
                    type="number"
                    value={dependents}
                    onChange={(e) => setDependents(e.target.value)}
                    min="0"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Số tháng làm việc trong năm</label>
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    min="1"
                    max="12"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Giảm trừ khác (VNĐ/năm)</label>
                  <input
                    type="text"
                    value={otherDeductions}
                    onChange={(e) => setOtherDeductions(e.target.value.replace(/[^0-9,]/g, ''))}
                    placeholder="Từ thiện, nhân đạo..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-slate-900 font-bold text-lg transition-all"
                  />
                </div>

                {incomeType === 'gross' && (
                  <div className="flex items-center gap-3 self-end pb-1">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={dongBH} onChange={(e) => setDongBH(e.target.checked)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                    <span className="text-sm font-medium text-slate-700">Đã đóng BHXH (10.5%)</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleCalculate}
                className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-300/50 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Tính hoàn thuế
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="border-t border-slate-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Info size={20} className="text-emerald-600" /> Kết quả quyết toán thuế
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Tổng thu nhập cả năm</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.totalIncomeYear)}</span>
                  </div>
                  {result.bhTotal > 0 && (
                    <div className="flex justify-between py-3 border-b border-slate-200">
                      <span className="text-slate-600">Bảo hiểm bắt buộc (10.5%)</span>
                      <span className="font-bold text-red-500">- {formatCurrency(result.bhTotal)}</span>
                    </div>
                  )}
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
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thuế TNCN phải nộp cả năm</span>
                    <span className="font-bold text-red-600">{formatCurrency(result.thueTNCNPhaiNop)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-200">
                    <span className="text-slate-600">Thuế TNCN đã nộp/khấu trừ</span>
                    <span className="font-bold text-slate-900">{formatCurrency(result.thueDaNop)}</span>
                  </div>

                  {result.hoanThue > 0 ? (
                    <div className="flex justify-between py-4 bg-emerald-100 rounded-xl px-4 -mx-2">
                      <span className="text-emerald-800 font-semibold">💰 Số tiền được HOÀN THUẾ</span>
                      <span className="font-extrabold text-emerald-700 text-xl">{formatCurrency(result.hoanThue)}</span>
                    </div>
                  ) : result.hoanThue < 0 ? (
                    <div className="flex justify-between py-4 bg-red-100 rounded-xl px-4 -mx-2">
                      <span className="text-red-800 font-semibold">⚠️ Số tiền phải NỘP THÊM</span>
                      <span className="font-extrabold text-red-700 text-xl">{formatCurrency(Math.abs(result.hoanThue))}</span>
                    </div>
                  ) : (
                    <div className="flex justify-between py-4 bg-slate-100 rounded-xl px-4 -mx-2">
                      <span className="text-slate-700 font-semibold">✅ Bạn đã nộp đủ thuế!</span>
                      <span className="font-extrabold text-slate-600 text-xl">0 đ</span>
                    </div>
                  )}
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
