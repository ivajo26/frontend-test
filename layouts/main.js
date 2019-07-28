import React, { Component } from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

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
            <Navbar />
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
