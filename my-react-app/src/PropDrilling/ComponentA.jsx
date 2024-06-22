import ComponentB from './ComponentB';
import { useContext } from 'react';

const UserContext = React.createContext();

export default function ComponentA() {
    const name = "nathan";

    

    return (
        <div className="box">
            <h1>Component A</h1>
            <ComponentB></ComponentB>
        </div>
    );
}