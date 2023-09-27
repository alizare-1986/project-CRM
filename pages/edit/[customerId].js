import { useEffect, useState } from "react";
import CustomerEditPage from "../../components/template/CustomerEditPage";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;
  const [data, setData] = useState(null);
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (data) return <CustomerEditPage data={data} />;
}

export default Index;
