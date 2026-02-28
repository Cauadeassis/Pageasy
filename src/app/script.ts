export type Plan = "start" | "pro" | "elite"
interface CalculateProps {
    pages: number;
    plan: Plan;
    blog: Boolean;
    seo: Boolean;
}

const PRICES = {
    start: 300,
    pro: 500,
    elite: 700,
} as const;

export default function calculatePrice({
    pages,
    plan,
    blog = false,
    seo = false
}: CalculateProps
) {
    let total = pages * PRICES[plan];
    if (blog) total += 300;
    if (seo) total += 200;
    return total;
}