import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { getTransactions } from "./logic";
import TransactionCard from "../../components/Card/TransactionCard";
import style from "./style.module.scss";
import SearchSort from "../../components/SearchSort";

function Transactions() {
  const alert = useAlert();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(data);

  useEffect(() => {
    setLoading(true);
    getTransactions()
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
  }, []);

  const onSort = (ascending) => {
    if (ascending) {
      //handle ascending
      console.log("sort in ascending");
    } else {
      //handle descending
      console.log("Sort in descending");
    }
  };

  const onSearch = (value) => {
    //handle search

    console.log("Value:", value);
  };

  return (
    <div className={style["transactionsWrapper"]}>
      <SearchSort onSearch={onSearch} onSort={onSort} />
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
                prod_name={product.title}
                date={new Date(timestamp).toLocaleDateString()}
                img={product.images[0]}
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
