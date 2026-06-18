export function createElement(type:string,props:{},...children:string[]){

    const safeProps = props || {}


    return {type:type,props:{...safeProps,children}}
}