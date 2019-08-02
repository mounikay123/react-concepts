import React, { Component } from 'react';
import './App.css';

import Home from '../src/components/home'
import ComponentC from '../src/components/componentC'
import { UserProvider } from '../src/context/userContext'
import HigherOnClick from '../src/components/higherOnClick'
import HoverOnCount from '../src/components/hoverOnCount'
import Restarunts from '../src/components/naveentask'
import ReactFrag from '../src/components/fragements'
import Tablefrag from '../src/components/tableColumns'
import RenderOnClick from '../src/components/RenderPropsOnClick'
import RenderPropsHover from '../src/components/RenderPropsHover'
import Counter from '../src/components/renderCounter'
import User from '../src/components/User'
import LifecycleB from './components/componentMountLifecycleB'
import LifeCycleA from './components/componentMountlifecycleA'
import UpdatelifecycleA from './components/component UpdatelifecycleA';
import UpdatelifecycleB from './components/componentUpdatelifecycleB';
import PortalDemo from './components/PortalDemo';
import HeroError from './components/heroError';
import ParentComponent from './components/ParentComponent';
import ErrorBoundry from './components/errorBoundry';
import RefsDemo from './components/refsDemo';
import RefsByCallBack from './components/refsByCallBack';
import Mounika from "./mounika"
import TablePagination from './components/tableGrid';
import TableGrid2 from './components/tableGrid2';
import InputElement from './components/hooks';
import ImageOnMouseOverChange from './components/imageCOlorHokks';
import Login from '../src/mounika/vamsiLogin';
import Routing from "../src/components/routing"
class App extends Component {

  render() {

    return (
    //   <div className="App">
    //   {/* <RefsDemo /> */}
    //  <RefsByCallBack />
    //   <Mounika />
    //   {/* <ErrorBoundry>  
    //      <HeroError heroName="shourya" /> 
    //      </ErrorBoundry>
    //      <ErrorBoundry>   
    //   <HeroError heroName="raviteja" />
    //   </ErrorBoundry>
    //   <ErrorBoundry>
    // <HeroError heroName="joker" />
    // </ErrorBoundry> */}
 

    //   <ParentComponent />
    //   <PortalDemo />
    //     <ReactFrag />
    //     <Tablefrag />
    //     <Home />
    //     <HigherOnClick />
    //     <HoverOnCount />
    //     <UserProvider value="Talentscreen">
    //       <ComponentC />
    //     </UserProvider >
    //     <Restarunts />
    //        {/* <User name="Vishu" />
    //      <User name={()=>"Vishu"} />  */}
    //     <User name={(isLoggedin)=>isLoggedin?"Vishu": "kaveri"} />
         
    //     <Counter render={(count,incrementCount)=>(
    //       <RenderOnClick count={count} incrementCount={incrementCount} />
    //     )}
    //     />
    //     <Counter render={(count, incrementCount)=>(
    //       <RenderPropsHover count={count} incrementCount ={incrementCount} />
    //     )}
    //     />
    //     <LifeCycleA />
    //     <LifecycleB />
    //     <UpdatelifecycleA />
    //     <UpdatelifecycleB /> 

    //   </div>
    <div>
      <Routing />
       {/* <TablePagination />
    <TableGrid2 />
    <InputElement />
    <ImageOnMouseOverChange /> */}
    </div>
    );
  }
}
export default App;
