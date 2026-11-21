import type {Event} from "./type";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

// defines the props for EventCard
interface EventCardProps {
    event: Event;
}

// converts the event's status into a badge style variant
function statusToBadgeVariant(status: Event["status"]): "active" | "paused" | "completed" | "default" {
    switch (status) {
        case "Active":
            return "active";
        case "Paused":
            return "paused";
        case "Completed":
            return "completed";
        default:
            return "default";
    }
}


function formatDateParts(isoDate: string) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
    const month = dt.toLocaleString("en-US", {month: "short"}).toUpperCase();
    const day = String(dt.getDate()).padStart(2, "0");
    const weekday = dt.toLocaleString("en-US", { weekday: "short" });
    return { month, day, weekday };
}

// the actual rendering for the event card
export function EventCard({event} : EventCardProps) {
    const { month, day, weekday } = formatDateParts(event.date);

    const isFull =
        typeof event.spots === "number" &&
        typeof event.attendees === "number" &&
        event.attendees >= event.spots;

    const spotsLeft =
        typeof event.spots === "number" && typeof event.attendees === "number"
            ? Math.max(0, event.spots - event.attendees)
            : null;

    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-text-primary bg-[var(--home-card)] shadow-[6px_6px_0_0_var(--color-primary)]">
            <div className="p-4 md:p-6 flex-1 flex flex-col gap-4">
                {/* Status + Capacity row */}
                <div className="flex items-center justify-between gap-3">
                    <Badge variant={statusToBadgeVariant(event.status)}>
                        {event.status}
                    </Badge>

                    {spotsLeft !== null && event.status !== "Completed" && (
                        <span className="text-xs text-text-muted">
              {spotsLeft} spot{spotsLeft === 1 ? "" : "s"} left
            </span>
                    )}
                </div>

                {/* Title centered */}
                <h3 className="text-lg md:text-xl font-bold text-text-primary text-center">
                    {event.title}
                </h3>

                {/* Mini calendar + time */}
                <div className="flex items-center justify-center gap-4">
                    <div className="w-14 overflow-hidden rounded-lg border-2 border-text-primary bg-[var(--home-card)]">
                        <div className="bg-secondary text-black text-[10px] font-semibold text-center py-1">
                            {month}
                        </div>
                        <div className="text-center py-2">
                            <div className="text-xl font-extrabold leading-none text-text-primary">
                                {day}
                            </div>
                            <div className="text-[10px] text-text-muted">{weekday}</div>
                        </div>
                    </div>

                    <div className="text-sm text-text-muted">
                        <div className="font-semibold text-text-primary">{event.time}</div>
                        <div className="text-xs">{event.date}</div>
                    </div>
                </div>

                {/* Location */}
                <div className="text-sm text-text-primary">
                    <span className="font-semibold">Location:</span>{" "}
                    <span className="text-text-muted">{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base leading-7 text-text-muted">
                    {event.description}
                </p>

                {/* Button (none for completed events) */}
                {event.status !== "Completed" && (
                    <div className="mt-auto pt-2 flex justify-center">
                        {isFull ? (
                            <Button variant="outline" className="text-xs">
                                Full
                            </Button>
                        ) : event.status === "Paused" ? (
                            <Button variant="outline" className="text-xs">
                                Paused
                            </Button>
                        ) : (
                            <Button href="/apply" variant="primary" className="text-xs">
                                Register
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
