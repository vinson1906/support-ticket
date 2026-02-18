import { useState, useEffect } from 'react'
import Sidebar from './components/sidebar'
import Header from './components/Header'
import TicketFilters from './components/ticketFilter'
import TicketsTable from './components/TickerTable'
import CreateTicketModal from './components/createTable'

import { useGetTicketData, useCreateTicketData, useGetFilters } from './components/service/tickets.service'



function App() {
  const [tickets, setTickets] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filters, setFilters] = useState({
    filter1: '',
    filter2: '',
  })



  console.log("filters:", filters)

  const { data: tiketData, isLoading, error } = useGetTicketData()
  const { mutate: ticketMutate } = useCreateTicketData()

  const { data: filterData } = useGetFilters(filters)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log("this is the tiketData:", tiketData);

  // useEffect(() => {
  //   fetchTickets()
  // }, [])

  // const fetchTickets = async () => {
  //   const { data, error } = await supabase
  //     .from('tickets')
  //     .select('*')
  //     .order('created_date', { ascending: false })

  //   if (error) {
  //     console.error('Error fetching tickets:', error)
  //   } else {
  //     setTickets(data || [])
  //   }
  // }

  //form data submission to backend

  const handleCreateTicket = async (formData) => {
    console.log(formData);
    try {
      ticketMutate(formData, {
        onSuccess: () => {
          alert("ticket created successfully!")
        },
        onError: () => {
          alert("something went worng while creating the ticket")
        }
      })
    }
    catch (err) {
      console.error("Error:", err)
    }

  }

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value })
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onCreateTicket={() => setIsModalOpen(true)} />
        <TicketFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onCreateTicket={() => setIsModalOpen(true)}
        />
        <TicketsTable tickets={tiketData} />



      </div>

      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateTicket}
      />
    </div>
  )
}

export default App
