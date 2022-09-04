import PropTypes, { shape } from 'prop-types'
import TransactionItem from './TransactionItem'

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
}

export default TransactionHistory
