import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'

function NavigationBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isDashboardActive = location.pathname === '/'
  const isTaskManagerActive = location.pathname === '/taskmanager'
  return (
    <div className="flex">
      <div
        id="app-sidebar-2"
        className="bg-teal-900 h-screen flex-shrink-0 border-right-1 surface-border"
        style={{ width: '320px' }}
      >
        <div className="flex flex-column h-full">
          <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <span className="inline-flex align-items-center gap-2">
              <svg
                width="55"
                height="55"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.288"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M12.37 8.87988H17.62"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M6.38 8.87988L7.13 9.62988L9.38 7.37988"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M12.37 15.8799H17.62"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M6.38 15.8799L7.13 16.6299L9.38 14.3799"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                </g>
              </svg>
              <span className="font-semibold text-2xl text-white">
                Task App
              </span>
            </span>
          </div>
          <div className="overflow-y-auto">
            <ul className="list-none p-3 m-0">
              <li>
                <ul className="list-none p-0 m-0 overflow-hidden">
                  <li>
                    <a
                      className={`p-ripple flex align-items-center cursor-pointer p-3 border-round w-full ${
                        isDashboardActive
                          ? 'text-green-300'
                          : 'text-700 hover:bg-primary-500 text-white'
                      }`}
                      onClick={() => navigate('/')}
                    >
                      <i className="pi pi-home mr-2 text-white"></i>
                      <span className="font-medium ">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`p-ripple flex align-items-center cursor-pointer p-3 border-round w-full ${
                        isTaskManagerActive
                          ? 'text-green-300'
                          : 'text-700 hover:bg-primary-500 text-white'
                      }`}
                      onClick={() => navigate('/taskmanager')}
                    >
                      <i className="pi pi-list mr-2 text-white "></i>
                      <span className="font-medium ">Task Manager</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
