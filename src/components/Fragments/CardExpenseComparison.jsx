import React from "react";
import Icon from "../Elements/Icon";

// Map nama kategori dari API ke icon yang tersedia. Kalau tidak cocok, pakai Icon.Other.
const categoryIconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  transport: Icon.Transport,
  entertainment: Icon.Gamepad,
  shopping: Icon.Shopping,
  others: Icon.Other,
  other: Icon.Other,
};

function getCategoryIcon(category = "") {
  const IconComponent = categoryIconMap[category.toLowerCase()] || Icon.Other;
  return <IconComponent size={20} />;
}

function CardExpenseComparison(props) {
  const { data } = props;
  const groups = Array.isArray(data) ? data : [];

  if (Array.isArray(data) && data.length === 0) {
    return (
      <div className="bg-white dark:bg-special-bg3 rounded-lg px-6 py-5 shadow-xl text-center text-gray-02 dark:text-gray-300">
        Belum ada data expenses.
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className="bg-white dark:bg-special-bg3 rounded-lg px-6 py-5 shadow-xl text-center text-gray-02 dark:text-gray-300">
        <p>Format data dari API tidak sesuai dengan tampilan ini.</p>
        <p className="text-xs mt-2">
          Cek Console (F12) untuk melihat bentuk asli data dari endpoint /expenses,
          lalu sesuaikan CardExpenseComparison.jsx.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="text-2xl text-gray-02 dark:text-gray-300 mb-4">
        Expenses Comparison
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {groups.map((group) => {
          const isUp = group.trend === "up";
          const detailItems = group.detail || group.items || [];

          return (
            <div
              key={group.id || group.category}
              className="bg-white dark:bg-special-bg3 rounded-lg shadow-xl overflow-hidden flex flex-col"
            >
              {/* Header kategori: background abu-abu muda */}
              <div className="bg-gray-100 dark:bg-white/5 px-6 pt-5 pb-4 flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-300 dark:bg-white/10 text-gray-02 dark:text-gray-200 p-3 rounded-lg flex flex-col place-content-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div className="ms-3">
                    <div className="text-gray-02 dark:text-gray-300 text-xs capitalize">
                      {group.category}
                    </div>
                    <div className="font-bold text-base text-black dark:text-white">
                      ${group.amount}
                    </div>
                  </div>
                </div>

                {group.percentage !== undefined && (
                  <div className="text-right shrink-0 ms-2">
                    <div
                      className={`flex items-center justify-end gap-1 font-semibold text-xs ${
                        isUp ? "text-special-red" : "text-special-green"
                      }`}
                    >
                      {Math.abs(group.percentage)}%
                      {isUp ? (
                        <Icon.ArrowUp size={12} />
                      ) : (
                        <Icon.ArrowDown size={12} />
                      )}
                    </div>
                    <div className="text-xs text-gray-02 dark:text-gray-400 whitespace-nowrap">
                      Compare to the last month
                    </div>
                  </div>
                )}
              </div>

              {/* Daftar transaksi: background putih */}
              <div className="bg-white dark:bg-special-bg3 px-6 pt-4 pb-5 flex flex-col divide-y divide-gray-05 dark:divide-white/10">
                {detailItems.map((item, idx) => {
                  const description =
                    item.name ||
                    item.title ||
                    item.item ||
                    item.description ||
                    item.desc ||
                    item.label ||
                    "-";

                  return (
                    <div
                      key={item.id || idx}
                      className="flex justify-between py-2 first:pt-0 last:pb-0 text-sm"
                    >
                      <span className="font-medium text-black dark:text-white">
                        {description}
                      </span>

                      <div className="flex flex-col items-end">
                        <span className="font-bold text-black dark:text-white">
                          ${item.amount}
                        </span>
                        <span className="text-xs text-gray-03 dark:text-gray-400 whitespace-nowrap">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardExpenseComparison;
