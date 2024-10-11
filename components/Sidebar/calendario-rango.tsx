import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { parseDate } from "@internationalized/date";

export default function CalendarioRango() {
  return (
    <div className="flex w-full">
      <RangeCalendar
        aria-label="Date (Min Date Value)"
        minValue={parseDate("1959-01-01")}
        maxValue={parseDate("2021-12-31")}
        calendarWidth={"flex w-full"}

        //navButtonProps={}
      />
    </div>
  );
}
