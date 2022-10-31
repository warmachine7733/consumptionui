import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Counter from "../components/counter";
import Graphs from "../components/graphs";

function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <Tabs>
        <TabList>
          <Tab>Conumption</Tab>
          <Tab>Graphs</Tab>
        </TabList>
        <TabPanel><Counter/></TabPanel>
        <TabPanel><Graphs/></TabPanel>
      </Tabs>
    </div>
  );
}

export default Home;