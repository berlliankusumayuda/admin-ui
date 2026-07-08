import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function formatDateParts(dateString) {
  if (!dateString) return { day: "-", month: "-" };
  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) return { day: dateString, month: "" };

  return {
    day: parsed.getDate(),
    month: parsed.toLocaleString("en-US", { month: "short" }),
  };
}

function CardUpcomingBill(props) {
  const { data } = props;
  const isLoading = data === undefined || data === null;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          isLoading ? (
            <div className="flex flex-col justify-center items-center h-full text-primary">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              Loading Data
            </div>
          ) : (
            <div className="flex flex-col justify-around h-full">
              {data.map((item, idx) => {
                const { day, month } = formatDateParts(item.date);

                return (
                  <div
                    key={item.id || idx}
                    className="flex justify-between pt-3 pb-3"
                  >
                    <div className="flex">
                      <div className="bg-special-bg dark:bg-white/10 p-4 rounded-lg flex flex-col">
                        <span className="text-xs dark:text-gray-300">{item.month || month}</span>
                        <span className="text-2xl font-bold dark:text-white">
                          {item.date_number || item.day || day}
                        </span>
                      </div>
                      <div className="ms-10">
                        {item.icon || <Icon.Bill />}
                        <span className="font-bold">
                          {item.name || item.title}
                        </span>
                        <br />
                        <span className="text-xs dark:text-gray-400">
                          Last Charge - {item.lastCharge || item.last_charge || "-"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 dark:border-white/10 rounded-lg font-bold">
                        ${item.amount}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;
