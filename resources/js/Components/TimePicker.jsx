"use client";

import * as React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";

// Function to generate times within a specified time range (minTime and maxTime in 24-hour format)
const generateTimes = (minTime, maxTime) => {
    return Array.from({ length: 24 }, (_, i) => {
        const hour = i % 12 === 0 ? 12 : i % 12;
        const ampm = i < 12 ? "AM" : "PM";
        return [`${hour}:00 ${ampm}`, `${hour}:30 ${ampm}`];
    })
        .flat()
        .filter((time) => {
            const [hour, minutePart] = time.split(":");
            const minutes = parseInt(minutePart.slice(0, 2));
            const period = minutePart.slice(3);
            const hourInt = parseInt(hour);

            // Convert to 24-hour time and total minutes since midnight
            const totalMinutes =
                (hourInt % 12) * 60 +
                minutes +
                (period === "PM" && hourInt !== 12 ? 720 : 0);

            return totalMinutes >= minTime && totalMinutes <= maxTime;
        });
};

export default function TimePicker({
    minTime = 540,
    maxTime = 1320,
    name,
    selectedTime,
    onTimeChange,
}) {
    const [internalTime, setInternalTime] = React.useState(selectedTime || "");

    React.useEffect(() => {
        if (selectedTime !== internalTime) {
            setInternalTime(selectedTime);
        }
    }, [selectedTime]);

    const times = generateTimes(minTime, maxTime);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full border-b text-left justify-start text-gray-600 border-gray-500"
                >
                    {internalTime || "Select Time"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-36 p-0">
                <ScrollArea className="h-48">
                    <div className="p-2">
                        {times.map((time) => (
                            <div
                                key={time}
                                className="p-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                onClick={() => {
                                    setInternalTime(time);
                                    if (onTimeChange) onTimeChange(time);
                                }}
                            >
                                {time}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    );
}
