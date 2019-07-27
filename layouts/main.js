import React, { Component } from 'react'
import Sidebar from '../components/sidebar'

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

const Layout = (WrappedComponent) => {
  class Main extends Component {
    static displayName = `Layout(${getDisplayName(WrappedComponent)})`

    render () {
      return (
        <div className="Layout">
          <div className="Layout-sidebar">
            <Sidebar />
          </div>
          <div className="Layout-main">
            <nav className="Main-nav">
              <button>
                <i></i>
                <span>Home</span>
              </button>
            </nav>
            <section className="Main-content">
              <WrappedComponent {...this.props} />
            </section>
          </div>
        </div>
      )
    }
  }

  return Main
}

export default Layout
