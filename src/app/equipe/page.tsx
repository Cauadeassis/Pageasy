import { Metadata } from "next";
import EquipePage from "./equipePage";

export const metadata: Metadata = {
  title: "Nossa Equipe",
};

export default function Page() {
  return <EquipePage />;
}
