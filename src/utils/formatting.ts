import { format } from "date-fns";

export function formatManth(date: Date):string {
    return format(date, "yyyy-MM")
}