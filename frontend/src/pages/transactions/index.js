import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { getTransactions } from "./logic";
import TransactionCard from "../../components/Card/TransactionCard";
import style from "./style.module.scss";
import SearchSort from "../../components/SearchSort";
import Heading from "../../components/Heading";

function Transactions() {
  const alert = useAlert();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    getTransactions(search, sort)
      .then((res) => {
        setData(res.user.transactions || []);
      })
      .catch((err) => {
        console.log(err);
        alert.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [sort, search]);

  const onSort = (ascending) => {
    if (ascending) {
      //handle ascending
      setSort("asc");
      console.log("sort in ascending");
    } else {
      //handle descending
      setSort("desc");
      console.log("Sort in descending");
    }
  };

  const onSearch = (value) => {
    //handle search
    console.log("Value:", value);
    setSearch(value.trim());
  };

  return (
    <div className={`${style["transactionsWrapper"]} page`}>
      <div className={style["sticky-bar"]}>
        <SearchSort onSearch={onSearch} onSort={onSort} />
      </div>
      {loading ? (
        <p>loading...</p>
      ) : data && data.length !== 0 ? (
        <>
          {data.map(
            ({ transactionId, from, to, product, timestamp, amount }) => (
              <TransactionCard
                id={transactionId}
                to={to?.id}
                to_name={to?.name}
                from_name={from?.name}
                from={from?.id}
                prod_name={product?.title}
                date={new Date(timestamp).toLocaleDateString()}
                img={product?.images[0] || ""}
                cost={amount || "-"}
              />
            )
          )}
        </>
      ) : (
        <h5>No Transactions</h5>
      )}
    </div>
  );
}

export default Transactions;
