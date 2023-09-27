import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerDetailsPage from "../../components/template/CustomerDetailsPage";

function Index() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const {
    query: { customerId },
    isReady,
  } = router;
  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (data) return <CustomerDetailsPage data={data} id={customerId}/>;
}

export default Index;
