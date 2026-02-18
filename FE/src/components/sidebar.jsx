import { Home, Search, Ticket, FileText, Settings, Users } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, active: true },
  ]

  return (
    <div className="w-16 bg-gray-900 h-full flex flex-col items-center py-4 space-y-4">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4">
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">Q</span>
        </div>
      </div>

      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            item.active
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
          }`}
        >
          <item.icon size={20} />
        </button>
      ))}
    </div>
  )
}

export default Sidebar
