import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import GetShortTips from './GetShortTips';
 
const ShortTipsTab = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs px-1">
      <ul className="nav">
        <TabNavItem  title="1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem  title="2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem  title="3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
            <GetShortTips />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
            
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        
        </TabContent>
      </div>
    </div>
  );
};
 
export default ShortTipsTab;