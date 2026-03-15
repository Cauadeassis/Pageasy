export type Page = "institutional" | "multi-institutional" | "web-page";
interface CalculateProps {
  quantity: number;
  page: Page;
}

import { PAGES } from "../components/servicesSection";

export default function calculatePrice({ quantity, page }: CalculateProps) {
  const selectedPage = PAGES.find((object) => object.id === page);
  if (!selectedPage) return 0;

  return quantity * selectedPage.price;
}
