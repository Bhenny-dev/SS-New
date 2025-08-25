import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AppShell from './shell'
import Home from './pages/Home'
import Organizations from './pages/Organizations'
import Forms from './pages/Forms'
import Events from './pages/Events'
import Contacts from './pages/Contacts'
import Attendance from './pages/Attendance'
import Users from './pages/Users'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  </React.StrictMode>
)
