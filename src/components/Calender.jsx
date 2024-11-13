import React, { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isToday } from "date-fns";
import { FaChevronLeft, FaChevronRight, FaEdit } from "react-icons/fa";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const markedDates = ["2024-11-13", "2024-11-19", "2024-11-25", "2024-11-28"]; // Dates to be highlighted

  const changeMonth = (direction) => {
    setCurrentDate(direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1));
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => changeMonth("prev")}><FaChevronLeft className="text-white" /></button>
      <h2 className="text-white text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
      <button onClick={() => changeMonth("next")}><FaChevronRight className="text-white" /></button>
      <FaEdit className="text-white cursor-pointer" />
    </div>
  );

  const renderDaysOfWeek = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (
      <div className="grid grid-cols-7 text-center text-white text-xs font-semibold mb-2">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
    );
  };

  const renderDates = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const dateRows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "yyyy-MM-dd");
        const isMarked = markedDates.includes(formattedDate);
        days.push(
          <div
            key={day}
            className={`flex items-center justify-center p-2 h-12 ${
              isSameMonth(day, monthStart) ? "text-white" : "text-gray-400"
            } ${isToday(day) ? "bg-white text-green-600 rounded-full" : ""}
            ${isMarked ? "bg-black text-white rounded-full" : ""}
            `}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      dateRows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return dateRows;
  };

  return (
    <div className="w-full bg-green-500 p-4 rounded-lg shadow-md">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDates()}
    </div>
  );
}

export default Calendar;
