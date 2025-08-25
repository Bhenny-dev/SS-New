import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-900 via-base-800 to-base-700">
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-base-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-wide"><span className="mr-2">🌀</span> Unifiq</Link>
          <nav className="hidden md:flex gap-4 text-sm">
            {[
              ["/","Home"],["/organizations","Organizations"],["/forms","Forms"],
              ["/events","Events"],["/contacts","Contacts"],["/attendance","Recording System"],["/users","Users"]
            ].map(([path,label])=>(
              <NavLink key={path} to={path}
                className={({isActive})=> "px-3 py-1 rounded-full transition " + (isActive? "bg-neon-500 text-black":"hover:bg-white/10")}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm">Login</button>
            <button className="px-3 py-1 rounded-full bg-neon-500 text-black text-sm">Sign Up</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      <footer className="border-t border-white/10 py-6 text-center text-white/60 text-sm">© {new Date().getFullYear()} Unifiq</footer>
    </div>
  )
}
