import { Search, ChevronDown } from 'lucide-react'
import { useGetFilters } from './service/tickets.service'

const TicketFilters = ({ filters, onFilterChange,onCreateTicket }) => {

  
  return (
    <div className="bg-white px-8 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <select
            value={filters.filter1}
            onChange={(e) => onFilterChange('filter1', e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
          <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={filters.filter2}
            onChange={(e) => onFilterChange('filter2', e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

       

        <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors">
          <Search size={16} />
        </button>

        <button onClick={onCreateTicket} className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Create Ticket
        </button>
      </div>
    </div>
  )
}

export default TicketFilters
