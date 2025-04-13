export function ExcuseList({ excuseArray }: { excuseArray: String[] | undefined }) {
    return (
        <aside>
            <h3>Zapisane Wymówki:</h3> 
            {excuseArray.map(element => (
                <span>~{element}</span>
            ))}
        </aside>
    )
}