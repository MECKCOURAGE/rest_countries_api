export default function Button ({children, onHit, className}){
    return (
        <button className = {className} onClick={onHit}>{children}</button>
    )
}