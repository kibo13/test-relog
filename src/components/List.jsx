function List(props) {
    return (
        <ul className="apps-list">
            {props.apps.map((app) => {
                return (
                    <li className="apps-list-item" key={app.id}>
                        <p className="my-5 text-uppercase text-underline">
                            {props.clients.find((client) => client.id === app.client_id).name}
                        </p>
                        <p>
                            <span className="text-bold">Тип заявки: </span>
                            {app.type === 'delivery' ? ' доставка' : ' забор'}
                        </p>
                        <p>
                            <span className="text-bold">Цена: </span>
                            {app.price}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

export default List
