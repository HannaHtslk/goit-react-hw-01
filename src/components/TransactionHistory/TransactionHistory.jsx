import s from './TransactionHistory.module.css';
// import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td className={s.type}>{item.type}</td>
              <td className={s.amount}>{item.amount}</td>
              <td className={s.amount}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
