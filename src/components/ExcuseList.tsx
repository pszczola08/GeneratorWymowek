export function ExcuseList({ excuseArray }: { excuseArray: String[] | undefined }) {
    return (
        <aside>
            Zapisane Wymówki: 
            {excuseArray.map(element => (
                <span>{element}</span>
            ))}
        </aside>
    )
}