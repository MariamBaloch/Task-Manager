import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar'

function NavigationBar() {
  const navigate = useNavigate()

  return (
    <div className="flex">
      <div
        id="app-sidebar-2"
        className="surface-section h-screen flex-shrink-0 border-right-1 surface-border"
        style={{ width: '320px' }}
      >
        <div className="flex flex-column h-full">
          <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
            <span className="inline-flex align-items-center gap-2">
              <svg
                width="35"
                height="35"
                viewBox="0 0 1024 1024"
                fill="#2563eb"
                className="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                ></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M917.333333 512c-12.8 0-21.333333 8.533333-21.333333 21.333333v85.333334c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333334-21.333333v-85.333334c0-12.8-8.533333-21.333333-21.333334-21.333333zM902.4 433.066667c-4.266667 4.266667-6.4 8.533333-6.4 14.933333 0 2.133333 0 6.4 2.133333 8.533333s2.133333 4.266667 4.266667 6.4c4.266667 4.266667 10.666667 6.4 14.933333 6.4h4.266667c2.133333 0 2.133333 0 4.266667-2.133333 2.133333 0 2.133333-2.133333 4.266666-2.133333s2.133333-2.133333 4.266667-2.133334c2.133333-2.133333 4.266667-4.266667 4.266667-6.4V448c0-6.4-2.133333-10.666667-6.4-14.933333-8.533333-8.533333-21.333333-8.533333-29.866667 0z"
                    fill=""
                  ></path>
                  <path
                    d="M938.666667 298.666667c0-2.133333 0-4.266667-2.133334-8.533334-2.133333-2.133333-2.133333-4.266667-4.266666-6.4l-256-256c-2.133333-2.133333-4.266667-4.266667-6.4-4.266666-2.133333-2.133333-6.4-2.133333-8.533334-2.133334H213.333333C142.933333 21.333333 85.333333 78.933333 85.333333 149.333333v725.333334c0 70.4 57.6 128 128 128h597.333334c70.4 0 128-57.6 128-128v-170.666667c0-12.8-8.533333-21.333333-21.333334-21.333333s-21.333333 8.533333-21.333333 21.333333v170.666667c0 46.933333-38.4 85.333333-85.333333 85.333333H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V149.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h426.666667v128c0 70.4 57.6 128 128 128h128v42.666667c0 12.8 8.533333 21.333333 21.333333 21.333333s21.333333-8.533333 21.333334-21.333333v-64zM682.666667 192V93.866667l183.466666 183.466666H768c-46.933333 0-85.333333-38.4-85.333333-85.333333z"
                    fill=""
                  ></path>
                  <path
                    d="M234.666667 298.666667h277.333333c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333334zM768 490.666667H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333333s8.533333 21.333333 21.333334 21.333333h533.333333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333333zM768 725.333333H234.666667c-12.8 0-21.333333 8.533333-21.333334 21.333334s8.533333 21.333333 21.333334 21.333333h533.333333c12.8 0 21.333333-8.533333 21.333333-21.333333s-8.533333-21.333333-21.333333-21.333334z"
                    fill=""
                  ></path>
                </g>
              </svg>
              <span className="font-semibold text-2xl text-primary">
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
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                      onClick={() => navigate('/')}
                    >
                      <i className="pi pi-home mr-2"></i>
                      <span className="font-medium">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                      onClick={() => navigate('/taskmanager')}
                    >
                      <i className="pi pi-list mr-2"></i>
                      <span className="font-medium">Task Manager</span>
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
