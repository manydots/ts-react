import * as React from "react";
import './index.scss';

export interface Props { 
	compiler: string; 
	framework: string; 
}

export class Hello extends React.Component<Props, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}