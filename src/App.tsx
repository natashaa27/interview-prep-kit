import { useHashRoute } from "./hooks/useHashRoute";
import { Hub } from "./hub/Hub";
import { ProductApp } from "./product/ProductApp";
import { ConsultingApp } from "./consulting/ConsultingApp";

export default function App() {
  const { segments, navigate } = useHashRoute();
  const root = segments[0];

  if (root === "product") {
    return <ProductApp onBackToHub={() => navigate("/")} />;
  }
  if (root === "consulting") {
    return <ConsultingApp onBackToHub={() => navigate("/")} />;
  }
  return <Hub onEnter={(vertical) => navigate(`/${vertical}`)} />;
}
