import React from 'react';
import { Package, Megaphone, Info, TrendingDown } from 'lucide-react';
import { GlobalInputs } from '../types';

interface InputSectionProps {
  values: GlobalInputs;
  onChange: (field: keyof GlobalInputs, value: string | number | boolean) => void;
  onSave: () => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ values, onChange, onSave }) => {
  const handleChange = (field: keyof GlobalInputs, val: string | number | boolean) => {
    onChange(field, val);
  };

  const handleProfitTypeChange = (type: 'percentage' | 'currency') => {
    (onChange as any)('desiredProfitType', type);
  };

  const handleRoasChange = (val: number) => {
    let newVal = val;
    if (newVal > 50) newVal = 50;
    if (newVal < 0) newVal = 0;
    handleChange('roasValue', newVal);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 mb-8">
      {/* Header da Seção */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <Package className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </div>
          Dados do Produto
        </h2>
      </div>

      {/* Grid Principal de 12 Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Custo do Produto */}
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Custo do Produto</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">R$</span>
            <input
              type="number"
              value={values.productionCost || ''}
              onChange={(e) => handleChange('productionCost', parseFloat(e.target.value))}
              className="w-full pl-10 pr-3 h-[46px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 dark:text-white transition-all"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Preço de Venda */}
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Preço de Venda</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">R$</span>
            <input
              type="number"
              value={values.sellingPrice || ''}
              onChange={(e) => handleChange('sellingPrice', parseFloat(e.target.value))}
              className="w-full pl-10 pr-3 h-[46px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-slate-900 dark:text-white transition-all font-semibold"
              placeholder="0,00"
            />
          </div>
        </div>

        {/* Custo Extra */}
        <div className="md:col-span-4">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Custo Extra</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium pointer-events-none">R$</span>
            <input
              type="number"
              value={values.packagingCost || ''}
              onChange={(e) => handleChange('packagingCost', parseFloat(e.target.value))}
              className="w-full pl-10 pr-3 h-[46px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all"
              placeholder="0"
            />
          </div>
        </div>

        {/* Imposto */}
        <div className="md:col-span-4">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Imposto</label>
          <div className="relative">
            <input
              type="number"
              value={values.taxRate || ''}
              onChange={(e) => handleChange('taxRate', parseFloat(e.target.value))}
              className="w-full pl-3 pr-8 h-[46px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all"
              placeholder="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold pointer-events-none">%</span>
          </div>
        </div>

        {/* Quantidade */}
        <div className="md:col-span-4">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Quantidade</label>
          <input
            type="number"
            min="1"
            value={values.quantity || 1}
            onChange={(e) => handleChange('quantity', parseFloat(e.target.value))}
            className="w-full px-3 h-[46px] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-base focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all"
            placeholder="1"
          />
        </div>

        {/* Lucro Desejado */}
        <div className="md:col-span-6">
          <label className="block text-sm font-medium text-slate-500 mb-1.5">Lucro Desejado</label>
          <div className="flex gap-0 h-[46px]">
            <input
              type="number"
              value={values.desiredProfit || ''}
              onChange={(e) => handleChange('desiredProfit', parseFloat(e.target.value))}
              className="flex-1 px-3 h-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-l-lg text-base focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all"
              placeholder="Sua meta..."
            />
            <div className="flex border-y border-r border-slate-200 dark:border-slate-700 rounded-r-lg overflow-hidden bg-white dark:bg-slate-800 shrink-0">
              <button 
                onClick={() => handleProfitTypeChange('percentage')}
                className={`w-12 h-full text-sm font-bold transition-all ${values.desiredProfitType === 'percentage' ? 'bg-slate-200 dark:bg-slate-700 text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                %
              </button>
              <div className="w-[1px] h-8 my-auto bg-slate-200 dark:bg-slate-700"></div>
              <button 
                onClick={() => handleProfitTypeChange('currency')}
                className={`w-12 h-full text-sm font-bold transition-all ${values.desiredProfitType === 'currency' ? 'bg-slate-200 dark:bg-slate-700 text-blue-600 dark:text-blue-400' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                R$
              </button>
            </div>
          </div>
        </div>

        {/* Previsão ROAS */}
        <div className="md:col-span-6 flex flex-col justify-end">
          <div className="flex items-center justify-between mb-1.5 px-0.5">
             <div className="flex items-center gap-1.5">
               <span className="text-sm font-medium text-slate-500 uppercase tracking-tight">Previsão ROAS</span>
               <div className="group relative">
                 <Info className="w-3.5 h-3.5 text-slate-300 cursor-help" />
                 <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] shadow-xl pointer-events-none text-left border border-white/10">
                   <p className="font-bold mb-1 text-blue-400">Impacto no Faturamento:</p>
                   <p className="mb-2 text-slate-300">O ROAS define quanto do seu preço de venda será gasto com anúncios.</p>
                   <div className="bg-white/10 p-2 rounded mb-1">
                     <code className="text-[10px] text-blue-200">Custo % = (1 / ROAS) × 100</code>
                   </div>
                   <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-slate-900"></div>
                 </div>
               </div>
             </div>
             <button
               onClick={() => handleChange('enableRoas', !values.enableRoas)}
               className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${values.enableRoas ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-600'}`}
             >
               <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${values.enableRoas ? 'translate-x-6' : 'translate-x-1'}`} />
             </button>
          </div>

          <div className={`transition-all duration-300 ease-in-out border rounded-lg ${values.enableRoas ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800' : 'bg-slate-50/50 border-slate-100 dark:bg-transparent dark:border-slate-800/50'}`}>
            <div className={`flex items-center gap-3 p-2 h-[46px] transition-opacity duration-300 ${values.enableRoas ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
              <div className="flex-1 flex items-center gap-2">
                 <input
                   type="number"
                   min="1"
                   max="50"
                   disabled={!values.enableRoas}
                   value={values.roasValue || ''}
                   onChange={(e) => handleRoasChange(parseFloat(e.target.value))}
                   className="w-16 h-8 text-center text-lg font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 rounded border border-indigo-200 dark:border-indigo-700 focus:ring-1 focus:ring-indigo-500 outline-none"
                   placeholder="10"
                 />
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alvo</span>
              </div>
              <div className="h-6 w-px bg-indigo-200 dark:bg-indigo-800/50"></div>
              <div className="flex items-center gap-1.5 pr-1">
                 <TrendingDown className="w-4 h-4 text-red-500" />
                 <span className="text-sm font-bold text-red-600 dark:text-red-400 whitespace-nowrap">
                   -{values.roasValue > 0 ? (100 / values.roasValue).toFixed(1) : '0.0'}%
                 </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};