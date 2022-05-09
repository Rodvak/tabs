import React from 'react'

const Tabs = (props) => {
  const {tabs, setActiveTab, activeTab} = props;
  return (
    <div>
      {
        tabs.map((tab, i) => <div key={i} className= {activeTab === i? "active tab":"tab" } onClick={ () => setActiveTab(i) }> {tab.label}</div>)
      }

    </div>
  )
}

export default Tabs