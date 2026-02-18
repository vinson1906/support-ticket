import { MoreVertical, ChevronDown } from 'lucide-react'

const TicketsTable = ({ tickets }) => {
  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes('progress')) return 'bg-yellow-400'
    if (statusLower.includes('resolved')) return 'bg-green-500'
    if (statusLower.includes('closed')) return 'bg-green-500'
    return 'bg-gray-300'
  }

  const getCategoryBadgeColor = (category) => {
    return 'bg-blue-500'
  }

  const formatDate = (date) => {
    if (!date) return 'Created Date'
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="px-8 py-6">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Priority</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Created Date</th>
              {/* <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Closed</th> */}
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{ticket.title}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryBadgeColor(ticket.category)}`}>
                    {ticket.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{ticket.priority}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{formatDate(ticket.created_at)}</td>
                {/* <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <ChevronDown size={16} />
                    </button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="flex items-center justify-center space-x-2 mt-6">
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">&lt;</button>
          <button className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded">1</button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">2</button>
          <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">3</button>
          <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">4</button>
          <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">5</button>
          <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">6</button>
          <span className="px-3 py-1 text-sm text-gray-500">...</span>
          <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">42</button>
          <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">&gt;</button>
        </div> */}
      </div>
    </div>
  )
}

export default TicketsTable
