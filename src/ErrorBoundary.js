import React from "react";

class ErrorBoundary extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={error:false}
    }
    componentDidCatch(error,info)
    {
        this.setState({error:true})
    }
    render()
    {
        if(this.state.error)
        {
            return <h1>Ooppss</h1>
        }
        else{
            return this.props.children
        }
    
    }
}
 
export default ErrorBoundary;