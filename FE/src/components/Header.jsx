import { Bell, Mail, ChevronDown } from 'lucide-react'

const Header = ({ onCreateTicket }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">Support Tickets System</h1>

        {/* <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="relative">
            <Mail size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Header
